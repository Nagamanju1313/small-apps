"use client";
import { useReducer, useRef, useState } from "react";
import { INITIAL_STATE, reducer } from "../components/evenOrOdd/reducer";

const EvenOrOdd = () => {
    const inputRef = useRef(null)
    const [input, setInput] = useState("");
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const handleSubmit = () => {
        dispatch({ type: "SUBMIT", res: input });
        inputRef.current.focus()
    }
    return <div className="my-10">
        <h3 className="text-center block">Even Or Odd Checker</h3>

        <div className="flex flex-col max-w-[300px] mx-auto">
            <input type="text" className="border-2 border-fuchsia-700 p-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ref={inputRef}
            />
            <button className="bg-fuchsia-700 my-2 text-white p-2 hover:bg-fuchsia-900"
                onClick={handleSubmit}
            >Check</button>
            <h6 className="text-center my-10">{state.res}</h6>
        </div>
    </div>
}
export default EvenOrOdd;