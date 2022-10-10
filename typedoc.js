const MD = process.env.MD === 'true';
const mode = MD ? 'md' : 'html';
const other_mode = !MD ? 'md' : 'html';

const commonPlugins = [
  'typedoc-plugin-missing-exports',
  'typedoc-plugin-replace-text',
];

const extraReplacements = MD
  ? [
      {
        // all docs/md/* -> * in README.md
        // to account for README copy in docs/md
        pattern: 'docs/md/',
        flags: 'g',
        replace: '',
      },
    ]
  : [];

module.exports = {
  entryPoints: ['src/index.ts'],
  out: `docs/${mode}`,
  plugin: MD ? ['typedoc-plugin-markdown', ...commonPlugins] : commonPlugins,

  // typedoc-plugin-replace-text options
  replaceText: {
    inCodeCommentText: false,
    inCodeCommentTags: false,
    inIncludedFiles: true,
    replacements: [
      {
        // remove texts between comments
        pattern: `\\[comment\\]: # \\(<remove_for:${mode}>\\).*?\\[comment\\]: # \\(</remove_for:${mode}>\\)`,
        flags: 'gms',
        replace: '',
      },
      {
        // remove comments pertaining to the other mode
        pattern: `\\[comment\\]: # \\(</?remove_for:${other_mode}>\\)`,
        flags: 'g',
        replace: '',
      },
      ...extraReplacements,
    ],
  },
};
