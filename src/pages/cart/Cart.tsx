import type { RootState } from "../../app/index";
import { useSelector, useDispatch } from "react-redux";
import { ClothingItem } from "../../types";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "./Cart.scss";
import {
  addToCart,
  decrementCart,
  deleteAllCart,
  removeFromCart,
} from "../../app/cartSlice";
import empty from "../../assets/11329060.png";
import { useRef } from "react";
import { Toaster, toast } from "sonner";
import { NavLink } from "react-router-dom";
interface CartItem extends ClothingItem {
  quantity: number; // Cart item with quantity
}
const Cart = () => {
  const BOT__TOKEN = "7796117260:AAE2iN2mj5cTfFilWrEyPBr8DfLK-NQKw3M";
  const chat_id = -1002327152302;
  //Get updates: https://api.telegram.org/bot7796117260:AAE2iN2mj5cTfFilWrEyPBr8DfLK-NQKw3M/getUpdates
  // Send message with HTML format: add send message url this: &parse_mode=html no this &parse_mode=html/
  const cartClothes = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();
  const totalPrice = cartClothes.reduce(
    (sum, clothes) => sum + clothes.price * clothes.quantity,
    0
  );
  const totalCount = cartClothes.reduce(
    (sum, clothes) => sum + clothes.quantity,
    0
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  console.log(inputRef.current?.value);
  const handleSubmit = () => {
    if (!nameRef.current?.value.trim()) {
      alert("Iltimos, ismingizni kiriting!");
      return;
    }

    if (!inputRef.current?.value.trim()) {
      alert("Iltimos, telefon raqamingizni kiriting!");
      return;
    }
    let text = "";
    text += `Buyurtma %0A`;
    text += `Name: ${nameRef.current?.value} %0A`;
    text += `Tell: ${inputRef.current?.value} %0A`;
    cartClothes.forEach((pro, i) => {
      text += `. %0A`;
      text += `Buyurtma No ${i + 1} %0A`;
      text += `Title: ${pro.title} %0A`;
      text += `Amount: ${pro.quantity} %0A`;
      text += `Price per piece: ${pro.price} %0A`;
    });
    text += `. %0A`;
    text += `Total number of orders: ${totalCount} %0A`;
    text += `Total payment:  $${totalPrice} %0A`;
    const url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${chat_id}&text=${text}`;
    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    dispatch(deleteAllCart());
    toast.success("Buyurtmangiz Rasmiylashtirildi");
  };

  const cartElement: JSX.Element[] | undefined = cartClothes?.map(
    (item: CartItem): JSX.Element => (
      <div className="cart__box" key={item.id}>
        <div className="cart__left">
          <img className="cart__image" src={item.urls[0]} alt="" />
          <div className="cart__data">
            <h4 className="cart__title">{item.title}</h4>
            <div>
              <p className="cart__size">
                <strong>Size:</strong> Large
              </p>
              <p className="cart__size">
                <strong>Color:</strong> White
              </p>
            </div>
            <span className="cart__price">$ {item.price}</span>
          </div>
        </div>
        <div className="cart__right">
          <button
            onClick={() => {
              dispatch(removeFromCart(item.id));
              toast.error("Malumot savatchdan o'chirildi");
            }}
          >
            <RiDeleteBin6Fill className="text-red-800 text-xl" />
          </button>
          <div className="flex gap-2 text-base rounded-2xl bg-[#f0f0f0] px-3 py-1">
            <button
              disabled={item.quantity <= 1}
              onClick={() => dispatch(decrementCart(item))}
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
          </div>
        </div>
      </div>
    )
  );

  return (
    <>
      {cartClothes.length === 0 ? (
        <div className="container flex flex-col gap-2 items-center">
          <img className="w-2/3 h-1/3" src={empty} alt="" />
          <NavLink to={"/clothes"}>
            <button className="px-6 py-2 border-[3px] rounded-xl cursor-pointer font-extrabold hover:bg-black hover:text-white">
              {" "}
              Go Shopping
            </button>
          </NavLink>
        </div>
      ) : (
        <div>
          <div className="container">
            <NavLink to={"/"}>Home</NavLink>
            {" > "}
            <strong> {"Cart"}</strong>
          </div>
          <div className="container crt">
            <div className="cart">{cartElement}</div>
            <div className="cartData">
              <h1 className="cartData__title">Order Summary</h1>
              <Toaster richColors position="top-right" />

              <div className="w-full flex justify-between">
                <strong>Total products</strong>
                <p>{totalCount}</p>
              </div>
              <div className="w-full flex justify-between">
                <strong>Total prices</strong>
                <p className="cartData__price">$ {totalPrice}</p>
              </div>
              <input
                ref={nameRef}
                className="cartData__input"
                type="text"
                placeholder="name"
                required
              />
              <input
                ref={inputRef}
                className="cartData__input"
                type="tel"
                placeholder="telefon"
                required
              />
              <button onClick={handleSubmit} className="cartData__btn">
                Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
