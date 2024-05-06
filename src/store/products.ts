import { createStore, createEvent, createEffect } from "effector";
import { ProductData } from "@/interface";
import { getProducts, getOneProduct, addProduct, updateProduct, deleteProduct } from "@/api/apiRequests";

export const $productsStore = createStore<ProductData[]>([]);
export const addProductEv = createEvent<ProductData>();
export const getOneProductEv = createEvent<ProductData>();
export const getAllProductsEv = createEvent<ProductData[]>();
export const deleteProductEv = createEvent<ProductData>();

export const getProductsFx = createEffect(async (limit: number) => {
  try {
    return await getProducts(limit);
  } catch (error) {
    throw error;
  }
});

export const getOneProductFx = createEffect(async (id: any) => {
  try {
    return await getOneProduct(id);
  } catch (error) {
    throw error;
  }
});

export const addProductFx = createEffect(async (data: any) => {
  try {
    return await addProduct(data);
  } catch (error) {
    throw error;
  }
});

export const updateProductFx = createEffect(async (data: any) => {
  try {
    updateProduct(data)
  } catch (error) {
    throw error;
  }
});

export const deleteProductFx = createEffect(async (id: any) => {
  try {
    deleteProduct(id)
  } catch (error) {
    throw error;
  }
});

const handleDeleteProduct = (products: ProductData[], _id: ProductData) =>
  products.filter((item) => item._id !== _id);

$productsStore
  .on(getAllProductsEv, (_, products) => products)
  .on(addProductEv, (state, newProduct) => [...state, newProduct])
  .on(deleteProductFx, (state, deletedProduct) => [
    ...handleDeleteProduct(state, deletedProduct),
  ]);

class ProductModel {
  public static async getAllProducts(limit: number) {
    const AllProductsData = await getProductsFx(limit);
    getAllProductsEv(AllProductsData);
  }

  public static addProduct(DataProduct: ProductData) {
    addProductFx({
      ...DataProduct,
    });
  }

  public static deleteProduct(_id: ProductData) {
    deleteProductFx(_id);
  }

  public static updateProduct(DataProduct: ProductData) {
    updateProductFx({
      ...DataProduct,
    });
  }
}

export class ProductController {
  public static getAllProducts(limit: number) {
    ProductModel.getAllProducts(limit);
  }
  public static addProduct(DataProduct: ProductData) {
    ProductModel.addProduct(DataProduct);
  }
  public static deleteProduct(_id: ProductData) {
    ProductModel.deleteProduct(_id);
  }
  public static updateProduct(DataProduct: ProductData) {
    ProductModel.updateProduct(DataProduct);
  }
}
