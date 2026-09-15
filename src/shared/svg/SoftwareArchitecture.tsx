import React from "react";

export interface SoftwareArchitectureProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const SoftwareArchitecture: React.FC<
  SoftwareArchitectureProps
> = ({
  width = "100%",
  height = "auto",
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 300 420"
      role="img"
      aria-labelledby="security-svg-title security-svg-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="security-svg-title">
        Enterprise security architecture visual
      </title>

      <desc id="security-svg-desc">
        Shield connected to identity access, data protection, audit logging,
        secure development, cloud security, and control mapping.
      </desc>

      <defs>
        <linearGradient
          id="esdShield"
          x1="190"
          y1="95"
          x2="330"
          y2="260"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#60A5FA" />
          <stop offset=".45" stopColor="#2563EB" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>

        <linearGradient id="esdCard" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F8FBFF" />
        </linearGradient>

        <filter
          id="esdShadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy="14"
            stdDeviation="14"
            floodColor="#0F172A"
            floodOpacity=".12"
          />
        </filter>

        <filter
          id="esdSoftShadow"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="8"
            floodColor="#2563EB"
            floodOpacity=".13"
          />
        </filter>
      </defs>

      <circle
        cx="260"
        cy="190"
        r="116"
        fill="none"
        stroke="#BFDBFE"
        strokeWidth="1.5"
        strokeDasharray="7 9"
      />

      <circle
        cx="260"
        cy="190"
        r="82"
        fill="none"
        stroke="#DBEAFE"
        strokeWidth="1"
      />

      <path
        d="M210 145 C170 110 132 88 92 78"
        fill="none"
        stroke="#93C5FD"
        strokeWidth="2"
      />
      <path
        d="M205 190 C165 190 132 190 90 190"
        fill="none"
        stroke="#93C5FD"
        strokeWidth="2"
      />
      <path
        d="M210 235 C170 272 132 294 92 306"
        fill="none"
        stroke="#93C5FD"
        strokeWidth="2"
      />
      <path
        d="M310 145 C350 110 388 88 428 78"
        fill="none"
        stroke="#93C5FD"
        strokeWidth="2"
      />
      <path
        d="M315 190 C355 190 388 190 430 190"
        fill="none"
        stroke="#93C5FD"
        strokeWidth="2"
      />
      <path
        d="M310 235 C350 272 388 294 428 306"
        fill="none"
        stroke="#93C5FD"
        strokeWidth="2"
      />

      <ellipse cx="260" cy="284" rx="92" ry="20" fill="#DBEAFE" />
      <ellipse cx="260" cy="276" rx="72" ry="16" fill="#BFDBFE" />

      <path
        d="M260 82
         C292 104 323 109 348 112
         V176
         C348 233 312 266 260 286
         C208 266 172 233 172 176
         V112
         C197 109 228 104 260 82Z"
        fill="url(#esdShield)"
        filter="url(#esdShadow)"
      />

      <path
        d="M260 101
         C286 118 311 123 331 126
         V177
         C331 219 304 246 260 264
         C216 246 189 219 189 177
         V126
         C209 123 234 118 260 101Z"
        fill="none"
        stroke="#DBEAFE"
        strokeWidth="3"
        opacity=".85"
      />

      <rect
        x="230"
        y="178"
        width="60"
        height="54"
        rx="12"
        fill="#FFFFFF"
        filter="url(#esdSoftShadow)"
      />

      <path
        d="M242 178V158C242 147 250 139 260 139C270 139 278 147 278 158V178"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <path
        d="M248 178V158C248 151 253 146 260 146C267 146 272 151 272 158V178"
        fill="none"
        stroke="#1D4ED8"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <circle cx="260" cy="204" r="6" fill="#1D4ED8" />
      <path
        d="M260 209V220"
        stroke="#1D4ED8"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <g filter="url(#esdShadow)">
        <rect
          x="22"
          y="42"
          width="146"
          height="72"
          rx="18"
          fill="url(#esdCard)"
          stroke="#DBEAFE"
        />
        <rect
          x="22"
          y="154"
          width="146"
          height="72"
          rx="18"
          fill="url(#esdCard)"
          stroke="#DBEAFE"
        />
        <rect
          x="22"
          y="266"
          width="146"
          height="72"
          rx="18"
          fill="url(#esdCard)"
          stroke="#DBEAFE"
        />

        <rect
          x="352"
          y="42"
          width="146"
          height="72"
          rx="18"
          fill="url(#esdCard)"
          stroke="#DBEAFE"
        />
        <rect
          x="352"
          y="154"
          width="146"
          height="72"
          rx="18"
          fill="url(#esdCard)"
          stroke="#DBEAFE"
        />
        <rect
          x="352"
          y="266"
          width="146"
          height="72"
          rx="18"
          fill="url(#esdCard)"
          stroke="#DBEAFE"
        />
      </g>

      {/* Identity */}
      <circle cx="58" cy="78" r="20" fill="#EFF6FF" />
      <g transform="translate(48 68)">
        <path
          d="M10 8a5 5 0 1 0 0-10a5 5 0 0 0 0 10ZM1 19c1.5-6 16.5-6 18 0"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <text
        x="86"
        y="72"
        fontFamily="Inter, Arial"
        fontSize="14"
        fontWeight="700"
        fill="#0F172A"
      >
        Identity
      </text>
      <text
        x="86"
        y="91"
        fontFamily="Inter, Arial"
        fontSize="12"
        fill="#64748B"
      >
        Access control
      </text>

      {/* Data */}
      <circle cx="58" cy="190" r="20" fill="#EFF6FF" />
      <g transform="translate(48 180)">
        <rect
          x="0"
          y="8"
          width="20"
          height="12"
          rx="4"
          fill="#2563EB"
        />
        <path
          d="M4 8V4c0-3 1.8-4 6-4s6 1 6 4v4"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <text
        x="86"
        y="184"
        fontFamily="Inter, Arial"
        fontSize="14"
        fontWeight="700"
        fill="#0F172A"
      >
        Data
      </text>
      <text
        x="86"
        y="203"
        fontFamily="Inter, Arial"
        fontSize="12"
        fill="#64748B"
      >
        Protection
      </text>

      {/* Audit */}
      <circle cx="58" cy="302" r="20" fill="#EFF6FF" />
      <g transform="translate(48 292)">
        <rect
          x="1"
          y="0"
          width="18"
          height="20"
          rx="3"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.5"
        />
        <path
          d="M6 6h8M6 12h8"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <text
        x="86"
        y="296"
        fontFamily="Inter, Arial"
        fontSize="14"
        fontWeight="700"
        fill="#0F172A"
      >
        Audit
      </text>
      <text
        x="86"
        y="315"
        fontFamily="Inter, Arial"
        fontSize="12"
        fill="#64748B"
      >
        Logging
      </text>

      {/* Controls */}
      <circle cx="388" cy="78" r="20" fill="#EFF6FF" />
      <g transform="translate(378 68)">
        <path
          d="M10 0l8 3.5v6.5c0 6.5-4 10.5-8 12.5C6 20.5 2 16.5 2 10V3.5z"
          fill="#2563EB"
        />
        <path
          d="M6 10l3 3l6-7"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <text
        x="416"
        y="72"
        fontFamily="Inter, Arial"
        fontSize="14"
        fontWeight="700"
        fill="#0F172A"
      >
        Controls
      </text>
      <text
        x="416"
        y="91"
        fontFamily="Inter, Arial"
        fontSize="12"
        fill="#64748B"
      >
        Mapping
      </text>

      {/* Secure SDLC */}
      <circle cx="388" cy="190" r="20" fill="#EFF6FF" />
      <g transform="translate(378 180)">
        <path
          d="M7 2l-5 8l5 8M13 2l5 8l-5 8"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <text
        x="416"
        y="184"
        fontFamily="Inter, Arial"
        fontSize="14"
        fontWeight="700"
        fill="#0F172A"
      >
        Secure
      </text>
      <text
        x="416"
        y="203"
        fontFamily="Inter, Arial"
        fontSize="12"
        fill="#64748B"
      >
        SDLC
      </text>

      {/* Cloud */}
      <circle cx="388" cy="302" r="20" fill="#EFF6FF" />
      <g transform="translate(378 292)">
        <path
          d="M3 14c-3 0-5-2-5-4.5S0 5 4 5c1-4 4.5-6 8.5-5c3.5 1 5.5 4 5.5 7.5c3 .5 5 2.5 5 5.5c0 3.5-2.5 5.5-6 5.5H3z"
          fill="#2563EB"
        />
        <rect
          x="6"
          y="10"
          width="9"
          height="10"
          rx="2"
          fill="#FFFFFF"
        />
        <path
          d="M8 10V7.5C8 5.5 9 4.5 10.5 4.5S13 5.5 13 7.5V10"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <text
        x="416"
        y="296"
        fontFamily="Inter, Arial"
        fontSize="14"
        fontWeight="700"
        fill="#0F172A"
      >
        Cloud
      </text>
      <text
        x="416"
        y="315"
        fontFamily="Inter, Arial"
        fontSize="12"
        fill="#64748B"
      >
        Security
      </text>

      {[78, 190, 306].map((y) => (
        <React.Fragment key={`l-${y}`}>
          <circle cx="169" cy={y} r="5" fill="#2563EB" />
          <circle cx="351" cy={y} r="5" fill="#2563EB" />
        </React.Fragment>
      ))}

      <g>
        <rect
          x="72"
          y="366"
          width="118"
          height="34"
          rx="17"
          fill="#EFF6FF"
          stroke="#DBEAFE"
        />
        <text
          x="131"
          y="388"
          textAnchor="middle"
          fontFamily="Inter, Arial"
          fontSize="12"
          fontWeight="800"
          fill="#1D4ED8"
        >
          Control Map
        </text>

        <rect
          x="202"
          y="366"
          width="112"
          height="34"
          rx="17"
          fill="#EFF6FF"
          stroke="#DBEAFE"
        />
        <text
          x="258"
          y="388"
          textAnchor="middle"
          fontFamily="Inter, Arial"
          fontSize="12"
          fontWeight="800"
          fill="#1D4ED8"
        >
          Audit Trail
        </text>

        <rect
          x="326"
          y="366"
          width="122"
          height="34"
          rx="17"
          fill="#EFF6FF"
          stroke="#DBEAFE"
        />
        <text
          x="387"
          y="388"
          textAnchor="middle"
          fontFamily="Inter, Arial"
          fontSize="12"
          fontWeight="800"
          fill="#1D4ED8"
        >
          Risk Review
        </text>
      </g>
    </svg>
  );
};

export default SoftwareArchitecture;