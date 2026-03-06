"use client";
import { useState } from "react";
import { colors } from "../components/colorExplorer/data";
const ColorExplorer = () => {
    const [colorState, setColorState] = useState("");
    const [hexState, setHexState] = useState("");
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const setColor = () => {
        if (input !== '') {
            for (let key in colors) {
                if (input.toLowerCase() === key) {
                    setColorState(input)
                    setHexState(colors[key])
                }
            }
        }
    }
    return <div className="">
        <div className="flex items-center gap-1 justify-center my-10">
            <input type="text" placeholder="Type a color name"
                className="theme-shadow py-2 px-3 rounded-xl"
                onChange={handleChange}
            />
            <button className="theme-shadow py-2 px-3 block rounded-xl shrink-0"
                onClick={setColor}
            >🔎</button>
        </div>

        <div className="theme-shadow rounded[10px] max-w-[800px] text-center mx-auto p-5">
            <div className="block theme-shadow w-[100px] h-[100px] rounded-[100%] mx-auto mb-10"
                style={{ backgroundColor: hexState }}
            ></div>
            <h3 className="">Name: {colorState}</h3>
            <h4>Hex Code: {hexState}</h4>
        </div>
    </div>
}
export default ColorExplorer;