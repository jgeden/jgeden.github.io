## Run locally

To run the site in development mode:

```shell
git clone https://github.com/jgeden/jgeden.github.io.git
cd jgeden.github.io
npm install
npm run develop
```

The site should now be running at http://localhost:8000

## Publish site

To publish the site on GitHub pages first make sure the repo has GitHub pages enabled (under Pages tab in Settings).

Then create a branch on the repo called `gh-pages`. After making any changes and pushing to GitHub, run `npm run deploy` to deploy the site to GitHub pages.

## Attribution

Styling was heavily inspired by <a href="https://github.com/rkaushik29/rkaushik29.github.io">rkaushik29.github.io</a> and reimplemented using Tailwind CSS.
