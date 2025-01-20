import social from "../../assets/Social.png";
const Footer = () => {
  return (
    <div className="bg-[#F0F0F0]">
      <footer className="container px-4 py-10">
        <div className="sm:flex sm:justify-between block">
          <div className="sm:w-[250px] w-full mb-6">
            <h1 className="text-4xl font-bold">SHOP.CO</h1>
            <p className="text-[#00000090] py-3">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <img src={social} alt="Social Icons" />
          </div>
          <div className="flex gap-4 justify-between sm:w-4/6 w-full flex-wrap">
            <div className="mb-6">
              <h2 className="font-bold mb-3">Company</h2>
              <p className="text-[#00000090]">About</p>
              <p className="text-[#00000090]">Features</p>
              <p className="text-[#00000090]">Works</p>
              <p className="text-[#00000090]">Career</p>
            </div>
            <div className="mb-6">
              <h2 className="font-bold mb-3">Help</h2>
              <p className="text-[#00000090]">Customer Support</p>
              <p className="text-[#00000090]">Delivery Details</p>
              <p className="text-[#00000090]">Terms & Conditions</p>
              <p className="text-[#00000090]">Privacy Policy</p>
            </div>
            <div className="mb-6">
              <h2 className="font-bold mb-3">Account</h2>
              <p className="text-[#00000090]">Manage Deliveries</p>
              <p className="text-[#00000090]">Orders</p>
              <p className="text-[#00000090]">Payments</p>
            </div>
            <div className="mb-6">
              <h2 className="font-bold mb-3">Resources</h2>
              <p className="text-[#00000090]">Free eBooks</p>
              <p className="text-[#00000090]">Development Tutorial</p>
              <p className="text-[#00000090]">How to - Blog</p>
              <p className="text-[#00000090]">Youtube Playlist</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
