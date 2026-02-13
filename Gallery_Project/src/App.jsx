import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Components/Card";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };
  useEffect(() => {
    getData();
  }, [index]);
  let printUserData = (
    <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading...
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen overflow-auto text-white p-4">
      <div className="flex flex-wrap gap-4 p-2">{printUserData}</div>
      <div className="flex justify-center items-center p-4 gap-6">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
            console.log(index);
          }}
          className="bg-amber-400 text-black font-bold text-sm cursor-pointer active:scale-95 rounded px-4 py-2"
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
          className="bg-amber-400 text-black font-bold text-sm cursor-pointer active:scale-95 rounded px-4 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
