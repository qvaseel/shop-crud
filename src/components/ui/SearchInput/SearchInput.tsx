interface IInput {
  onChange: any;
}

const SearchInput = ({ onChange }: IInput) => {
  return (
    <div className="flex relative w-full h-16">
      <div className="absolute w-full">
        <input
          type="text"
          placeholder="Поиск..."
          className="pl-8 w-full h-16 placeholder:text-white text-[32px] text-black border-none rounded-full bg-opacity-50 bg-white max-sm:text-2xl max-sm:h-14 max-[500px]:text-xl"
          onChange={onChange}
        />
      </div>
      <div className="absolute left-[93%] top-4 max-xl:left-[90%] max-md:left-[87%] max-sm:left-[84%] max-[550px]:left-[80%] max-[500px]:hidden">
        <svg
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="10" stroke="white" strokeWidth="2" />
          <path
            d="M28.3274 28.7399C28.9404 29.2972 29.8891 29.252 30.4463 28.639C31.0036 28.026 30.9584 27.0774 30.3454 26.5201L28.3274 28.7399ZM17.3274 18.7399L28.3274 28.7399L30.3454 26.5201L19.3454 16.5201L17.3274 18.7399Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchInput;
