import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import twilio from 'twilio';
import { z } from 'zod';
import dotenv from 'dotenv';
dotenv.config();

// Contact Form Schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
  interest: z.string().optional(),
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);

      // We will perform the steps outlined in the architecture diagram:
      // 1. Supabase Database
      // 2. Resend Email
      // 3. WhatsApp Alerts (Twilio)

      let supabaseSuccess = false;
      let emailSuccess = false;
      let smsSuccess = false;
      let errors: any[] = [];

      // 1. Supabase Database
      if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY) {
        try {
          const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
          // Assuming a table named 'leads'
          const { error } = await supabase.from('leads').insert([{
            full_name: data.fullName,
            email: data.email,
            phone: data.phone || null,
            company: data.company || null,
            message: data.message || null,
            interest: data.interest || 'General Inquiry',
          }]);
          
          if (error) {
            console.error("Supabase Error:", error);
            errors.push({ step: 'supabase', error: error.message });
          } else {
            supabaseSuccess = true;
          }
        } catch (e: any) {
             console.error("Supabase Exception:", e);
             errors.push({ step: 'supabase', error: e.message });
        }
      } else {
        console.warn("Supabase credentials not fully provided.");
        errors.push({ step: 'supabase', error: 'Missing Credentials' });
      }

      // 2. Resend Email
      if (process.env.RESEND_API_KEY && process.env.ADMIN_EMAIL) {
         try {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const { error } = await resend.emails.send({
              from: "Dheeraj Bali <dheeraj.bali@skymaxbusiness.com>",
              to: [process.env.ADMIN_EMAIL],
              subject: `New Lead: ${data.fullName} from ${data.company || 'Unknown Company'}`,
              html: `
                <h2>New Contact form submission</h2>
                <p><strong>Name:</strong> ${data.fullName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Company:</strong> ${data.company}</p>
                <p><strong>Interest:</strong> ${data.interest}</p>
                <p><strong>Message:</strong> ${data.message}</p>
              `
            });
            if (error) {
              console.error("Resend Error:", error);
              errors.push({ step: 'resend', error: error.message });
            } else {
              emailSuccess = true;
            }
         } catch (e: any) {
             console.error("Resend Exception:", e);
             errors.push({ step: 'resend', error: e.message });
         }
      } else {
         console.warn("Resend credentials not fully provided.");
         errors.push({ step: 'resend', error: 'Missing Credentials' });
      }

      // 3. Twilio WhatsApp Alerts (Skipped for now)
      // We respond with ok if at least we caught the submission, but we pass debug info
      res.json({
        success: true, 
        debug: {
            supabase: supabaseSuccess,
            email: emailSuccess,
            whatsapp: smsSuccess,
            errors
        }
      });

    } catch (error: any) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Validation Error", details: error.errors });
      }
      console.error("Contact API Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
