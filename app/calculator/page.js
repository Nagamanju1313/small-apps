'use client';

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { HiOutlineDivide } from "react-icons/hi2";
import { LuMinus } from "react-icons/lu";
import { MdOutlineClear } from "react-icons/md";
import { RiEqualLine } from "react-icons/ri";

const CalculatorPage = ()=>{
    const [state, setState] = useState(0);

    return <div className="">
        <div className="max-w-[500px] mx-auto my-10">
            <div className="w-full">
                <div className="calc-btn-wrap relative">
                    <input type="text" placeholder="" value={state}
                        className="border-2 p-4 py-3 w-full bg-amber-100"
                        onChange={(e)=>isNaN(Number(e.target.value))  ? setState("") : setState(String(e.target.value))}
                    />
                    <button className="top-0 absolute right-0"
                    onClick={()=>setState("")}
                    >Clear</button>
                </div>
                
                <div className="grid grid-cols-4 gap-1 calc-btn-wrap mt-2">
                    <button onClick={()=>setState(state+"7")}>7</button>
                    <button onClick={()=>setState(state+"8")}>8</button>
                    <button onClick={()=>setState(state+"9")}>9</button>
                    <button className="flex justify-center items-center"><MdOutlineClear /></button>
                </div>
                <div className="grid grid-cols-4 gap-1 calc-btn-wrap mt-2">
                    <button onClick={()=>setState(state+"4")}>4</button>
                    <button onClick={()=>setState(state+"5")}>5</button>
                    <button onClick={()=>setState(state+"6")}>6</button>
                    <button className="flex justify-center items-center"><LuMinus /></button>
                </div>
                <div className="grid grid-cols-4 gap-1 calc-btn-wrap mt-2">
                    <button onClick={()=>setState(state+"1")}>1</button>
                    <button onClick={()=>setState(state+"2")}>2</button>
                    <button onClick={()=>setState(state+"3")}>3</button>
                    <button className="flex justify-center items-center"><GoPlus /></button>
                </div>
                <div className="grid grid-cols-4 gap-1 calc-btn-wrap mt-2">
                    <button>%</button>
                    <button onClick={()=>setState(state+"0")}>0</button>
                    <button className="flex justify-center items-center"><HiOutlineDivide /></button>
                    <button className="flex justify-center items-center"><RiEqualLine /></button>
                </div>
            </div>
        </div>
    </div>
}
export default CalculatorPage;