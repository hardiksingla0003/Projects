import { useState } from "react";
import { X } from "lucide-react";
const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const deleteNode = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    console.log(copyTask);

    setTitle("");
    setDetails("");
  };
  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-start gap-4 flex-col lg:w-1/2 p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          className="px-5 py-2 border-2 rounded w-full outline-none font-medium"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="px-5 py-2 h-32 border-2 rounded w-full outline-none font-medium"
          type="text"
          placeholder="Write Details Here"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white active:scale-95 text-black px-5 py-2 rounded w-full font-medium">
          Add Notes
        </button>
      </form>
      <div className=" lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 overflow-auto h-[90%]">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 rounded-2xl bg-[url('Notes.PNG')] bg-cover text-black px-4 py-4"
              >
                <h2
                  onClick={() => {
                    deleteNode(idx);
                  }}
                  className="absolute top-1 right-1 bg-red-500 p-0.5 rounded-full cursor-pointer "
                >
                  <X size={12} strokeWidth={2.6} />
                </h2>
                <h3 className="leading-tight text-lg font-bold wrap-break-word">
                  {elem.title}
                </h3>
                <p className="mt-4 leading-tight text-xs font-medium text-gray-500 wrap-break-word">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
