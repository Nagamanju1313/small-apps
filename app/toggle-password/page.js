'use client';

import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

const TogglePassword = () => {
    const [showPass, setShowPass] = useState(false);
    const [onChangeVal, setOnchangeVal] = useState("");
    return <div className="block max-w-[300px] mx-auto my-10 relative">
        <input type={showPass ? "text" : "password"} placeholder="Enter password..."
            className="border-2 border-amber-500 p-1 w-full rounded-md"
            value={onChangeVal}
            onChange={(e) => setOnchangeVal(e.target.value)}
        />
        <button className="absolute right-2 top-2"
            onClick={() => setShowPass(!showPass)}
        >{showPass ? <GoEye /> : <GoEyeClosed />}</button>
    </div>
}
export default TogglePassword;