interface ICardsButton {
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CardsButton = ({ isActive, onClick }: ICardsButton) => {
  return (
    <button onClick={onClick}>
      <svg
        viewBox="0 0 29 28"
        fill="none"
        className="hover:scale-125 transition-all w-[29px] h-[28px] max-[630px]:w-6 max-[630px]:h-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.96191"
          y="1"
          width="10.7001"
          height="11"
          rx="2"
          stroke={isActive ? "#374A3D" : "#6A6A6A"}
          strokeWidth="2"
        />
        <rect
          x="1.96191"
          y="16"
          width="10.7001"
          height="11"
          rx="2"
          stroke={isActive ? "#374A3D" : "#6A6A6A"}
          strokeWidth="2"
        />
        <rect
          x="16.6162"
          y="1"
          width="10.7001"
          height="11"
          rx="2"
          stroke={isActive ? "#374A3D" : "#6A6A6A"}
          strokeWidth="2"
        />
        <rect
          x="16.6162"
          y="16"
          width="10.7001"
          height="11"
          rx="2"
          stroke={isActive ? "#374A3D" : "#6A6A6A"}
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default CardsButton;
