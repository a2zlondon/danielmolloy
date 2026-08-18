---
name: write-article
description: Write and publish a new article to danielmolloy.com. Use when asked to draft, write, or publish a blog post, article, or piece of writing for the site.
---

# Write an article for danielmolloy.com

Articles are markdown files in `content/posts/`. The site is a Next.js app on
Vercel; merging to `main` deploys. There is no CMS.

## Style

Follow the `plain-english` skill. Plain, simple English. No jargon, no
metaphors, no clever phrases. Say things directly.

Read two or three existing files in `content/posts/` before drafting so the new
piece matches the voice. The audience is investors, corporate finance advisers
and law firms evaluating software companies — knowledgeable about deals, not
necessarily about engineering.

## Create the file

Path: `content/posts/<slug>.md`

```markdown
---
title: "What Happens When the Only Engineer Leaves"
slug: "what-happens-when-the-only-engineer-leaves"
date: "2026-08-18T09:30:00"
modified: "2026-08-18T09:30:00"
excerpt: "Key-person risk is the most common finding in technical due diligence, and the easiest to miss in a data room."
image: "/images/posts/what-happens-when-the-only-engineer-leaves.jpg"
---

Body in markdown. Paragraphs, `##` headings, `-` bullet lists, **bold**,
_italic_, links and `---` separators are all styled. Do not use `#` — the
title above already renders as the page's only h1.
```

### Frontmatter rules

Every value must be **double-quoted**. This matters most for `date`: unquoted,
YAML turns it into a date object and can shift it across a timezone boundary,
which would change the article's URL.

| Field | Notes |
|---|---|
| `title` | Sentence case. Appears as the h1 and the `<title>`. |
| `slug` | Lowercase, hyphenated. Must match the filename. |
| `date` | `"YYYY-MM-DDTHH:MM:SS"`, no timezone suffix. **Sets the URL.** |
| `modified` | Same as `date` on a new post; bump it on a substantive edit. |
| `excerpt` | One or two plain sentences. Becomes the meta description and the card text — keep the first 160 characters meaningful. |
| `image` | `/images/posts/<slug>.jpg`. Optional, but every existing post has one. |

### The URL is derived, and permanent

The published URL is `/YYYY/MM/DD/slug`, sliced directly out of `date` and
`slug`. **Once an article is live, never change either field** — that changes
the URL and throws away its search ranking. To correct a published title, edit
`title` only and leave `slug` alone.

### Images

Put a file at `public/images/posts/<slug>.jpg`. Resize to 1600px wide and save
at JPEG quality ~82 (`scripts/export-wp-posts.mjs` shows the sharp call). Site
styling renders all images greyscale by design.

## Nothing else to register

The sitemap, RSS feed, `/blog` index and `llms.txt` all read from
`content/posts/` automatically. Do not hand-edit them to add a post.

## Publish

Never commit to `main`. Always:

1. `git checkout -b article/<slug>`
2. Add the markdown file and the image.
3. `npm run build` — it fails on a malformed `date`, which is the usual mistake.
4. Commit and push, then open a PR with `gh pr create`.
5. Give Daniel the Vercel preview URL. He merges to publish.
