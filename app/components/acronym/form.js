import { useState } from "react";

export default function Form({ state, setState, resState, setResState }) {
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    if (state === "") {
      setError(true);
    } else {
      let res = "";
      let str = state;
      str = str.split(" ");

      for (let i = 0; i < str.length; i++) {
        if (str[i] !== "") {
          res += str[i][0];
        }
      }
      setResState(res);
      setError(false);
    }

    setTimeout(() => {
      setError(false);
    }, 1000);
  };
  return (
    <div className="block max-w-[300px] mx-auto my-10">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter text..."
          className="border-2 border-amber-500 p-1"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
        <button
          className="bg-amber-500  p-1.5 text-white hover:bg-amber-900"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      {error && <span className="text-red-500">Please enter valid text</span>}
      <div className="mt-10">
        <p className="font-bold">result: {resState}</p>
      </div>
    </div>
  );
}
