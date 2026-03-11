"use client";
import { useReducer, useState } from "react";
import mortgageReducer from "../components/mortgage/mortgagereducer";

const MortgageCalculator = ()=>{
    const INITIAL_STATE = {
        amount:"",
        tenure:"",
        intrest:"",
        res:"",
        errors:{
            amountErr:"",
            tenuresErr:"",
            percentangeErr:""
        }
    }

    const [state, dispatch] = useReducer(mortgageReducer, INITIAL_STATE);

    const handleClick = ()=>{
        dispatch({type:"SUBMIT"});

    }

    const handleChange = (e)=>{
        dispatch({type:"CHANGE", payload:{
            [e.target.name]:e.target.value
        }});
    }
    return <div className="w-full mx-auto text-center my-10">
        <h2>Mortgage Calculator</h2>

        <div className="max-w-[500px] mx-auto my-10">
            <div className="field my-2">
                <input type="text" placeholder="Enter Your Loan Amount"
                    className="border-2 border-black-700 p-2 w-full"
                    value={state.amount}
                    onChange={handleChange}
                    name="amount"
                />
                {
                    state.errors.amountErr &&
                    <p className="text-red-500">{state.errors.amountErr }</p>
                }
            </div>
            <div className="field my-2">
                <input type="text" placeholder="Enter Tenures in Months"
                    className="border-2 border-black-700 p-2 w-full"
                    value={state.tenure}
                    onChange={handleChange}
                    name="tenure"
                />
                {
                    state.errors.tenuresErr &&
                    <p className="text-red-500">{state.errors.tenuresErr }</p>
                }
            </div>
            <div className="field my-2">
                <input type="text" placeholder="Enter Intrest Percentage %"
                    className="border-2 border-black-700 p-2 w-full"
                    value={state.intrest}
                    onChange={handleChange}
                    name="intrest"
                />
                {
                    state.errors.intrestErr &&
                    <p className="text-red-500">{state.errors.intrestErr }</p>
                }
            </div>
            <div className="field my-2">
                <button 
                    onClick={handleClick}
                className="bg-sky-400 p-2 px-10 w-full hover:text-white hover:bg-sky-800">Submit</button>
            </div>
            {
                    state.res &&
                    <p className="text-green-500">{state.res }</p>
                }
        </div>
    </div>
}
export default MortgageCalculator;