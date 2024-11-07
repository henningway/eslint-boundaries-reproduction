Reproduction of possible bug in `eslint-plugin-boundaries@5.0.0`.

Run `nvm use && npm install && npm run lint`.

Output:

```
Oops! Something went wrong! :(

ESLint: 9.14.0

ConfigError: Config (unnamed): Unexpected key "meta" found.
    at rethrowConfigError (/home/hschindler/code/eslint-boundaries-reproduction/node_modules/@eslint/config-array/dist/cjs/index.cjs:303:8)
    at /home/hschindler/code/eslint-boundaries-reproduction/node_modules/@eslint/config-array/dist/cjs/index.cjs:1098:5
    at Array.reduce (<anonymous>)
    at FlatConfigArray.getConfigWithStatus (/home/hschindler/code/eslint-boundaries-reproduction/node_modules/@eslint/config-array/dist/cjs/index.cjs:1091:43)
    at FlatConfigArray.getConfig (/home/hschindler/code/eslint-boundaries-reproduction/node_modules/@eslint/config-array/dist/cjs/index.cjs:1120:15)
    at entryFilter (/home/hschindler/code/eslint-boundaries-reproduction/node_modules/eslint/lib/eslint/eslint-helpers.js:286:40)
    at async NodeHfs.<anonymous> (file:///home/hschindler/code/eslint-boundaries-reproduction/node_modules/@humanfs/core/src/hfs.js:574:24)
    at async NodeHfs.walk (file:///home/hschindler/code/eslint-boundaries-reproduction/node_modules/@humanfs/core/src/hfs.js:614:3)
    at async globSearch (/home/hschindler/code/eslint-boundaries-reproduction/node_modules/eslint/lib/eslint/eslint-helpers.js:327:26)
    at async Promise.allSettled (index 0)
```