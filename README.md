# Attestation Sandbox
> [!NOTE]
>
> This is a sandbox exploring attestation registries for evm rollups

> [!NOTE]
>
> Work around a UI for creating schemas can be found in the apps/nextjs directory

> [!NOTE]
>
> > Smart contracts are implemented in Cairo a super-set of Rust [check the /packages/cairo](./packages/cairo/) for more and run the integration test scripts to programmatically interact with the registry contracts


## About

Reputation systems rely on attestation, in Web3 across various blockchain networks, being able to attest to an activity is a great way to prove participation, ownership or association. this has been prevalent with the POAP paradigm and we are now seeing a surge in RWA (Real world asset) tokenizations, Talent in Web3, as well as events, community participation etc. 

Attestation registries provide a permissionless / decentralized way to create a `Proof of X` for any usecase that requires proving an affiliation to an activity onchain


## Repository structure

It uses [Turborepo](https://turborepo.org) and contains:

```text
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  ├─ auth-proxy
  |   ├─ Nitro server to proxy OAuth requests in preview deployments
  |   └─ Uses Auth.js Core
  └─ next.js
      ├─ Next.js 14
      ├─ React 18
      ├─ Tailwind CSS
      └─ E2E Typesafe API Server & Client
packages
  ├─ api
  |   └─ tRPC v11 router definition
  ├─ auth
  |   └─ Authentication using next-auth.
  ├─ cairo
  |   └─ Smart contract layer for the registry
  ├─ db
  |   └─ Typesafe db calls using Drizzle & Supabase
  └─ ui
      └─ Start of a UI package for the webapp using shadcn-ui
tooling
  ├─ eslint
  |   └─ shared, fine-grained, eslint presets
  ├─ prettier
  |   └─ shared prettier configuration
  ├─ tailwind
  |   └─ shared tailwind configuration
  └─ typescript
      └─ shared tsconfig you can extend from
```

> In this repo, we use `@attestbox` as a placeholder for package names. As a user, you might want to replace it with your own organization or project name.

## Quick Start

> **Note**
> The [db](./packages/db) package is preconfigured to use Supabase and is **edge-bound** with the [Vercel Postgres](https://github.com/vercel/storage/tree/main/packages/postgres) driver. If you're using something else, make the necessary modifications to the [schema](./packages/db/src/schema) as well as the [client](./packages/db/src/index.ts) and the [drizzle config](./packages/db/drizzle.config.ts). If you want to switch to non-edge database driver, remove `export const runtime = "edge";` [from all pages and api routes](https://github.com/t3-oss/create-t3-turbo/issues/634#issuecomment-1730240214).

To get it running, follow the steps below:

### 1. Setup dependencies

```bash
# Install dependencies
pnpm i

# Configure environment variables
# There is an `.env.example` in the root directory you can use for reference
cp .env.example .env

# Push the Drizzle schema to the database
pnpm db:push
```
