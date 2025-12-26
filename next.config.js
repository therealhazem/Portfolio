/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // -------------------------
  // Images config
  // -------------------------
  images: {
    domains: ["res.cloudinary.com"],
    unoptimized: true, // disables Next.js image optimization to prevent NotSupportedError
  },

  productionBrowserSourceMaps: false, // hide source maps

  // -------------------------
  // Security headers
  // -------------------------
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https://res.cloudinary.com",
              "font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com",
              "connect-src 'self'",
              "frame-ancestors 'none'",
              "object-src 'none'"
            ].join("; "),
          },
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Prevent MIME type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Referrer policy
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Permissions policy
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), fullscreen=(self)",
          },
          // HSTS
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
