/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/api\.open-meteo\.com\/.*/,
      handler: "NetworkFirst", // Always try fetching fresh data first
      options: {
        cacheName: "weather-api-cache",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 30, // Cache API data for 30 minutes
        },
      },
    },
    {
      urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/,
      handler: "CacheFirst", // Cache Google Fonts for offline use
      options: {
        cacheName: "google-fonts-cache",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365, // Cache for 1 year
        },
      },
    },
    {
      urlPattern: /.*/, // Cache all static assets (CSS, JS, Images)
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 7, // Cache for 7 days
        },
      },
    },
  ],
});

const nextConfig = withPWA({
  reactStrictMode: true,
});

module.exports = nextConfig;
