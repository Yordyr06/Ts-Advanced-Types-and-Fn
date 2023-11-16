import { faker } from '@faker-js/faker';
import { addProduct, products} from "./products/product.service";

for (let index = 0; index < 100; index++) {
  addProduct({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({min: 1, max: 50}),
    color: faker.color.rgb({casing: 'mixed', format: 'hex', prefix: '#'}),
    price: parseInt(faker.commerce.price({min: 1, max: 100}), 10),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    isNew: faker.datatype.boolean(),
    tags: faker.datatype.array({min: 3, max: 5})
    // tags: faker.helpers.arrayElements<string>([]),
  })
}

console.log(products)