import ProductCard from "@/components/ui/ProductCard.tsx/ProductCard";
import { ProductData } from "@/interface";

interface ICards {
  productsArr: ProductData[];
}

const Cards = ({ productsArr }: ICards) => {
  return (
    <div>
      <div className="w-[1200px] max-[1220px]:w-[1000px] max-[1020px]:w-[800px] max-[820px]:w-[600px] max-[620px]:w-[400px] max-[450px]:w-[300px] flex flex-wrap gap-x-5 max-[1020px]:gap-x-2 gap-y-5 max-[620px]:gap-y-2 mx-auto justify-start max-[820px]:justify-between max-[620px]:flex-col px-5 max-[620px]:px-0 ">
        {productsArr &&
          productsArr.map((item: ProductData, index: number) => (
            <ProductCard
              key={index}
              _id={item._id}
              title={item.title}
              category={item.category}
              amount={item.amount}
              price={item.price}
              imgUrl={item.pictureUrl}
            />
          ))}
      </div>
    </div>
  );
};

export default Cards;
