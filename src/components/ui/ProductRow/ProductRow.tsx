import Link from "next/link";
import { ROUTER } from "@/router/router.enum";
import TitleProduct from "../Typography/TitleProduct/TitleProduct";
import TextProduct from "../Typography/TextProduct/TextProduct";
import { ProductController } from "@/store/products";

interface IProductRow {
  imgUrl: any;
  title: string;
  description: string;
  category: string;
  price: number;
  amount: number;
  _id: any;
}

const ProductRow = ({
  imgUrl,
  title,
  description,
  category,
  amount,
  price,
  _id,
}: IProductRow) => {
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
    <tr
      className={`w-full h-[150px] max-[1050px]:h-auto bg-opacity-40 bg-white border-b-4 border-[#D9DECC]`}
    >
      <td className="w-[185px] p-[10px] max-[1050px]:p-3">
        <img
          className="w-[185px] max-[1050px]:w-full object-contain bg-white rounded-[10px]"
          src={imgUrl}
          alt="product-image"
        />
      </td>
      <td className="px-1 max-[1050px]:px-0 text-center">
        <TitleProduct>{category}</TitleProduct>
      </td>
      <td className="px-2 max-[1050px]:px-0 text-center">
        <TitleProduct>{`${title.substring(0, 25)}${
          title.length > 25 ? "..." : ""
        }`}</TitleProduct>
      </td>
      <td className="px-2 text-center">
        <TextProduct>{`${description.substring(0, 50)}${
          description.length > 50 ? "..." : ""
        }`}</TextProduct>
      </td>
      <td className="px-5 max-[1050px]:px-2 text-center">
        <TitleProduct>{`${amount.toString().substring(0, 4)}${
          amount.toString().length > 4 ? "..." : ""
        }`}</TitleProduct>
      </td>
      <td className="px-5 max-[1050px]:px-2 text-center">
        <TitleProduct>
          {`${price.toString().substring(0, 5)}${
            price.toString().length > 5 ? "..." : ""
          }`}
          ₽
        </TitleProduct>
      </td>
      <td className="px-5 max-[1050px]:px-2 text-center">
        <Link href={`${ROUTER.PRODUCT_UPDATE}/${_id}`} passHref>
          <svg
            className="w-10 h-10 max-[1050px]:w-7 max-[1050px]:h-7 max-[630px]:w-4 max-[630px]:h-4"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.75 0L25.625 5.125L35.875 15.375L41 10.25L30.75 0ZM20.5 10.25L0 30.75V41H10.25L30.75 20.5L20.5 10.25Z"
              fill="#374A3D"
            />
          </svg>
        </Link>
      </td>
      <td className="px-5 max-[1050px]:px-2 text-center">
        <button onClick={deleteProduct} className="w-auto cursor-pointer">
          <svg
            className="w-10 h-10 max-[1050px]:w-7 max-[1050px]:h-7 max-[630px]:w-4 max-[630px]:h-4"
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
      </td>
    </tr>
  );
};

export default ProductRow;
