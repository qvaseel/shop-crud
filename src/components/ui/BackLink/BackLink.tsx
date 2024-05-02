import { useRouter } from "next/navigation";

const BackLink = () => {
  const router = useRouter();
  const handleSubmit = () => {
    const result = window.confirm("Вы уверены, что хотите покинуть страницу? Данные не будут сохранены.");
    if (result) {
      router.push("/");
    }
  };
  return (
    <button onClick={handleSubmit}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 0C9.845 0 0 9.845 0 22C0 34.155 9.845 44 22 44C34.155 44 44 34.155 44 22C44 9.845 34.155 0 22 0ZM22 5.5V16.5H38.5V27.5H22V38.5L5.5 22L22 5.5Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default BackLink;
