/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://https://strongmasresidence.com', 
    generateRobotsTxt: true,        
    sitemapSize: 7000,
  
    exclude: [
      '/server',
      '/api/*'
    ],
  
    additionalPaths: async (config) => {
      return [
        { loc: '/', changefreq: 'daily', priority: 1.0 },
        { loc: '/about', changefreq: 'monthly', priority: 0.8 },
        { loc: '/services', changefreq: 'monthly', priority: 0.8 },
        { loc: '/contact', changefreq: 'monthly', priority: 0.7 },
        { loc: '/faq', changefreq: 'monthly', priority: 0.7 },
        { loc: '/kyc', changefreq: 'yearly', priority: 0.6 },
        { loc: '/book-inspection', changefreq: 'monthly', priority: 0.9 },
        { loc: '/blog', changefreq: 'weekly', priority: 0.9 },
        { loc: '/properties', changefreq: 'weekly', priority: 1.0 },
      ]
    }
  }
  