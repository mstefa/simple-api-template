import { Then } from '@cucumber/cucumber';
import * as assert from 'assert'

import { ProductDto } from '../../src/product/dtos/ProductDto';
import { Uuid } from '../../src/shared/domain/value-objects/Uuid';
import { _productRepository } from './preparation.steps';


// Given('the Product is saved in the db:', async (payload: string) => {
//   const expectedProduct = JSON.parse(payload) as ProductDto;

//   const metricOnDb = await _productRepository.search(new Uuid(expectedProduct.id))
//   console.log(metricOnDb)

//   assert.deepStrictEqual(1, 1)
// });

Then('the Product should be save in the db:', async (payload: string) => {
  const expectedProduct = JSON.parse(payload) as ProductDto;

  const metricOnDb = await _productRepository.search(new Uuid(expectedProduct.id))

  assert.deepStrictEqual(metricOnDb?.toPrimitives(), expectedProduct)
});
