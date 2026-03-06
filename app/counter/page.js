"use client"
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1)
    }
    const dec = () => {

        if (count <= 0) {
            setCount(0)
            return
        }
        setCount(count - 1)
    }

    return <div className='container mx-auto'>
        <div className="flex flex-column justify-center align-items-center mt-10">
            <h2>Count</h2>
            <h1>{count}</h1>
        </div>

        <div className="flex justify-center gap-10 mt-10">
            <div className="">
                <button className="text-white p-2 text-center bg-sky-500 rounded-sm
                hover:bg-sky-900
                "
                    onClick={inc}
                >Increment</button>
            </div>
            <div>
                <button className="text-white p-2 text-center bg-sky-500 rounded-sm hover:bg-sky-900"
                    onClick={dec}
                >
                    decrement</button>
            </div>
            <div>
                <button className="text-white p-2 text-center bg-sky-500 rounded-sm hover:bg-sky-900"
                    onClick={()=>setCount(0)}
                >
                    Reset</button>
            </div>
        </div>

    </div>
}
export default Counter;