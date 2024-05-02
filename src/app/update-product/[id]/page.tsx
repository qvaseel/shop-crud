"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import BackPanel from "@/components/widgets/BackPanel/BackPanel";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ProductData, FormValues } from "@/interface";
import { getOneProductFx, ProductController } from "@/store/products";
import { useUnit } from "effector-react";
import TitleProduct from "@/components/ui/Typography/TitleProduct/TitleProduct";
import api from "@/api/api";
import { isURL } from "@/helpers/isUrl";
import { no_image } from "@/consts";


const UpdateProduct = () => {
  const [amountValue, setAmountValue] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>(no_image);
  const [deleteImage, setDeleteImage] = useState<boolean>(false);
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [inpValue, setInpValue] = useState<string>("");
  const [product, setProduct] = useState<ProductData | null>(null);
  const { id }: { id: any } = useParams()

  const products = useUnit({
    getProduct: getOneProductFx,
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const handleChangeFile = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await api.post("/upload", formData);
      setInpValue("");
      setImageUrl(`https://shop-server.up.railway.app${data.url}`);
      setInpValue(imageUrl);
      setDeleteImage(false);
    } catch (err) {
      console.warn(err);
      alert("Ошибка при загрузке файла!");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl(no_image);
    setDeleteImage(true);
    setInpValue("");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await products.getProduct(id);
        setProduct(productData);
        setValue("title", productData.title);
        setValue("description", productData.description);
        setValue("category", productData.category);
        setValue("price", productData.price);
        setValue("amount", productData.amount);
        setImageUrl(productData.pictureUrl);
        if (productData.pictureUrl == no_image) {
          setDeleteImage(true);
        }
        setInpValue(imageUrl);
      } catch (error) {
        console.error("Ошибка при получении данных продукта:", error);
      }
    };

    fetchData();
  }, [id, products.getProduct, setValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInpValue(event.target.value);
    setImageUrl(event.target.value);
    setDeleteImage(false);
  };

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountValue(Number(event.target.value));
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      data._id = product?._id;
      data.pictureUrl = imageUrl;
      data.amount = amountValue;
      ProductController.updateProduct(data);
      alert("Данные успешно обновлены")
    } catch {
      alert("Не удалось отредактировать товар");
    }
  };

  return (
    <main className="">
      <BackPanel type="Редактирование" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-7xl mx-auto flex gap-10 px-4 max-[910px]:gap-3 max-[630px]:flex-col"
      >
        <div className="flex flex-col gap-4">
          <div className="w-[520px] h-[520px] mx-auto block max-[910px]:w-[320px] max-[910px]:h-[320px] max-[710px]:w-[170px] max-[710px]:h-[170px]">
            <img
              className="w-[520px] h-[520px] object-cover max-[910px]:w-[320px] max-[910px]:h-[320px] max-[710px]:w-[170px] max-[710px]:h-[170px]"
              src={imageUrl}
              alt="Изобржения по такому URL-адресу не существует"
            />
          </div>
          <div className="flex w-full gap-4 items-center max-[710px]:flex-col">
            <div>
              <button
                type="button"
                onClick={() => inputFileRef.current?.click()}
                className="text-lg text-[#E8EBE0] bg-[#374A3D] rounded-[10px] py-1 max-[910px]:text-base max-[910px]:px-1"
              >
                Загрузить изображение
              </button>
              <input
                ref={inputFileRef}
                type="file"
                onChange={handleChangeFile}
                className="hidden"
              />
            </div>
            <p className="text-lg max-[630px]:text-sm">
              или вставьте URL, чтобы изменить изображение
            </p>
          </div>
          <input
            className="pl-3 h-12 rounded-[10px] bg-white bg-opacity-40 text-base"
            value={inpValue}
            onChange={handleChange}
          />
          {!isURL(imageUrl) && !deleteImage && (
            <p>Строка не является URL адресом!</p>
          )}
          <div className="flex flex-col gap-[8px]">
            {!deleteImage && (
              <button
                className="text-lg text-[#E8EBE0] bg-[#374A3D] rounded-[10px] px-4 py-1 block mx-auto"
                onClick={onClickRemoveImage}
              >
                Удалить
              </button>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-[28px]">
          <div className="flex flex-col gap-[8px]">
            <TitleProduct>Название</TitleProduct>
            <input
              className={`pl-3 h-12 rounded-[10px] bg-white bg-opacity-40 text-lg border-2 ${
                errors.title ? "border-red-800" : ""
              }`}
              {...register("title", { required: true })}
            />
            {errors.title && <p>Заполните поле</p>}
          </div>
          <div className="flex flex-col gap-[8px]">
            <TitleProduct>Описание</TitleProduct>
            <textarea
              className={`pl-3 max-h-40 min-h-12 rounded-[10px] bg-white bg-opacity-40 text-lg border-2 ${
                errors.description ? "border-red-800" : ""
              }`}
              {...register("description", { required: true })}
            />
            {errors.description && <p>Заполните поле</p>}
          </div>
          <div className="flex flex-col gap-[8px]">
            <TitleProduct>Категория</TitleProduct>
            <select
              className={`pl-3 h-12 rounded-[10px] bg-white bg-opacity-40 text-lg border-2 ${
                errors.category ? "border-red-800" : ""
              }`}
              {...register("category", { required: true })}
            >
              <option value="Без категории">Без категории</option>
              <option value="Лиственные растения">Лиственные растения</option>
              <option value="Цветущие растения">Цветущие растения</option>
              <option value="Кактусы и суккуленты">Кактусы и суккуленты</option>
              <option value="Цитрусовые и плодовые растения">
                Цитрусовые и плодовые растения
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-[8px]">
            <TitleProduct>Цена</TitleProduct>
            <input
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e" || e.key === "+") {
                  e.preventDefault();
                }
              }}
              className="pl-3 h-12 rounded-[10px] bg-white bg-opacity-40 text-base"
              type="number"
              {...register("price", { required: true })}
            />
            {errors.price && <p>Заполните поле</p>}
          </div>
          <div className="flex flex-col gap-[8px]">
            <TitleProduct>Кол-во товара на складе</TitleProduct>
            <input
              className={`pl-3 h-12 rounded-[10px] bg-white bg-opacity-40 text-lg border-2 ${
                amountValue < 0 ? "border-red-800" : ""
              }`}
              type="number"
              onChange={handleChangeAmount}
              value={amountValue}
            />
            <div className="flex justify-between w-full">
              <div className="">
                {amountValue < 0 && <p>Число не может быть отрицательным</p>}
              </div>
              <div className="flex gap-2 self-end">
                <button
                  type="button"
                  className="rounded-[10px] bg-[#374A3D] px-3 py-1 text-white"
                  onClick={() => setAmountValue((prev) => (prev -= 1))}
                >
                  -
                </button>
                <button
                  type="button"
                  className="rounded-[10px] bg-[#374A3D] px-3 py-1 text-white"
                  onClick={() => setAmountValue((prev) => (prev += 1))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Сохранить"
            className="hover:cursor-pointer rounded-[10px] bg-[#374A3D] px-3 py-1 text-white text-lg mb-5"
          />
        </div>
      </form>
    </main>
  );
};

export default UpdateProduct;
