import prisma from "@/dbprisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const {public_id, quote, loacal_userID }=await req.json();
    // const public_id = 'oooooo'
    // const quote = '111111'
    // const loacal_userID = 'userrrrr'
    // const { skill_lu, loacal_userID } = await req.json();
    // // console.log("Received data here:", skill_lu);

    try {
        const prof_data = await prisma.imgQuote.create({
            data: {
                p_id: public_id,
                quote: quote,
                userId: loacal_userID
            }
        });

        console.log("Data saved to database:", prof_data);

        return NextResponse.json({ success: true, data: prof_data });
    } catch (error) {
        console.log("Error in POST handler:", error);
        return NextResponse.json({ success: false, error }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
