import { Skeleton } from "@mui/material";

const Loading = ({ n }: { n: number }) => {
  const generateElements = (count: number): JSX.Element[] => {
    return [...Array(count)].map((_, index) => (
      <div key={index} className="">
        <Skeleton
          //   sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={295}
          height={390}
        />
      </div>
    ));
  };
  const elements = generateElements(n);
  return (
    <div className="container">
      <div className="mx-auto mt-12 mb-5 flex justify-center">
        {" "}
        <Skeleton
          //   sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={295}
          height={40}
        />
      </div>
      <div className="container flex flex-wrap gap-2 justify-center">
        {elements}
      </div>
      ;
    </div>
  );
};

export default Loading;
