"use client"

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {

    const [state, setState] = useState({
        input: {
            email: "",
            password: ""
        },
        errors: {
            email: "",
            password: ""
        },
        respMsg: ""
    })

    const getUsers = async () => {
        let res = await fetch('http://localhost:3000/api/user/', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                email: state.input.email,
                password: state.input.password
            })

        }).then((resp) => {
            return resp.json()
        })

        return res

    }

    const handleChange = (e) => {
        setState({
            ...state,
            input: {
                ...state.input,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = async () => {
        let flag = false;
        let obj = {
            email: "",
            password: ""
        }
        if (state.input.email === '') {
            obj.email = "Email is required"
            flag = true
        }
        if (state.input.password === '') {
            obj.password = 'Password is required'
            flag = true
        }

        if (!flag) {
            let response = await getUsers()
            if (response.status !== 200) {
                setState({
                    ...state,
                    respMsg: "Data Not Found"
                })
            } else {
                setState({
                    ...state,
                    respMsg: "Data Found"
                })
                localStorage.setItem("user", JSON.stringify(response.data));
                redirect('/dashboard')
            }
        } else {
            setState({
                ...state,
                errors: {
                    ...obj
                }
            })

            setTimeout(() => {
                {
                    setState({
                        input: {
                            email: "",
                            password: ""
                        },
                        errors: {
                            email: "",
                            password: ""
                        },
                        respMsg: ""
                    })
                }
            }, 1000)
        }
    }

    return<div className="flex flex-column gap-10 max-w-100 mx-auto mt-50">
        <input className="border-2 border-solid border-sky-500 p-1" type="email" placeholder="Email"
            name="email" value={state?.input?.email ?? ""} onChange={handleChange}
        />
        {
            state.errors.email &&
            <span className="text-red-500 m-0 block">{state.errors.email}</span>
        }
        <input className="border-2 border-solid border-sky-500 p-1" type="password" placeholder="Password"
            name="password"
            value={state?.input?.password ?? ""} onChange={handleChange} />
        {
            state.errors.password &&
            <span className="text-red-500 m-0 block">{state.errors.password}</span>
        }
        <button className="bg-green-500 p-1 hover:bg-sky-900 text-white" onClick={handleSubmit}>Submit</button>
        {
            state.respMsg === "Data Not Found" &&
            <span className="text-red-500">User {state.respMsg}</span>
        }
        {
            state.respMsg === "Data Found" &&
            <span className="text-green-500">Logged In Successfully</span>
        }
    </div>
}
export default LoginPage;