import { Given, Then } from '@cucumber/cucumber';
import * as assert from 'assert'

import { Product } from '../../src/product/domain/Product';
import { Category } from '../../src/product/domain/value-objects/Category';
import { ProductDescription } from '../../src/product/domain/value-objects/ProductDescription';
import { ProductImage } from '../../src/product/domain/value-objects/ProductImage';
import { ProductPrice } from '../../src/product/domain/value-objects/ProductPrice';
import { ProductTitle } from '../../src/product/domain/value-objects/ProductTitle';
import { ProductDto } from '../../src/product/dtos/ProductDto';
import { Uuid } from '../../src/shared/domain/value-objects/Uuid';
import { ProductMother } from '../product/unit/ProductMother';
import { _productRepository } from './preparation.steps';


Given('An empty product database', async () => {
  await _productRepository._drop()
})

Given('in the db a Product is save with the following properties:', async (payload: string) => {

  const expectedProductDto = JSON.parse(payload) as ProductDto;
  const expectedProduct = new Product(
    new Uuid(expectedProductDto.id),
    new ProductTitle(expectedProductDto.title),
    new ProductDescription(expectedProductDto.description),
    new ProductPrice(expectedProductDto.price),
    new ProductImage(expectedProductDto.image),
    new Category(expectedProductDto.category)
  )

  await _productRepository.save(expectedProduct)

});

Given('in the db there are {int} random products', async (numberOfProduct: number) => {

  const resolved: Promise<void>[] = [];

  for (let i = 0; i < numberOfProduct; i++) {
    const mockedProduct = ProductMother.random();
    resolved.push(_productRepository.save(mockedProduct));
  }

  await Promise.all(resolved)

});

Then('the Product should be save in the db:', async (payload: string) => {
  const expectedProduct = JSON.parse(payload) as ProductDto;

  const metricOnDb = await _productRepository.search(new Uuid(expectedProduct.id))

  assert.deepStrictEqual(metricOnDb?.toPrimitives(), expectedProduct)
});
