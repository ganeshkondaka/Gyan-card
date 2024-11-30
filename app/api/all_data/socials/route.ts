import prisma from "@/dbprisma";
import {  NextResponse } from "next/server";

export async function POST(req: Request) {
    const { socialswith_userid } = await req.json();
    // console.log("Received data here:", socialswith_userid);

    try {
        const socials_send = await prisma.socials.createMany({
            data: socialswith_userid,
        });
        // console.log("Data saved to database:", socials_send);

        return NextResponse.json({ success: true, data: socials_send });
    } catch (error) {
        console.log("Error in POST handler:", error);
        return NextResponse.json({ success: false, error }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}