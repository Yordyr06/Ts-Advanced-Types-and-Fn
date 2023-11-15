import { addProduct } from "./products/product.service";

addProduct({
  id: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  title: 'Product--01',
  stock: 10,
  category: {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Category--01'
  }
})