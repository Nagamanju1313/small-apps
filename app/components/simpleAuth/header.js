import { useContext } from "react";
import { SimpleAuthContext } from "../../simple-authentication/context/simpleAuth";

const Header = ()=>{
    const {isLogin, updateLogin} = useContext(SimpleAuthContext);

    return <div className=" bg-sky-600">
        <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4 justify-between p-2 items-center">
                <div className="w-full md:w-1/3 px-4 logo ">
                    <h1 className="text-white">App</h1>
                </div>
                <div className="w-full md:w-1/3 px-4 greetings">
                {
                    isLogin &&
                    <p className="text-white">Welcome, User!</p>
                }
                </div>
                <div className="w-full md:w-1/3 px-4 button">
                {
                    isLogin ?
                    <button className="text-white bg-sky-900 p-2 px-5 hover:bg-amber-800"
                         onClick={()=>updateLogin(false)}
                    >Logout</button>
                    :
                    <button className="text-white bg-sky-900 p-2 px-5 hover:bg-amber-800"
                        onClick={()=>updateLogin(true)}
                    >Login</button>
                }
                </div>
            </div>
        </div>
    </div>
}
export default Header;