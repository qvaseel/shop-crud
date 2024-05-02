import Link from "next/link";
import { ROUTER } from "@/router/router.enum";
import TitleProduct from "../Typography/TitleProduct/TitleProduct";
import TextProduct from "../Typography/TextProduct/TextProduct";
import { useState } from "react";
import { ProductController } from "@/store/products";

interface IProductCard {
  imgUrl: any;
  title: string;
  category: string;
  price: number;
  amount: number;
  _id: any;
}

const ProductCard = ({
  imgUrl,
  title,
  category,
  price,
  amount,
  _id,
}: IProductCard) => {
  const deleteProduct = async () => {
    const result = window.confirm(
      "Вы уверены, что хотите удалить данные о товаре?"
    );
    if (result) {
      try {
        await ProductController.deleteProduct(_id);
      } catch (error) {
        console.error("Ошибка при удалении продукта:", error);
      }
    }
  };

  return (
    <div
      className={` w-[350px] max-[1220px]:w-[300px] max-[1020px]:w-[240px] bg-opacity-40 bg-white rounded-[10px] p-8 flex flex-col gap-3 mb-5 mx-auto`}
    >
      {imgUrl == undefined ? (
        <div className="w-[286px] h-[286px] bg-gray-300 rounded-[10px]" />
      ) : (
        <img
          className="w-[286px] object-contain bg-white rounded-[10px]"
          src={imgUrl}
          alt="product-image"
        />
      )}
      <div>
        <div className="flex justify-between w-full">
          <TitleProduct>{`${title.substring(0, 19)}${
            title.length > 19 ? "..." : ""
          }`}</TitleProduct>
          <button onClick={deleteProduct} className="w-auto cursor-pointer">
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28571 0C5.95 0 4.85714 1.125 4.85714 2.5H2.42857C1.09286 2.5 0 3.625 0 5H17C17 3.625 15.9071 2.5 14.5714 2.5H12.1429C12.1429 1.125 11.05 0 9.71429 0H7.28571ZM2.42857 7.5V19.525C2.42857 19.8 2.62286 20 2.89 20H14.1343C14.4014 20 14.5957 19.8 14.5957 19.525V7.5H12.1671V16.25C12.1671 16.95 11.6329 17.5 10.9529 17.5C10.2729 17.5 9.73857 16.95 9.73857 16.25V7.5H7.31V16.25C7.31 16.95 6.77571 17.5 6.09571 17.5C5.41571 17.5 4.88143 16.95 4.88143 16.25V7.5H2.45286H2.42857Z"
                fill="#374A3D"
              />
            </svg>
          </button>
        </div>
        <TitleProduct>
          Цена:{" "}
          {`${price.toString().substring(0, 15)}${
            price.toString().length > 15 ? "..." : ""
          }`}
          ₽
        </TitleProduct>
        <TextProduct>{category}</TextProduct>
      </div>
      <div className="flex justify-between items-center">
        <Link
          href={`${ROUTER.PRODUCT_UPDATE}/${_id}`}
          passHref
          className="h-8 max-[1220px]:h-auto w-48 max-[1220px]:w-auto max-[1220px]:px-4  pt-[2px] max-[1220px]:py-1 text-center text-xl max-[1220px]:text-base max-[1020px]:text-xs max-[1020px]:text-[10px] text-white bg-[#374A3D] rounded-[10px]"
        >
          Редактировать
        </Link>
        <TextProduct>
          {`${amount.toString().substring(0, 3)}${
            amount.toString().length > 3 ? "..." : ""
          }`}{" "}
          шт.
        </TextProduct>
      </div>
    </div>
  );
};

export default ProductCard;
