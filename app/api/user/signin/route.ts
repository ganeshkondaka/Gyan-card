import prisma from "@/dbprisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const { email, password } = await req.json()
    console.log('email.password----- :', email, password)
    // Check if the user exists
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
                password: password
            }
        })
        if (!user) {
            return NextResponse.json({
                 success: false,
                 message: "User not found",
                 
                });
        }
        console.log('the signed up user is  :', user)
        return NextResponse.json({ success: true, message: "User found" ,user_id :user.id });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "internal server error" });
    }


}
