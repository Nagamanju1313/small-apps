// "use client"
// import { useEffect, useState } from "react";

// const Timer = ()=>{
//     const [state, setState] = useState(0)

//     useEffect(()=>{
//         let id = setInterval(()=>{
//             setState(prev => prev + 1)
//         },1000)
//         return ()=> clearInterval(id)
//     },[state]);

//     return <div className="flex items-center justify-center my-10">
//         <h1>{state}</h1>
//     </div>
// }
// export default Timer;
"use client";
import { useEffect, useState } from "react";

const Timer = ()=>{
    const [start, setStart] = useState(false);
    const [state, setState] = useState(0);
    let id;
    useEffect(()=>{
        id = setInterval(()=>{
            start ? setState(state+1) : ""
        },1000)
        return ()=>{
            clearInterval(id)
        }
    },[start, state]);


    return <div className="timerwrapper w-full flex items-center justify-center my-10">
        <div className="timerbox max-[300] mx-auto">
            <h1>TIMER : {state}s</h1>
            <br/>
            <button 
                onClick={()=>setStart(true)}
            className="border-2 border-amber-500 py-1 px-3 mx-1 inline-block hover:bg-amber-500 hover:text-white">Start</button>
            <button
                onClick={()=>{clearInterval(id)
                     setStart(false)}}
            className="border-2 border-amber-500 py-1 px-3 mx-1 inline-block hover:bg-amber-500 hover:text-white">Stop</button>
            <button
            onClick={()=>setState(0)}
            className="border-2 border-amber-500 py-1 px-3 mx-1 inline-block hover:bg-amber-500 hover:text-white">Reset</button>
        </div>
    </div>
}
export default Timer;