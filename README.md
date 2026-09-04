# danielmolloy.com

The website of Daniel Molloy Ltd, an independent technology advisory practice.
Positioning: "Technology decisions are expensive. Daniel Molloy Ltd helps
investors and technology companies make the right ones."

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, shadcn/ui components
- No CMS. All content lives in this repo.

## Where content lives

- **Marketing pages**: copy is hardcoded in TSX under `app/` and
  `components/`. Business facts (URLs, legal details, Stripe button IDs) are
  in `lib/constants.ts`.
- **Blog posts**: markdown files in `content/posts/`. The blog index,
  sitemap, RSS feed and `llms.txt` pick up new posts automatically. Posts
  with `unlisted: true` frontmatter keep their URL but are hidden from all
  listings and marked noindex.
- **Insight guides**: hand-authored pages under `app/insights/`, registered
  in `lib/insights.ts` (one entry per guide drives the blog index, sitemap
  and `llms.txt`).
- **Structured data**: `components/structured-data.tsx` holds the
  Organization / Person / WebSite graph and the Service, Article, FAQ and
  Breadcrumb helpers.
- **AI crawler brief**: `app/llms.txt/route.ts`.

## Writing an article

Follow `.claude/skills/write-article/SKILL.md`. Plain English. The audience
is investors and advisers.

## Development

```bash
npm install
npm run dev
```

## Deployment

Vercel, configured in the Vercel dashboard (no config in the repo). Merging
to `main` deploys production. **Never commit to `main`** — branch, run
`npm run build`, push, and open a pull request. Review the Vercel preview
before merging.

## Payments

There is no payment page on the site. Payments go through Stripe payment
links sent from Xero.

## License

Private project — all rights reserved.
