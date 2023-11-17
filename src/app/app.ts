import { faker } from '@faker-js/faker';
import { addProduct, products} from "./products/product.service";

for (let index = 0; index < 100; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    stock: faker.number.int({min: 1, max: 50}),
    color: faker.color.rgb({casing: 'mixed', format: 'hex', prefix: '#'}),
    price: parseInt(faker.commerce.price({min: 1, max: 100}), 10),
    categoryId: faker.string.uuid(),
    isNew: faker.datatype.boolean(),
    tags: faker.datatype.array({min: 3, max: 5})
    // tags: faker.helpers.arrayElements<string>([]),
  })
}

console.log(products)