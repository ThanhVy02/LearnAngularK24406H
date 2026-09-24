import { Service } from '@angular/core';
import { Product } from '../classes/IProduct';

@Service()
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Iphone18', price: 999, image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-18-pro-model-unselect-gallery-2-202609?wid=5120&hei=2880&fmt=webp&qlt=90&.v=bkJmVnE4RHE3TEVZSVlwT0RrRVEwZ2FRQXQ2R0JQTk5udUZxTkR3ZVlpS0N3VTVFeVdsZEg1VWowNUluVnBheTBoUVhuTWlrY2hIK090ZGZZbk9HeEJWb1BiTjRORlc1Y1lKU3JWempySkw0LzVQSWRvbk9SeFlySnJacDVmWFRmbW94YnYxc1YvNXZ4emJGL0IxNFp3&traceId=1' },
    { id: 2, name: 'Samsung Galaxy S24', price: -699, image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/s/s/ss-s24-ultra-xam-222_3_1.png' },
    { id: 3, name: 'Xiaomi Mi11', price: 399, image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/x/i/xiaomi-mi-11-xanhduong-600x600-600x600.jpg' },
    { id: 4, name: 'Macbook Pro 2', price: -800, image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/0/1/01_6_4.png' },
    { id: 5, name: 'Laptop Dell Pro 15', price: 699, image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/s/s/ssss_7__72.png' },
  ];
  constructor() {}
  getProductsList()
  {
    return this.products;
  }
  filterProductList(minPrice: number, maxPrice: number)
  {
    return this.products.filter(p => p.price >= minPrice && p.price <= maxPrice);
  }
}
