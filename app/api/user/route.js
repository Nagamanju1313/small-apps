import { NextResponse } from "next/server";
import { users } from "../../mocData/users";

export async function POST(req, res) {
    let loginData = await req.json()
    const { email, password } = loginData || {};

    let checkUser = users.filter((item) => {
        return (item.emailId === email && item.password === password)
    })
    if (checkUser.length === 0) {
        return NextResponse.json({ "status": 404, message: "User Not Found" })
    }
    return NextResponse.json({ status: 200, message: "data retriewed successfully", data: checkUser });
}