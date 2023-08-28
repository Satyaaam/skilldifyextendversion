import "./why.css";
const Why = () => {
  return (
    <div className="why_div h-[60vh] flex items-center justify-between px-4">
      {/* <img src={why_image} alt={"why_image"} width={"100%"} height={"auto"} className={"scale-105 sm:scale-100"}/> */}
      <div className="w-[100%] flex flex-col items-center justify-center">
        <p className="text-white font-bold md:text-6xl sm:text-5xl text-3xl text-center w-[90%] md:w-[50%] sm:w-[60%] ">
          Why Training is Essential
        </p>
        <p className="font-semibold sm:text-3xl md:text-4xl text-2xl text-white my-5 text-center">
          Practise is juts as valuable as sales{" "}
        </p>
      </div>
    </div>
  );
};

export default Why;
