const anotherCreateProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    stock,
    isNew   
  }
}

const product = createProduct("Product");
console.log(product);