import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./DetailClothes.scss";
import { ClothingItem } from "../../types";
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementCart, removeFromCart } from "../../app/cartSlice";
import type { RootState } from "../../app/index";
import { Toaster, toast } from "sonner";
interface CartItem extends ClothingItem {
  quantity: number; // Cart item with quantity
}
const DetailClothes = () => {
  const dispatch = useDispatch();
  const [imageNumber, setImageNumber] = useState<number>(0);
  const { id } = useParams<{ id: string }>(); // paramsdan idni olish
  const cartClothes = useSelector((state: RootState) => state.cart.value); // cartdaga jami object
  const someElement: boolean = cartClothes.some((item) => item.id === id); // cardni ichida bor yoki yoq
  const cartElement: CartItem | undefined = cartClothes.find(
    (item) => item.id === id
  );

  // data fetching

  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () =>
      axios
        .get(`https://6787c747c4a42c9161083855.mockapi.io/clothes/${id}`)
        .then((res) => res.data),
  });

  // rasm tanlash
  const handleImageClick = (i: number) => {
    setImageNumber(i);
  };
  const clothes: ClothingItem | undefined = data;

  const detailImgFirst: JSX.Element[] | undefined = data?.urls?.map(
    (image: string, i: number): JSX.Element => (
      <div
        className="detail__image-col"
        key={i}
        onClick={() => handleImageClick(i)}
      >
        <img src={image} alt="" />
      </div>
    )
  );

  const detailImages: JSX.Element = (
    <div className="detail__image">
      <div className="detail__image-cols">{detailImgFirst}</div>
      <img
        className="detail__image-main"
        src={data?.urls[imageNumber]}
        alt=""
      />
    </div>
  );

  return (
    <div className="container detail pt-5">
      {detailImages}
      <div className="detail__data">
        <h1 className="detail__data-title">{clothes?.title}</h1>
        <div className="arriwals__clothes-box-rating">
          <Rating name="read-only" value={+data?.star} readOnly />{" "}
          <p className="" style={{ fontFamily: "myText" }}>
            {data?.star} / <strong>5</strong>
          </p>
        </div>
        <p className="detail__data-price">$ {data?.price}</p>
        <p className="detail__data-desc">{data?.desc}</p>
        <hr className="detail__data-hr" />
        <h2 className="font-bold">Set color</h2>
        <div className="flex gap-2">
          <div className="rounded-full bg-red-950 w-6 h-6"></div>
          <div className="rounded-full bg-yellow-300 w-6 h-6"></div>
          <div className="rounded-full bg-green-950 w-6 h-6"></div>
        </div>
        <h2 className="font-bold">Size</h2>

        <div className="detail__data-size">
          <button className="detail__data-size-btn">Samll</button>
          <button className="detail__data-size-btn">Medium</button>
          <button className="detail__data-size-btn">Large</button>
          <button className="detail__data-size-btn">X-Large</button>
        </div>
        <div className="detail__data-stocks flex gap-20 items-center">
          <div className="detail__data-stocks-count flex gap-5 bg-[#F0F0F0] px-6 py-2 rounded-[60px] items-center">
            <button
              onClick={() => dispatch(decrementCart(data))}
              className="p-[5px]"
            >
              -
            </button>
            <p>{someElement ? cartElement?.quantity : 0}</p>
            <button
              onClick={() => dispatch(addToCart(data))}
              className="p-[5px]"
            >
              +
            </button>
          </div>
          {someElement ? (
            <button
              onClick={() => {
                dispatch(removeFromCart(data.id));
                toast.error(`Malumot cartdan olindi`);
              }}
              className="detail__data-stoks-cart px-10 py-2 border rounded-[60px] bg-black  text-white hover:bg-white hover:text-black"
            >
              Remove cart
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(addToCart(data));
                toast.success("Malumot cartga qoshildi");
              }}
              className="detail__data-stoks-cart font-bold  px-10 py-2 border-[3px] border-black rounded-[60px] hover:bg-black   hover:text-white"
            >
              Add to card
            </button>
          )}
        </div>
        <Toaster position="top-right" richColors />
      </div>
    </div>
  );
};

export default DetailClothes;
