"use client"

import { useEffect, useState } from "react";

const ProgressBar = () => {
    const [state, setState] = useState(0)
    const [colorState, setColorState] = useState("")

    useEffect(()=>{
        if(state >= 70){
            setColorState("bg-green-500")
        }else if(state >= 30 && state < 70){
            setColorState("bg-yellow-500")
        }else if(state>=0 && state < 30){
            setColorState("bg-red-500")
        }
    },[state]);

    return <div className="flex items-center justify-center my-20">
        <div className="innerbox min-w-[500px] mx-auto">
            <h2>Progress Bar</h2>
            <br />
            <div className="relative w-full n bg-gray-200 h-8 rounded-2xl">
                <div
                    style={{ width: state + "%", transition:"all .5s" }}
                    className={`${colorState} h-full rounded-2xl py-1 px-2
                   left-0 right-0 block`}
                >
                    <p className="text-white">{state}%</p>
                </div>
            </div>

            <div className="flex gap-2 my-5 justify-between">
                <button
                    onClick={() => {
                        if (state <= 100 && state > 0) {
                            setState(state - 10)
                        }
                        console.log(colorState)
                    }}
                    className="border-2 border-sky-500 px-5 hover:bg-sky-600 hover:text-white">-10%</button>
                <button
                    onClick={() => {
                        if (state < 100) {
                            setState(state + 10)
                        }
                    }}
                    className="border-2 border-sky-500 px-5 hover:bg-sky-600 hover:text-white">+10%</button>
            </div>
        </div>
    </div>
}
export default ProgressBar;