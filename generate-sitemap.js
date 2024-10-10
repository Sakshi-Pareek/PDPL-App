const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

async function generateSitemap() {
    // Base URL of your website
    const baseUrl = 'https://plusdistributions.in/';

    // Create a sitemap stream
    const sitemap = new SitemapStream({ hostname: baseUrl });

    // Define your routes here
    const routes = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'monthly', priority: 0.8 },
        { url: '/contact', changefreq: 'monthly', priority: 0.8 },
        // Add more routes as needed
    ];

    // Add routes to the sitemap stream
    routes.forEach(route => sitemap.write(route));

    // Close the stream
    sitemap.end();

    // Generate the sitemap and save it to the public folder
    const sitemapPath = path.resolve(__dirname, './public/sitemap.xml');
    const writeStream = createWriteStream(sitemapPath);
    streamToPromise(sitemap.pipe(writeStream)).then(() => {
        console.log('Sitemap generated successfully!');
    });
}

generateSitemap();
