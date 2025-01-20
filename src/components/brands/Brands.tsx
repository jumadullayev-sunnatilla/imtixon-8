import "./Brands.scss";
import zara from "../../assets/zara-logo-1 1.png";
import versagi from "../../assets/versage.png";
import prada from "../../assets/prada.png";
import gucci from "../../assets/gucci-logo-1 1.png";
import calvin from "../../assets/calvin.png";

const Brands = () => {
  return (
    <div className="bg-brands">
      <div className="container brands">
        <img className="brands__img" src={versagi} alt="" />
        <img className="brands__img" src={zara} alt="" />
        <img className="brands__img" src={gucci} alt="" />
        <img className="brands__img" src={prada} alt="" />
        <img className="brands__img" src={calvin} alt="" />
      </div>
    </div>
  );
};

export default Brands;
