# readed

A static-friendly Next.js reading dashboard generated from local Goodreads data.

## Local development

```bash
npm install
npm run dev
```

## Updating reads

The public repo does not store the original Goodreads account export. To refresh from Goodreads RSS, provide a user ID locally:

```bash
node src/scripts/scrape_goodreads.js YOUR_GOODREADS_USER_ID
node src/scripts/merge_goodreads_data.js
```

For the scheduled GitHub Actions refresh, set a repository variable or secret named `GOODREADS_USER_ID`.
