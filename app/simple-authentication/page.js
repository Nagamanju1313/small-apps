"use client";
import { useState } from "react";
import { SimpleAuthContext } from "./context/simpleAuth";
import Header from "../components/simpleAuth/header";
import Dashboard from "../components/simpleAuth/dashboard";

const SimpleAuth = ()=>{
    const [loginState, setLoginState] = useState(false)
    return <div className="dashboard">
        <SimpleAuthContext.Provider value={{isLogin:loginState, updateLogin:setLoginState}}>
            <Header/>
            <Dashboard/>
        </SimpleAuthContext.Provider>
    </div>
}
export default SimpleAuth;