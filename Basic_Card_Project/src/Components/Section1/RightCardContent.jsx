const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full px-4 py-6 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-9 w-9 text-xl font-semibold flex justify-center items-center ">
        {props.id + 1}
      </h2>
      <div>
        <p className=" [text-shadow:0_2px_5px_rgba(0,0,0,0.6)] text-lg leading-[1.1] text-white mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className="font-medium px-4 py-2 rounded-full text-white"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white font-medium px-3 py-2 rounded-full"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
