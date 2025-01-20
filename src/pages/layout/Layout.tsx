import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import TopFooter from "../../components/topFooter/TopFooter";
import TopHeader from "../../components/topHeader/TopHeader";

const Layout = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Outlet />
      <TopFooter />
      <Footer />
    </>
  );
};

export default Layout;
