import type { RootState } from "../../app/index";
import { useSelector, useDispatch } from "react-redux";
import { ClothingItem } from "../../types";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "./Cart.scss";
import { addToCart, decrementCart, removeFromCart } from "../../app/cartSlice";
import empty from "../../assets/11329060.png";
interface CartItem extends ClothingItem {
  quantity: number; // Cart item with quantity
}
const Cart = () => {
  const cartClothes = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

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
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            <RiDeleteBin6Fill className="text-red-800 text-3xl" />
          </button>
          <div className="flex gap-5 text-base rounded-2xl bg-[#f0f0f0] px-5 py-3">
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
    <div className="container">
      <div className="cart">{cartElement}</div>
      <div className="cartData">
        <h1 className="cartData__title">Order Summary</h1>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Cart;
