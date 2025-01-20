const TopFooter = () => {
  return (
    <div
      style={{ marginTop: "30px" }}
      className="container px-14 py-8 bg-black rounded-3xl flex justify-between flex-wrap gap-y-5 mx-3 "
    >
      <h1 className="max-w-[550px] font-extrabold text-[40px] leading-10 text-white">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div>
        <div className="py-3 px-4 rounded-3xl w-[300px] text-[#00000060] font-semibold bg-white mb-2">
          lorem imsum{" "}
        </div>
        <div className="py-3 px-4 rounded-3xl w-[300px] text-[#00000060] font-semibold bg-white">
          lorem imsum{" "}
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
