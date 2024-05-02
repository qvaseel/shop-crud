import Logo from "@/components/ui/Logo/Logo";

const Header = () => {
  return (
    <header className="bg-[#88A344] h-[110px] w-full px-5 max-[700px]:h-[60px]">
      <div className="max-w-7xl h-[110px] max-[700px]:h-[60px] flex gap-6 items-center justify-center mx-auto my-0">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
