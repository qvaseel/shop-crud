"use client";
import Header from "@/components/widgets/Header/Header";
import Menu from "@/components/widgets/Menu/Menu";
import Table from "@/components/ordinary/Table/Table";
import Cards from "@/components/ordinary/Cards/Cards";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const { arr, setCurrentLimit, fetching, countPage } = useProducts(5);

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (arr && inView) {
      setCurrentLimit((prev) => (prev += 5));
    }
  }, [inView]);

  return (
    <main className="">
      <Header />
      <Menu isActive={isActive} onClick={() => setIsActive(!isActive)} />
      {isActive ? (
        !fetching && <Table fetching={fetching} productsArr={arr} />
      ) : (
        !fetching && <Cards productsArr={arr} />
      )}
      <p className={`text-center text-4xl ${fetching ? "" : "hidden"}`}>
        Загрузка...
      </p>
      <div
        className={`w-10 h-10 mb-1 ${!fetching && countPage ? "" : "hidden"}`}
        ref={ref}
      />
    </main>
  );
}
