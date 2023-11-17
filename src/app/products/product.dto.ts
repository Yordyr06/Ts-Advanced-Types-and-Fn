import { Product } from "./product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export interface FindProductDto extends Readonly<Partial<Product>> {}

// type example_1 = Pick<Product, 'color' | 'description'>
// type example_2 = Required<Product>;
// type example_3 = Readonly<Product>;