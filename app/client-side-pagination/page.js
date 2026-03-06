'use client';
import { useEffect, useState } from "react";

const ClientSidePagination = () => {
    const [current, setCurrent] = useState(0)
    const [state, setState] = useState([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                setState(data)
            })
    }
    useEffect(() => {
        getData()
    }, [])

    return <div className="pagination-wrapper">
        <div className="flex flex-wrap">
            {
                state &&
                state.slice(current, 8 + current).map((item, idx) => {
                    return <div className="w-1/4 p-1" key={"idx" + idx}>

                        <div className=" border-2 border-amber-500 p-5 h-full">
                            <h2>{item.id}<br />{item.title}</h2>
                            <p>{item.body}</p>
                        </div>

                    </div>
                })
            }
        </div>


        <div className="pagination mt-10">
            <ul className="flex items-center justify-center w-full">
                <li>
                    <button className="bg-amber-700 text-white px-2 py-3"
                        onClick={() => {
                            current >= 8 ? setCurrent(current - 8) : null
                        }}
                    >Prev</button>
                </li>
                {
                    state &&
                    state.map((item, idx) => {
                        return <li key={"idxc" + idx}>{(idx % 8 === 0) ? (
                            <button className={`bg-amber-800 text-white p-3` + ` ${idx === current ? "bg-black" : ""}`}
                                onClick={() => setCurrent(idx)}
                            >{(idx / 8) + 1}</button>
                        )
                            : (null)} </li>
                    })
                }

                <li>
                    <button className="bg-amber-700 text-white px-2 py-3 "
                        onClick={() => {
                            current <= state.length - 8 ?
                                setCurrent(current + 8) : null
                        }}
                    >Next</button>
                </li>
            </ul>
        </div>
    </div>
}
export default ClientSidePagination;