export default async function handler(req, res) {
  try {
    const baseUrl = "https://udupi-taxi-website.vercel.app"

    // 🔥 Fetch blogs
    const blogs = await client.fetch(`*[_type == "blog"]{
      "slug": slug.current
    }`)

    // 🔥 Fetch services
    const services = await client.fetch(`*[_type == "service"]{
      "slug": slug.current
    }`)

    // 🔥 Static pages
    const staticPages = [
      "",
      "/services",
      "/blogs",
      "/taxi-in-udupi",
      "/taxi-in-manipal",
      "/airport-taxi"
    ]

    const staticUrls = staticPages.map(
      (page) => `
        <url>
          <loc>${baseUrl}${page}</loc>
          <changefreq>weekly</changefreq>
          <priority>${page === "" ? "1.0" : "0.9"}</priority>
        </url>`
    ).join("")

    const blogUrls = blogs.map(
      (blog) => `
        <url>
          <loc>${baseUrl}/blogs/${blog.slug}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>`
    ).join("")

    const serviceUrls = services.map(
      (service) => `
        <url>
          <loc>${baseUrl}/services/${service.slug}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.85</priority>
        </url>`
    ).join("")

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

      ${staticUrls}
      ${serviceUrls}
      ${blogUrls}

    </urlset>`

    res.setHeader('Content-Type', 'text/xml')
    res.status(200).send(xml)

  } catch (error) {
    console.error(error)
    res.status(500).send("Error generating sitemap")
  }
}