# Yousaf Journal

**Ideas Worth Reading**

A frontend-only editorial blogging website designed for long-form publishing, SEO-focused article pages and a clean reading experience.

## What is included

- English-only, single editorial experience
- Responsive Home, Articles, Article, About and Contact pages
- Article search and category filters
- Individual article URLs using `?post=slug`
- Related reading and native share/copy-link controls
- Reading progress on article pages
- Light/dark theme settings
- Article text-size and reduced-motion settings
- Local reader profile UI (frontend-only)
- SEO metadata, canonical URL support and BlogPosting/WebSite structured data
- `robots.txt`
- No Supabase
- No database
- No backend
- No Vercel dependency

## Add a new blog post

Open `posts.js` and add another object to `window.YJPosts`.

Each post should include:

- `id` — unique URL slug, for example `my-new-essay`
- `title`
- `category`
- `date` — reader-facing date
- `datePublished` — ISO date such as `2026-10-04`
- `author`
- `reading`
- `excerpt`
- `accent` — `purple`, `gold` or `red`
- `body` — an array of `[heading, paragraph]` sections

The archive, search, filters, article page, related links and structured data use the same post object automatically.

## Publication configuration

Edit `site-config.js` when the final domain is purchased:

```js
window.YJConfig = {
  siteName: "Yousaf Journal",
  tagline: "Ideas Worth Reading",
  author: "Yousaf",
  description: "Thoughtful long-form writing, ideas and stories.",
  siteUrl: "https://your-final-domain.com",
  defaultOgImage: ""
};
```

Setting `siteUrl` enables the correct canonical and structured-data URLs for the publication.

## Local settings

`settings.js` stores reader preferences in the browser localStorage. These are device-local only and are not an authentication system.

## Hosting

The project remains a static website. It can be uploaded later to compatible static hosting and connected to a paid domain without introducing a database or backend.

## SEO note

The repository intentionally does not include a hard-coded sitemap URL because the final publication domain has not been selected yet. Once the domain is known, a sitemap can be added with the real absolute URLs.
