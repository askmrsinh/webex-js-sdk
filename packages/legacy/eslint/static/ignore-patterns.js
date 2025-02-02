const ignorePatterns = [
  '**/build/**/*.*',
  './packages/**/dist/**/*.*',
  'docs/^(?!examples)/*.*',
  './packages/webex/umd/**',
  'tooling/*',
  '**/test/**/*',
  'docs/**',
  // Files with decorator
  'authorization.js',
  'kms.js',
  'webex-core.js',
  'ediscovery.js',
  'CHANGELOG.md',
  '*.md',
  '*.json',
  '**/*.json',
  '*.lock',
  '*.config.*',
  // end decorator
];

module.exports = ignorePatterns;
