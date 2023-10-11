const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const backend = [
  ...common,
  'tests/**/integration/*.feature',
  '--require tests/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  backend
};
