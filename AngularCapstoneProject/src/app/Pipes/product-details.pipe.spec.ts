import { ProductDetailsPipe } from './product-details.pipe';

describe('ProductDetailsPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductDetailsPipe();
    expect(pipe).toBeTruthy();
  });
});
