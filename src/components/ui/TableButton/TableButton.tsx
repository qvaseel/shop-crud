interface ITableButton {
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TableButton = ({ isActive, onClick }: ITableButton) => {
  return (
    <button onClick={onClick}>
      <svg
        viewBox="0 0 30 28"
        fill="none"
        className="hover:scale-125 transition-all w-[30px] h-[28px] max-[630px]:w-6 max-[630px]:h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="27.308"
          height="11"
          rx="4"
          stroke={isActive ? "#374A3D" : "#6A6A6A"}
          strokeWidth="2"
        />
        <rect
          x="1"
          y="16"
          width="27.308"
          height="11"
          rx="4"
          stroke={isActive ? "#374A3D" : "#6A6A6A"}
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default TableButton;
