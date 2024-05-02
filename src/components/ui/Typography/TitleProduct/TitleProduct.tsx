interface ITitleProduct {
  children: React.ReactNode;
}

const TitleProduct = ({ children }: ITitleProduct) => {
  return (
    <p className="text-2xl text-[#374A3D] max-[1220px]:text-xl max-[1050px]:text-lg max-[1020px]:text-base max-[820px]:text-sm max-[585px]:text-xs">
      {children}
    </p>
  );
};

export default TitleProduct;
