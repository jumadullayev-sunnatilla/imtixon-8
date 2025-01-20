import AboutClothes from "../../components/aboutClothes/AboutClothes";
import Brands from "../../components/brands/Brands";
import DressStyle from "../../components/dressStyle/DressStyle";
import NewArriwals from "../../components/newArriwals/NewArriwals";
import TopSelling from "../../components/topSelling/TopSelling";

const Home = () => {
  return (
    <div>
      <AboutClothes />
      <Brands />
      <NewArriwals />
      <TopSelling />
      <DressStyle />
    </div>
  );
};

export default Home;
