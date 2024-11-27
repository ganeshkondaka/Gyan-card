import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {

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
            return NextResponse.json({ success: false, message: "User not found" });
        }
        console.log('the signed up user is  :', user)
        return NextResponse.json({ success: true, message: "User found" });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "internal server error" });
    }


}
