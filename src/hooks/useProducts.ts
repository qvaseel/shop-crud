import { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { $productsStore, ProductController } from "@/store/products";
import api from "@/api/api";

export function useProducts(limit: number) {
  const [lengthArr, setLengthArr] = useState<number>(0);
  const [currentLimit, setCurrentLimit] = useState<number>(limit);
  const [fetching, setFetching] = useState<boolean>(true);
  const [countPage, setCountPage] = useState<boolean>(true);

  const arr = useUnit($productsStore);

  useEffect(() => {
    setCurrentLimit(0);
    api.get("/products").then((response) => {
      setLengthArr(response.data.length);
    });
  }, []);

  useEffect(() => {
    setFetching(true);
    ProductController.getAllProducts(currentLimit);
    setFetching(false);
  }, [currentLimit]);

  useEffect(() => {
    if (currentLimit > lengthArr && currentLimit > 0 && lengthArr > 0) {
      setCountPage(false);
    }
  }, [currentLimit]);

  return {
    arr,
    currentLimit,
    setCurrentLimit,
    fetching,
    countPage,
    setFetching,
  };
}
