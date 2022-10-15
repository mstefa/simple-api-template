const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const backend = [
  ...common,
  'tests/integration/*.feature',
  '--require tests/integration/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  backend
};
