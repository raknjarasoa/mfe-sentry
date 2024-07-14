# Notes

- test:ci => project.json > target > test > options: coverageReporters: ['text'],
- bail 1 ?
- nx show project inbox --web

# Crystal

https://nx.dev/concepts/inferred-tasks

# Setup

npx create-nx-workspace acme --preset=apps
nx add @nx/angular
nx g @nx/angular:host apps/host --remotes=apps/shop,apps/cart,apps/about

remove nx-welcome
nx serve host --open --devRemotes="shop,cart"

# deploy

nx g @nx/workspace:run-commands \
deploy \
--project=host \
--command="rm -rf production && mkdir production && cp -r dist/apps/host/\* production && cp -r dist/apps/{shop,cart,about} production && http-server -p 3000 -a localhost production"

# Sentry

upload souremap for debug
npx @sentry/wizard@latest -i sourcemaps

# Push on github
