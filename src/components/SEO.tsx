import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  type?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEO({ title, description, keywords, canonical, type = 'website', schema }: SEOProps) {
  const baseUrl = 'https://www.skymaxbusiness.com';
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  // Organization schema is always injected
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Skymax Business Solutions LLP",
    "url": baseUrl,
    "logo": `${baseUrl}/favicon.svg`,
    "description": "Premium B2B Enterprise IT Procurement, Hardware Leasing, and Managed Print Solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "email": "dheeraj.bali@skymaxbusiness.com"
    }
  };

  const schemaData = schema 
    ? Array.isArray(schema) 
      ? [orgSchema, ...schema] 
      : [orgSchema, schema]
    : [orgSchema];

  return (
    <Helmet>
      <title>{title} | Skymax Business Solutions</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={`${title} | Skymax Business Solutions`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/social-preview.jpg`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={`${title} | Skymax Business Solutions`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}/social-preview.jpg`} />

      {/* Schema Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
