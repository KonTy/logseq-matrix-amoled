module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    '@semantic-release/git',
    [
      '@semantic-release/exec',
      {
        prepareCmd:
          'zip -qq -r logseq-matrix-amoled-${nextRelease.version}.zip *.png *.css readme.md LICENSE package.json',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: 'logseq-matrix-amoled-*.zip',
      },
    ],
  ],
};
