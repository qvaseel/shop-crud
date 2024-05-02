import ProductRow from "@/components/ui/ProductRow/ProductRow";
import { ProductData } from "@/interface";
import TitleProduct from "@/components/ui/Typography/TitleProduct/TitleProduct";

interface ITable {
  productsArr: ProductData[];
  fetching: boolean;
}

const Table = ({ productsArr, fetching }: ITable) => {
  return (
    <div>
      <table className="max-w-7xl block mx-auto px-4 ">
        <thead
          className={`bg-opacity-40 bg-white border-b-4 border-[#D9DECC] ${
            !fetching ? "" : "hidden"
          }`}
        >
          <tr>
            <td className="text-center">
              <TitleProduct>Изображение</TitleProduct>
            </td>
            <td className="text-center">
              <TitleProduct>Категория</TitleProduct>
            </td>
            <td className="text-center">
              <TitleProduct>Название</TitleProduct>
            </td>
            <td className="text-center">
              <TitleProduct>Описание</TitleProduct>
            </td>
            <td className="text-center">
              <TitleProduct>Кол-во</TitleProduct>
            </td>
            <td className="text-center">
              <TitleProduct>Цена</TitleProduct>
            </td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {productsArr &&
            productsArr.map((item: ProductData, index: number) => (
              <ProductRow
                key={index}
                _id={item._id}
                title={item.title}
                description={item.description}
                category={item.category}
                amount={item.amount}
                price={item.price}
                imgUrl={item.pictureUrl}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
