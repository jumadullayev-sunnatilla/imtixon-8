import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ClothingItem } from "../../types";
import { Rating } from "@mui/material";
import.meta.env.BASE__URL;
// import "./NewArriwals.scss";
import { NavLink } from "react-router-dom";
import Loading from "../loading/Loading";
import { BsArrowRepeat } from "react-icons/bs";

const TopSelling = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["arriwals"],
    queryFn: () => {
      return axios
        .get(`https://6787c747c4a42c9161083855.mockapi.io//clothes`)
        .then((res) => res.data);
    },
  });
  const handleRefresh = () => {
    window.location.reload();
  };
  const arriwalsClothes: JSX.Element[] | undefined = data
    ?.slice(4, 8)
    .map((item: ClothingItem): JSX.Element => {
      return (
        <div className="arriwals__clothes-box" key={item.id}>
          <img
            className="arriwals__clothes-box-images"
            src={item.urls[0]}
            alt=""
          />
          <NavLink to={`/product/${item.id}`}>
            <h2 className="arriwals__clothes-box-title">{item.title}</h2>
            <div className="arriwals__clothes-box-rating">
              <Rating name="read-only" value={item.star} readOnly />{" "}
              <p className="" style={{ fontFamily: "myText" }}>
                {item.star} / <strong>5</strong>
              </p>
            </div>
            <p className="arriwals__clothes-box-price"> $ {item.price}</p>
          </NavLink>
        </div>
      );
    });
  if (isError) {
    return (
      <div className="container">
        <div className="container flex flex-col items-center justify-center gap-20 w-2/3 ">
          <h1 className="text-4xl font-extrabold text-center">
            Nimadir hato ketdi yo internetga ulanib qaytadan koring{" "}
          </h1>
          <button
            onClick={handleRefresh}
            className="flex gap-1 items-center  font-bold py-4 px-20 border-[2px] border-black rounded-full w-max text-3xl hover:bg-black hover:text-white"
          >
            Qayta yuklash <BsArrowRepeat className="text-3xl" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {isLoading ? (
        <Loading n={4} />
      ) : (
        <div className="container arriwals">
          <h1 className="arriwals__title">Top Selling</h1>
          <div className="arriwals__clothes">{arriwalsClothes}</div>
          <NavLink to={"/clothes"}>
            <button className="arriwals__btn">View All</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default TopSelling;
