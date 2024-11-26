import { prisma } from "@/app/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { skill_lu, loacal_userID } = await req.json();
    console.log("Received data here:", skill_lu);

    try {
        const pro_send = await prisma.skills.create({
            data: {
                skill:skill_lu,
                userId:loacal_userID
          
            }
        });
        console.log("Data saved to database:", pro_send);

        return NextResponse.json({ success: true, data: pro_send });
    } catch (error) {
        console.log("Error in POST handler:", error);
        return NextResponse.json({ success: false, error }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
