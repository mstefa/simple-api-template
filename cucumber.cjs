const common = [
  '--import ts-node/esm/db.ts',
  '--loader ts-node/esm'
];

const backend = [
  ...common,
  'tests/**/integration/*.feature',
  '--import tests/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  backend
};
