import { useState } from "react";
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { Badge, Drawer } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/index";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const cartClothes = useSelector((state: RootState) => state.cart.value);

  return (
    <div className=" sticky top-0 left-0 z-50 bg-white ">
      <header className="header container  ">
        <div className="flex items-center gap-2">
          <div className="header__menu" onClick={() => setOpenModal(true)}>
            <GiHamburgerMenu />
          </div>
          <Drawer open={openModal} onClose={() => setOpenModal(false)}>
            <div className="flex flex-col justify-between items-center h-full pb-5">
              <ul className="p-10 flex flex-col gap-4">
                <li>
                  <span className="header__title">
                    <NavLink to={"/"}>SHOP.CO</NavLink>
                  </span>
                </li>
                <li className="header__list-item flex gap-1 items-center">
                  <NavLink to={"/clothes"}> Shop</NavLink>
                  <span>
                    <FaAngleDown />
                  </span>
                </li>
                <li className="header__list-item">On_sale</li>
                <li className="header__list-item">New_arriwals</li>
                <li className="header__list-item">Brands</li>
              </ul>
              <NavLink to={"https://t.me/sunnatilla_jumadullayev"}>
                <p className="font-serif font-semibold underline">
                  Jumadullayev
                </p>
              </NavLink>
            </div>
          </Drawer>
          <span className="header__title">
            <NavLink to={"/"}>SHOP.CO</NavLink>
          </span>
        </div>
        <ul className="header__list">
          <li className="header__list-item flex gap-1 items-center">
            <NavLink to={"/clothes"}> Shop</NavLink>
            <span>
              <FaAngleDown />
            </span>
          </li>
          <li className="header__list-item">On_sale</li>
          <li className="header__list-item">New_arriwals</li>
          <li className="header__list-item">Brands</li>
        </ul>
        <div className="header__search">
          <div className="text-[20px]">
            <CiSearch />
          </div>
          <input
            className="header__search-input"
            type="search"
            placeholder="Search products"
          />
        </div>
        <div className="header__icons">
          <div className="header__icons-search header__icons-el">
            <CiSearch />
          </div>
          <div className="header__icons-el">
            <NavLink to={"/cart"}>
              <Badge badgeContent={cartClothes.length} color="primary">
                <MdOutlineShoppingCart />
              </Badge>
            </NavLink>
          </div>
          <div className="header__icons-el">
            <MdOutlineAccountCircle />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
