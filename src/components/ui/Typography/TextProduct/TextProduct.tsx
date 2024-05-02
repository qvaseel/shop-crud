interface ITextProduct {
  children: React.ReactNode;
}

const TextProduct = ({ children }: ITextProduct) => {
  return (
    <p className="text-xl text-[#374A3D] font-light  max-[1050px]:text-base max-[820px]:text-xs max-[585px]:text-[8px] leading-none">
      {children}
    </p>
  );
};

export default TextProduct;
