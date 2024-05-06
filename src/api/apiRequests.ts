import api from "./api";

export const getProducts = async (limit: number) => {
    try {
      const response = await api.get(`/products?limit=${limit}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getOneProduct = async (id: any) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const addProduct = async (data: any) => {
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
  };
  
  export const updateProduct = async (data: any) => {
    try {
      const response = await api.put("/products", data);
      if (response.status !== 200) {
        throw Error("Не удалось обновить данные о товаре");
      }
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteProduct = async (id: any) => {
    try {
      const response = await api.delete(`/products/${id}`);
    } catch (error) {
      throw error;
    }
  };