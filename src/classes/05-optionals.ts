const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true   
  }
}

const p1 = createProduct("Product", true, 10);
console.log(p1);