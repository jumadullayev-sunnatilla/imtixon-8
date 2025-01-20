import CommentClothes from "../../components/commentClothes/CommentClothes";
import DetailClothes from "../../components/detailClothes/DetailClothes";
import NewArriwals from "../../components/newArriwals/NewArriwals";

const Detail = () => {
  return (
    <div className="container">
      <DetailClothes />
      <CommentClothes />
      <NewArriwals />
    </div>
  );
};

export default Detail;
