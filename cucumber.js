const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const backend = [
  ...common,
  'tests/**/integration/*.feature',
  '--require tests/step_definitions/*.steps.ts'
].join(' ');


const product = [
  ...common,
  'tests/product/integration/*.feature',
  '--require tests/step_definitions/*.steps.ts'
].join(' ');

const cart = [
  ...common,
  'tests/cart/integration/*.feature',
  '--require tests/step_definitions/*.steps.ts'
].join(' ');


module.exports = {
  backend,
  product,
  cart
};
