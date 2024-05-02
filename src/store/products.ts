import { createStore, createEvent, createEffect } from "effector";
import { ProductData } from "@/interface";
import api from "@/api/api";

export const $productsStore = createStore<ProductData[]>([]);
export const addProduct = createEvent<ProductData>();
export const getOneProduct = createEvent<ProductData>();
export const getAllProducts = createEvent<ProductData[]>();
export const deleteProduct = createEvent<ProductData>();

export const getProductsFx = createEffect(async (limit: number) => {
  try {
    const response = await api.get(`/products?limit=${limit}`);

    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getOneProductFx = createEffect(async (id: any) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addProductFx = createEffect(async (data: any) => {
  try {
    const response = await api.post("/products", data);

    if (response.status === 200) {
      return data;
    } else {
      throw Error("Не удалось добавить данные о товаре");
    }
  } catch (error) {
    throw error;
  }
});

export const updateProductFx = createEffect(async (data: any) => {
  try {
    const response = await api.put("/products", data);

    if (response.status === 200) {
    } else {
      throw Error("Не удалось обновить данные о товаре");
    }
  } catch (error) {
    throw error;
  }
});

export const deleteProductFx = createEffect(async (id: any) => {
  try {
    const response = await api.delete(`/products/${id}`);
  } catch (error) {
    throw error;
  }
});

const handleDeleteProduct = (products: ProductData[], _id: ProductData) =>
  products.filter((item) => item._id !== _id);

$productsStore
  .on(getAllProducts, (_, products) => products)
  .on(addProduct, (state, newProduct) => [...state, newProduct])
  .on(deleteProductFx, (state, deletedProduct) => [
    ...handleDeleteProduct(state, deletedProduct),
  ]);

class ProductModel {
  public static async getAllProducts(limit: number) {
    const AllProductsData = await getProductsFx(limit);
    getAllProducts(AllProductsData);
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
