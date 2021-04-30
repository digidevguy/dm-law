export default function handler(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/xml');

	// Instructing the Vercel edge to cache the file
	res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600');

	// generate sitemap here
	const xml = `<?xml version='1.0' encoding='utf-8'?>
      <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9/'>
      <url>
      <loc>http://www.dyermaurolaw.com/</loc>
      <lastmod>4/29/2021</lastmod>
      <priority>1</priority>
      </url>
      <url>
      <loc>http://www.dyermaurolaw.com/about</loc>
      <lastmod>4/29/2021</lastmod>
      <priority>0.8</priority>
      </url>
      <url>
      <loc>http://www.dyermaurolaw.com/contact</loc>
      <lastmod>4/29/2021</lastmod>
      <priority>0.8</priority>
      </url>
      <url>
      <loc>http://www.dyermaurolaw.com/business-formation</loc>
      <lastmod>4/29/2021</lastmod>
      </url>
      <url>
      <loc>http://www.dyermaurolaw.com/family</loc>
      <lastmod>4/29/2021</lastmod>
      </url>
      <url>
      <loc>http://www.dyermaurolaw.com/noncomplete-nda</loc>
      <lastmod>4/29/2021</lastmod>
      </url>
      <url>
      <loc>http://www.dyermaurolaw.com/probate</loc>
      <lastmod>4/29/2021</lastmod>
      </url>
      <url>
      <loc>http://www.dyermaurolaw.com/trade-secrets</loc>
      <lastmod>4/29/2021</lastmod>
      </url>
      <url>
      <loc>http://www.dyermaurolaw.com/trademark</loc>
      <lastmod>4/29/2021</lastmod>
      </url>
      <url>
      <loc>http://www.dyermaurolaw.com/wills-and-trust</loc>
      <lastmod>4/29/2021</lastmod>
      </url>
      </urlset>`;

	res.end(xml);
}

module.exports = {
	async rewrites() {
		return [
			{
				source: '/sitemap.xml',
				destination: 'api/sitemap',
			},
		];
	},
};