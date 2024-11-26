import { prisma } from "@/app/db";
import {  NextResponse } from "next/server";

export async function POST(req: Request) {
    const { projectswith_userid } = await req.json();
    console.log("Received data here:", projectswith_userid);

    try {
        const pro_send = await prisma.projects.createMany({
            data: projectswith_userid,
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
