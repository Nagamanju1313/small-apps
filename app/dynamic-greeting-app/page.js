"use client";

import { useEffect, useState } from "react";

const DynamicGreetingApp = ()=>{
    const [time, setTime] = useState('');

    useEffect(()=>{
        let time = setInterval(()=>{
            setTime(new Date().getHours() + ":"+ new Date().getMinutes()+":"+new Date().getSeconds())
        },1000);

        return ()=>clearInterval(time)
    },[time]);

    return <div className="flex items-center justify-center my-30">
        <div className="min-w-[400px] mx-auto bg-gray-100 px-10 py-10 text-center">
            <h1>{
                    new Date().getHours() <= 12 ?
                    "Good Morning 🌄" : (new Date().getHours() > 12 && new Date().getHours() < 18) ?
                    "Good Afternoon 🌆": (new Date().getHours() >= 18) ? "Good Night 🌃" : null
                }</h1>
                
            <h2>{time}</h2>
        </div>
    </div>
}
export default DynamicGreetingApp;