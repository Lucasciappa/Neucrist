module.exports = {
    siteUrl: "https://neucrist.com.ar",
    generateRobotsTxt: true,
    exclude: ["/en*", "/de*", "/disallowed"],
    alternateRefs: [
      {
        href: "https://neucrist.com.ar/en",
        hreflang: "en",
      },
      {
        href: "https://neucrist.com.ar/de",
        hreflang: "de",
      },
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          disallow: "/disallowed",
        },
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    },
  };