import "./DressStyle.scss";
import dreass1 from "../../assets/dreass1.png";
import dreass2 from "../../assets/dreass2.png";
import dreass3 from "../../assets/dreass3.png";
import dreass4 from "../../assets/dreass4.png";

const DressStyle = () => {
  return (
    <div className="dress container">
      <h1 className="dress__title">BROWSE BY DRESS STYLE</h1>
      <div className="dress__el1">
        <div
          style={{
            backgroundImage: `url(${dreass1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="dress__el1-1"
        >
          {" "}
          <h2 className="dress__el1-1-title">Casual</h2>
        </div>
        <div
          style={{
            backgroundImage: `url(${dreass2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="dress__el1-2"
        >
          {" "}
          <h2 className="dress__el1-2-title">Formal</h2>
        </div>
      </div>
      <div className="dress__el2">
        <div
          style={{
            backgroundImage: `url(${dreass3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="dress__el2-1"
        >
          {" "}
          <h2 className="dress__el2-1-title">Party</h2>
        </div>
        <div
          style={{
            backgroundImage: `url(${dreass4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="dress__el2-2"
        >
          <h2 className="dress__el2-2-title">Gym</h2>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
