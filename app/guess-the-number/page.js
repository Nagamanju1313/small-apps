"use client";

import { useEffect, useRef, useState } from "react";

const GuessTheNumber = ()=>{
    const [state, setState] = useState("");
    const [errRes, setErrRes] = useState("");
    const [resState, setResState] = useState("");
    const [numState, setNumState] = useState(0);
    const inputRef = useRef(null);
    const [reset, setReset] = useState(false);
    const [limit, setLimit] = useState(0)
    const [score, setScore] = useState(0)
    const [outofMoves, setOutofMoves] = useState("")

    useEffect(()=>{
        setNumState(Math.floor(Math.random()*100+1))
    },[reset])

    const handleChange = (e)=>{
        setState(e.target.value)
    }  
    
    const handleSubmit = ()=>{
        if(limit >= 10 && score <= 5){
            setOutofMoves(`Out of moves!! Your score is ${score}. Please Try Again.`)
            setScore(0)
            setLimit(0)
            setState("")
            setTimeout(()=>{
                setOutofMoves("")
            },2000);
            return;
        }else if(score > 5 && limit === 10){
            setOutofMoves(`Great You Won the match!! Your score is ${score}. Congratulation`)
        }
        if(Number(state) > 100 || Number(state) < 1){
            setErrRes("Value Should be below 100 and above 0");
            setLimit(limit+1);
        }

        if(isNaN(state)){
            setErrRes("Value is Not a Number");
            setLimit(limit+1);
        }

        if(state !== '' && Number(state) <= 100 && Number(state) >= 1){
            if(numState === Number(state)){
                setResState(`Great!! You Guessed the correct Number ${numState}`)
                setScore(score+1)
                setReset(true)
            }else if(numState > Number(state)){
                setLimit(limit+1);
                setResState(`Sorry, Your Number ${state} is below Guessed Number`)
            }else if(numState < Number(state)){
                setLimit(limit+1);
                setResState(`Sorry, Your Number ${state} is Greater than Guessed Number`)
            }

        }

        setTimeout(()=>{
            setErrRes("")
            setState("")
        },2000)

        setTimeout(()=>{
            setResState('')
        },4000)
        inputRef.current.focus()
    }

    return <div className=" max-w-[500px] mx-auto my-10">
        <h3 className="text-center block mb-10">Guess The Number <br/><span className="bg-sky-600 p-1 mt-10 block px-5 text-white">(Target Score should be greater than 5 or lessthan 10)</span></h3>
        <div className="flex justify-between mt-5">
            <p className="mb-0">Moves: {limit}</p>
            <p>Max Limit: 10</p>
        </div>
        <br/>
        <input type="text" placeholder="Enter a Number Between 1 and 100" 
        className="border-2 border-black-500 p-2 w-full"
            onChange={handleChange}
            value={state}
            ref={inputRef}
        />
        <span className="text-red-600">{errRes}</span>
        <div className="btns flex gap-6 justify-between my-2">
            <button 
            onClick={handleSubmit}
            className="bg-sky-600 text-white py-1 px-5 hover:bg-amber-900">Check Guess</button>
            <button 
                onClick={()=>setState("")}
            className="bg-sky-600 text-white py-1 px-5 hover:bg-amber-900">Reset</button>
        </div>
        <strong>Score: {score}</strong>
        <p className={score <= 5 ? "text-red-500 text-xl" : "text-green-500 text-xl"}>{outofMoves}</p>
        <h3 className="text-center">{resState}</h3>
    </div>
}
export default GuessTheNumber;