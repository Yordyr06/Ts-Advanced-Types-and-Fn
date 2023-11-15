type Sizes = 'S' | 'M' | 'L' | 'XL';
type userId = string | number;

interface Product {
  id: string | number;
  title: string;
  createdAt: Date ;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: 5,
  title: 'Product',
  createdAt: new Date(),
  stock: 50,
  size: 'S'
});

const addProduct = (data: Product) => {
  products.push(data);
}