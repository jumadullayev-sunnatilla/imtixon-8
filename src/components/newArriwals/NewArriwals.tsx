import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ClothingItem } from "../../types";
import { Rating } from "@mui/material";
import.meta.env.BASE__URL;
import "./NewArriwals.scss";
import { NavLink } from "react-router-dom";
const NewArriwals = () => {
  const { data } = useQuery({
    queryKey: ["arriwals"],
    queryFn: () => {
      return axios
        .get(`https://6787c747c4a42c9161083855.mockapi.io//clothes`)
        .then((res) => res.data);
    },
  });
  const arriwalsClothes: JSX.Element[] | undefined = data
    ?.slice(0, 4)
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
  console.log(data);

  return (
    <div className="container arriwals">
      <h1 className="arriwals__title">New Arriwals</h1>
      <div className="arriwals__clothes">{arriwalsClothes}</div>
      <NavLink to={"/clothes"}>
        <button className="arriwals__btn">View All</button>
      </NavLink>
    </div>
  );
};

export default NewArriwals;
