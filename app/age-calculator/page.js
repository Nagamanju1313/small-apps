"use client";

import { useState } from "react";

const AgeCalculator = ()=>{
    const [state, setState] = useState("")
    const [error, setError] = useState("")
    const [res, setRes] = useState('')
    const handleSubmit=()=>{
        let currentDate = new Date();
        // currentDate = currentDate.getFullYear()+"-"+currentDate.getDate()+'-'+currentDate.getDate();
        
        if(state === ""){
            setError("please select date!");
        }
        
        let [year, month, date] = state.split("-");

        let yearOld = (Number(currentDate.getFullYear()) - Number(year))-1;
        let monthOld = currentDate.getMonth() + (12 - month);

        let daysOld = new Date(year, month, 0).getDate() + currentDate.getDate();

        setRes(`You are ${yearOld} year ${monthOld} months and ${daysOld} days old.`);
        
        setTimeout(()=>{
            setError("")
        },1000)
    }

    return <div className="">
        <div className="max-w-[400px] mx-auto">
            <div className="my-10">
                <h1>Calculate Your Age</h1>
            </div>

            <div className="flex flex-col gap-3">
                <label>Select Your Date of Birth</label>
                <input className="border-2 border-black-600 py-1 px-5" type="date" value={state}
                    onChange={(e)=>setState(e.target.value)}
                />
                <button 
                    onClick={handleSubmit}
                className="border-2 border-amber-600 py-1 px-5
                    hover:bg-amber-600 hover:text-white
                ">Submit</button>
                {error !== "" ? <p className="text-red-600">{error}</p> : null}
                {res !== "" ? <p className="text-green-600 font-bold">{res} <button className="text-black"
                    onClick={()=>{setState("")
                        setRes("")
                    }}
                >reset</button></p> : null}
            </div>
        </div>
    </div>
}
export default AgeCalculator;