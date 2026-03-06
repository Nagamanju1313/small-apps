import { useContext } from "react"
import { SimpleAuthContext } from "../../simple-authentication/context/simpleAuth"

const Dashboard = () => {
    const { isLogin, updateLogin } = useContext(SimpleAuthContext);
    return <div className="dashboard-wrapper">
        <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full w-1/1 flex justify-center py-10">
                    {
                        isLogin ?
                            <h1>This is Your Dashboard</h1>
                            :
                            <h1>Please Login to Access Dashboard</h1>
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Dashboard