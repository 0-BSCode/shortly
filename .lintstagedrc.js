module.exports = {
    "{apps,libs}/**/src/**/*.ts": (files) => {
        return `nx affected --target=typecheck --files=${files.join(',')}`;
      },
    "{apps,libs}/**/src/**/*.{ts,tsx,css,html,json}": [
      files => `nx affected:lint --files=${files.join(',')}`,
      files => `nx format:write --files=${files.join(',')}`,
    ],
}