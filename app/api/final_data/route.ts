import { prisma } from "@/app/db";
import { NextResponse } from "next/server";


export async function GET(req: Request, res:NextResponse) {

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    console.log('teh user id from server :',userId)

    if (!userId) {
        return NextResponse.json({ success: false, message: "User ID is required" });
    }

    try {
        // Fetch data from multiple tables
        const userData = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                Projects: true,
                Skills: true,
                Work_exp: true,
            },
        });

        if (!userData) {
            return NextResponse.json({ success: false, message: "User not found" });
        }
        // console.log('the user data', userData)

        return NextResponse.json({ success: true, data: userData });
    } catch (error) {
        console.error("Error fetching user data:", error);
        return NextResponse.json({ success: false, message: "Internal server errorru" });
    }
}
