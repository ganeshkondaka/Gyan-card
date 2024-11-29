import prisma from "@/dbprisma";
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const { exp_userid } = await req.json()
    // console.log('received work exp :', exp_userid)
    try {
        const sent_exp = await prisma.work_exp.createMany({
            data:exp_userid,
        })
        // console.log('response exp :', sent_exp)
        return NextResponse.json({ success: true, data:sent_exp });

    } catch (error) {
        console.log('exp not sent to teh db properly')
        return NextResponse.json({ success: false,error }, { status: 500 });
    } finally{
        await prisma.$disconnect();
    }
}