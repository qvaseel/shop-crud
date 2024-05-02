import Link from "next/link";
import { ROUTER } from "@/router/router.enum";

const AddProductButton = () => {
  return (
    <Link
      href={ROUTER.PRODUCT}
      className=" bg-[#374A3D] rounded text-white text-2xl py-2 px-4 max-[630px]:text-sm"
    >
      + Добавить товар
    </Link>
  );
};

export default AddProductButton;
