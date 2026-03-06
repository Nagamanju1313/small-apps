"use client";

import { useRef, useState } from "react";

const ChipsPage = () => {
  const [formval, setFormVal] = useState("");
  const [err, setErr] = useState(false);
  const [state, setState] = useState([]);
  const createRef = useRef(null);

  const handleSubmit = () => {
    if (formval === "") {
      setErr(true);
    } else {
      setErr(false);
      let obj = { id: state.length === 0 ? 1 : state.length+1, value: formval };
      setFormVal("");
      if (state.length === 0) {
        setState([obj]);
      } else {
        obj = { id: state.length+1, value: formval };
        let copyState = [...state];
        let checkState = copyState.filter((filt) => {
          return filt.value === formval;
        });
        if (checkState.length !== 0) {
          setErr(true);
          reset();
          return;
        }
        copyState.push(obj);
        setState(copyState);
      }
    }
    createRef.current.focus();
    reset();
  };

  const reset = () => {
    setTimeout(() => {
      setErr(false);
      setFormVal("");
    }, 1000);
  };

  const removeItem = (index) => {
    let copyData = [...state];
    console.log(index);
    for (let i = 0; i < copyData.length; i++) {
      if (copyData[i].id == index) {
        copyData.splice(i, 1);
      }
    }
    setState([...copyData]);
  };
  return (
    <div className="block max-w-[300px] mx-auto my-20">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter Input"
          className="border-2 border-amber-600 p-1"
          value={formval}
          onChange={(e) => {
            setFormVal(e.target.value);
          }}
          ref={createRef}
        />
        <button
          onClick={handleSubmit}
          className="bg-amber-600 border-2 border-amber-600 p-1 text-white"
        >
          Submit
        </button>
      </div>
      {err && <span className="text-red-500">Please enter a valid data</span>}
      <br />
      {state &&
        state.map((item, idx) => {
          return (
            <span
              key={"idx" + idx}
              className="border-amber-500 border-2 rounded-[50px] my-1 px-2 py-.5 inline-flex items-center justify-between mx-1 shrink-0"
            >
              {item.value}{" "}
              <i
                className="not-italic text-xs cursor-pointer w-3 ml-5"
                onClick={() => {
                  removeItem(item?.id);
                }}
              >
                X
              </i>
            </span>
          );
        })}
    </div>
  );
};
export default ChipsPage;
