import { NavLink } from "react-router-dom";
import aboutImage from "../../assets/about-image.png";
import "./AboutClothes.scss";
const AboutClothes = () => {
  return (
    <div style={{ backgroundColor: "#F2F0F1" }}>
      <div className="container about">
        <div className="about__main">
          <h1 className="about__main-title">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="about__main-text">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <NavLink to={"/clothes"}>
            <button className="about__main-btn">Shop Now</button>
          </NavLink>
          <div className="about__main-statistic">
            <div className="about__main-statistic-el">
              <span>200+</span>
              <p>International Brands</p>
            </div>
            <div className="about__main-statistic-line"></div>
            <div className="about__main-statistic-el">
              <span>200+</span>
              <p>International Brands</p>
            </div>
            <div className="about__main-statistic-line"></div>
            <div className="about__main-statistic-el">
              <span>200+</span>
              <p>International Brands</p>
            </div>
          </div>
        </div>
        <div className="about__image">
          <img src={aboutImage} alt="about images" />
        </div>
      </div>
      ;
    </div>
  );
};

export default AboutClothes;
