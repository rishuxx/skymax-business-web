import { SVGProps } from 'react';

interface SkymaxLogoProps extends SVGProps<SVGSVGElement> {
  mode?: 'light' | 'dark' | 'currentColor';
  className?: string;
  wedgeColor?: string;
}

export default function SkymaxLogo({ mode = 'currentColor', className, wedgeColor, ...props }: SkymaxLogoProps) {
  // Let the client choose the text coloring. Default is currentColor to respect parent contexts,
  // with a fallback to black for light backgrounds and white for dark.
  const textFill = 
    mode === 'light' 
      ? '#000000' 
      : mode === 'dark' 
      ? '#FFFFFF' 
      : 'currentColor';

  const wedgeFill = wedgeColor || '#065177'; // Exact brand dark teal from original vector, or custom wedgeColor override

  return (
    <svg
      viewBox="0 0 578.95 143.88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g id="Layer_1" data-name="Layer 1">
        <g>
          {/* Letter 'a' fill */}
          <path 
            d="M451.9,34.65c-6.19-4.51-14.08-6.87-23.63-7.12l-20.02,20.67c4.54-2.22,9.4-3.36,14.61-3.36s9.62,1.23,12.85,3.67c3.23,2.45,4.84,5.73,4.84,9.85v10.85c-5.57-6.57-14.08-9.85-25.54-9.85-7.46,0-13.99,2.17-19.61,6.51-5.62,4.34-8.43,10.85-8.43,19.53s2.86,14.88,8.6,19.61c5.73,4.73,12.21,7.09,19.45,7.09,11.24,0,19.75-3.45,25.54-10.35v10.28h21.2v-54.01c0-10.79-3.28-18.58-9.85-23.37M440.55,90.73c-3.45,4.67-9.13,7.01-17.03,7.01-4.34,0-7.96-1.06-10.85-3.17-2.9-2.11-4.34-5.01-4.34-8.68s1.44-6.76,4.34-8.93c2.89-2.17,6.51-3.25,10.85-3.25,7.9,0,13.57,2.34,17.03,7.01v10.01Z" 
            fill={textFill} 
          />
          {/* Letter 'k' */}
          <polygon 
            points="123.24 67.48 155.12 30.93 129.08 30.93 98.54 66.81 98.54 10.14 77.34 32.03 77.34 111.55 98.54 111.55 98.54 90.85 108.22 80.5 129.58 111.55 156.12 111.55 123.24 67.48" 
            fill={textFill} 
          />
          {/* Letter 'm' */}
          <path 
            d="M367.82,34.43c-4.12-4.06-9.96-6.09-17.52-6.09-5.79,0-11.21,1.45-16.28,4.34-5.06,2.9-8.87,6.34-11.43,10.35-3.23-9.79-10.68-14.69-22.36-14.69-5.57,0-10.85,1.36-15.86,4.09-5.01,2.73-8.51,5.54-10.51,8.43v-10.52h-21.2v48.63l21.2,21.88v-44.15c1.78-2.56,4.17-4.78,7.18-6.68,3-1.89,6.17-2.84,9.51-2.84,8.01,0,12.02,4.28,12.02,12.85v50.91h21.36v-54.41c1.78-2.45,4.14-4.62,7.09-6.51,2.95-1.89,6.15-2.84,9.6-2.84,8.01,0,12.02,4.28,12.02,12.85v50.91h21.37v-58.25c0-8.12-2.06-14.21-6.18-18.28" 
            fill={textFill} 
          />
          {/* Letter 's' */}
          <path 
            d="M64.76,73.7c-2.34-3.56-5.29-6.15-8.85-7.76-3.56-1.61-7.4-3-11.52-4.17-4.12-1.17-7.96-2.03-11.52-2.59-3.56-.55-6.51-1.42-8.84-2.59-2.34-1.17-3.51-2.64-3.51-4.42,0-2.33,1.17-4.26,3.51-5.76,2.34-1.5,5.39-2.25,9.18-2.25,4.78,0,9.32.89,13.6,2.67,4.28,1.78,7.7,4.01,10.26,6.68l8.52-14.52c-9.24-7.34-20.09-11.02-32.55-11.02-10.24,0-18.3,2.45-24.2,7.34C2.94,40.21,0,46.22,0,53.33c0,5.01,1.19,9.21,3.59,12.6,2.39,3.4,5.34,5.87,8.85,7.43,3.5,1.56,7.34,2.89,11.52,4,4.17,1.11,8.01,1.95,11.52,2.51,3.5.56,6.45,1.47,8.84,2.75,2.39,1.28,3.59,2.92,3.59,4.93,0,2.67-1.15,4.78-3.42,6.34-2.28,1.56-5.65,2.34-10.1,2.34-1.59,0-3.23-.17-4.88-.41l15.24,15.73c5.67-1.14,10.42-3.21,14.26-6.22,6.18-4.84,9.26-11.04,9.26-18.61,0-5.11-1.17-9.46-3.5-13.02" 
            fill={textFill} 
          />
          {/* Letter 'x' */}
          <polygon 
            points="524.94 68.7 551.98 29.48 528.28 29.48 511.75 54.35 502.51 40.58 488.72 54.82 498.23 68.7 469.69 110.1 493.22 110.1 511.75 82.89 530.11 110.1 553.81 110.1 524.94 68.7" 
            fill={textFill} 
          />
          {/* Letter 'y' */}
          <path 
            d="M223.63,30.55l-21.03,56.08-15.79-42.1-15.82,16.33,20.59,51.47-3,6.84c-1.78,3.89-5.51,5.84-11.18,5.84-2.45,0-4.68-.45-6.68-1.34l-3.17,19.03c3.11.78,6.62,1.17,10.52,1.17,7.57-.23,13.85-1.75,18.86-4.59,5.01-2.84,8.9-7.82,11.68-14.94l37.89-93.8h-22.87Z" 
            fill={textFill} 
          />

          {/* Group of exact 6 color wedges in spelling order S-K-Y-M-A-X to trigger .cls-1:nth-child() delay */}
          <g id="skymax-animated-wedges">
            {/* 1st wedge: 's' */}
            <path 
              className="cls-1"
              d="M4.58,112.77c-.06-8.72,3.27-17.45,10.03-23.99l23,23.75-33.03.24Z" 
              fill={wedgeFill} 
            />
            {/* 2nd wedge: 'k' */}
            <path 
              className="cls-1"
              d="M67.01,0c-.06,8.72,3.27,17.45,10.03,23.99L100.04.24l-33.03-.24Z" 
              fill={wedgeFill} 
            />
            {/* 3rd wedge: 'y' */}
            <path 
              className="cls-1"
              d="M159.07,30.48c-.06,8.72,3.27,17.44,10.03,23.99l23-23.75-33.03-.24Z" 
              fill={wedgeFill} 
            />
            {/* 4th wedge: 'm' */}
            <path 
              className="cls-1"
              d="M242.49,111.17c-.06-8.72,3.27-17.45,10.03-23.99l23,23.75-33.03.24Z" 
              fill={wedgeFill} 
            />
            {/* 5th wedge: 'a' */}
            <path 
              className="cls-1"
              d="M386.97,27.48c-.06,8.72,3.27,17.44,10.03,23.99l23-23.75-33.03-.24Z" 
              fill={wedgeFill} 
            />
            {/* 6th wedge: 'x' */}
            <path 
              className="cls-1"
              d="M471.97,29.41c-.06,8.72,3.27,17.44,10.03,23.99l23-23.75-33.03-.24Z" 
              fill={wedgeFill} 
            />
          </g>
          {/* Elegant tiny brand accent rectangle (breathes in different colors like a modern tech design symbol) */}
          <rect
            className="logo-accent-rect"
            x="558"
            y="98"
            width="12"
            height="12"
            rx="2.5"
            fill="#1D5EA8"
          />
        </g>
        {/* TM text rendered as beautiful SVG paths exactly */}
        <g id="TM-superscript">
          <path
            d="M 557.24 33.44 H 565 M 561 33.44 V 40"
            stroke={textFill}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 567 40 V 33.44 L 571 37.5 L 575 33.44 V 40"
            stroke={textFill}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
}
