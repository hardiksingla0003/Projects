import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full flex rounded-4xl overflow-x-auto w-2/3 gap-8 p-6"
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            color={elem.color}
            img={elem.img}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
