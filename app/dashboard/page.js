"use client"
import { AuthProvider } from "../auth";
import DashComp from "../components/timestampApp/dashboard";

const DashboardPage = ()=>{
    return <AuthProvider>
        <DashComp/>
    </AuthProvider>
}
export default DashboardPage;