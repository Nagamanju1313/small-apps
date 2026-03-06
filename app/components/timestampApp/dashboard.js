import { useAuth } from "../../auth";

export default function DashComp(){
    const {login, logout, user} = useAuth();
    if(!user){
        logout()
    }
    return <>
    Welcome
    </>
}