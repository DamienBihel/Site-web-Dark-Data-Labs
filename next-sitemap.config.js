module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://darkdatalabs.netlify.app',
  generateRobotsTxt: false, // Nous avons déjà créé notre propre robots.txt
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'], // Exclure les pages qui ne doivent pas être indexées
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://darkdatalabs.netlify.app/server-sitemap.xml',
    ],
  },
  changefreq: 'daily',
  priority: 0.7,
};
