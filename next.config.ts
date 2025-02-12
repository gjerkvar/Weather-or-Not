/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/api\.open-meteo\.com\/.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "weather-api-cache",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 30,
        },
      },
    },
    {
      urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts-cache",
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 60 * 60 * 24 * 365,
        },
      },
    },
    {
      urlPattern: /.*\.(?:css|js|woff2|png|jpg|jpeg|svg|gif|ico)$/, // ✅ Cache CSS, JS, fonts, and images
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 7, // Cache for 7 days
        },
      },
    },
    {
      urlPattern: /^\/$/, // ✅ Explicitly cache the home page `/`
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "home-page-cache",
        expiration: {
          maxEntries: 1,
          maxAgeSeconds: 60 * 60 * 24 * 7,
        },
        cacheableResponse: {
          statuses: [200],
        },
      },
    },
    {
      urlPattern: /.*/, // ✅ Cache all static assets (CSS, JS, images)
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 7,
        },
      },
    },
    {
      urlPattern: /.*/, // ✅ Cache all other pages
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "pages-cache",
        expiration: {
          maxEntries: 20,
          maxAgeSeconds: 60 * 60 * 24 * 7,
        },
        cacheableResponse: {
          statuses: [200],
        },
      },
    },
  ],
  fallbacks: {
    document: "/", // ✅ Serve `page.tsx` as the offline fallback
  },
});

const nextConfig = withPWA({
  reactStrictMode: true,
});

module.exports = nextConfig;
