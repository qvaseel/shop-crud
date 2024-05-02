import BackLink from "@/components/ui/BackLink/BackLink";

interface IBackPanel {
  type: string;
}

const BackPanel = ({ type }: IBackPanel) => {
  return (
    <header className="bg-[#88A344] h-[110px] w-full px-5 mb-16">
      <div className="max-w-7xl h-[110px] flex items-center justify-between mx-auto my-0">
        <div className="flex gap-6 items-center">
          <BackLink />
          <p className="font-semibold text-4xl text-white max-[630px]:text-xl">{type} товара</p>
        </div>
      </div>
    </header>
  );
};

export default BackPanel;
