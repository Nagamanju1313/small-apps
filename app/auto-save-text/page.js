"use client";
import { useEffect, useState } from "react";

const AutoSaveText = ()=>{
    const [state, setState] = useState('')

    useEffect(()=>{
        let data;
        if(typeof window !== undefined){
            data = window.localStorage.getItem("autosave")
        }
        if(data){
            setState(JSON.parse(data))
        }else{
            setState("")
        }
    },[]);

    const clearData = ()=>{
        setState("")
        if(typeof window !== undefined){
            localStorage.setItem("autosave","")
        }
    }

    const handleChange = (e) =>{
        setState(e.target.value)
        if(typeof window !== undefined){
            localStorage.setItem("autosave", JSON.stringify(e.target.value))
        }
    }
    return <div className="flex items-center justify-center mx-auto max-w-2 my-10">
        <input type="text" placeholder="" value={state} 
            className="border-2 border-amber-500 py-1"
            onChange={handleChange}
        />
        <button 
            onClick={clearData}
        className="bg-amber-700 border-2 border-amber-500 text-white py-1 px-5">Clear</button>
    </div>
}
export default AutoSaveText;