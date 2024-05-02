import TableButton from "@/components/ui/TableButton/TableButton";
import CardsButton from "@/components/ui/CardsButton/CardsButton";
import AddProductButton from "@/components/ui/AddProductButton/AddProductButton";

interface IMenu {
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Menu = ({ isActive, onClick }: IMenu) => {
  return (
    <div className="h-[140px] border-b-4 border-[#374A3D] px-4 mb-5 max-[630px]:h-[90px]">
      <div className="max-w-[1200px] flex justify-between mx-auto h-full items-center">
        <div className="w-[72px] flex justify-between max-[630px]:w-14">
          <TableButton isActive={isActive} onClick={onClick} />
          <CardsButton isActive={!isActive} onClick={onClick} />
        </div>
        <AddProductButton />
      </div>
    </div>
  );
};

export default Menu;
