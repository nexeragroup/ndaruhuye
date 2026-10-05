# Ndaruhuye Portfolio

An Angular SSR portfolio for Ndaruhuye, covering software engineering, systems, data, and AI work.

- Production: [ndaruhuye.nexeragroup.rw](https://ndaruhuye.nexeragroup.rw)
- Staging: `staging.ndaruhuye.nexeragroup.rw`
- Node.js: `>=24.15.0 <25`
- Package manager: pnpm 12

## Local development

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm start
```

Open `http://localhost:4200`.

The development proxy sends `/api` requests to `http://localhost:3300`. Change only the origin in `.env.dev` when a different local API is needed.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm start` | Start the development server at port 4200. |
| `pnpm test -- --watch=false` | Run the unit tests once. |
| `pnpm build:dev` | Create a development SSR build. |
| `pnpm build:staging` | Create a staging SSR build. |
| `pnpm build:prod` | Create an optimized production SSR build. |
| `pnpm test:proxy` | Test proxy configuration rules. |

SSR output is written to `dist/client/<environment>/ssr`. Run a built server locally with:

```bash
PORT=4200 pnpm serve:prod:ssr
```

## Environments

| Environment | Web domain | API domain | Indexing |
| --- | --- | --- | --- |
| Development | `localhost:4200` | `localhost:3300` | Disabled |
| Staging | `staging.ndaruhuye.nexeragroup.rw` | `staging-api.ndaruhuye.nexeragroup.rw` | Disabled |
| Production | `ndaruhuye.nexeragroup.rw` | `api.ndaruhuye.nexeragroup.rw` | Enabled |

Environment definitions live in `src/environments/`. The proxy files (`.env.dev`, `.env.staging`, and `.env.prod`) affect the Angular development server only; they are not deployment secrets.

## SEO

SSR renders page-specific titles, descriptions, canonical URLs, Open Graph/Twitter metadata, and JSON-LD. Production indexing files are available at:

- `/robots.txt`
- `/sitemap.xml`

Add the production domain to Google Search Console using the verification tag in `src/index.html`.

## Docker deployment

The application is deployed as a single SSR web container. Docker files are in `deploy/`.

| Environment | Container | Host port | Deploy directory |
| --- | --- | --- | --- |
| Staging | `ndaruhuye-web-staging` | `10411` | `/home/yves/ndaruhuye/staging/web` |
| Production | `ndaruhuye-web-prod` | `10401` | `/home/yves/ndaruhuye/prod/web` |

Build and run on a server:

```bash
docker compose --env-file deploy/.env.staging -f deploy/compose.staging.yml up -d --build
docker compose --env-file deploy/.env.prod -f deploy/compose.prod.yml up -d --build
```

Install the matching Nginx configuration from `deploy/nginx/` on the host. Before enabling Nginx, issue certificates for:

- `staging.ndaruhuye.nexeragroup.rw`
- `ndaruhuye.nexeragroup.rw`
- `www.ndaruhuye.nexeragroup.rw`

Production redirects `www.ndaruhuye.nexeragroup.rw` to the canonical non-`www` domain.

## Continuous deployment

GitHub Actions deploy automatically from:

- `staging` → staging
- `production` → production

Set these repository or environment secrets before the first deployment:

```text
DEPLOY_HOST
DEPLOY_USER
DEPLOY_PORT
DEPLOY_SSH_KEY
DEPLOY_KNOWN_HOSTS
```

Each workflow syncs the source, creates the required Docker network, rebuilds the container, and checks the public HTTPS endpoint.

## Project structure

```text
src/app/           Application features, layout, and shared UI
src/environments/  Environment-specific URLs and indexing settings
src/seo/           Crawler directives and sitemap assets
deploy/            Docker Compose, runtime settings, and Nginx configurations
.github/workflows/ GitHub Actions deployment workflows
```
