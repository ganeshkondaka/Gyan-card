import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { User } from "@prisma/client";

export const prisma = new PrismaClient()

export async function POST(req: Request) {

    const { email, name, password } = await req.json()
    try {
        const new_user: User = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: password
            }
        })
        console.log("new user created", new_user)

        return NextResponse.json({
            user: new_user,
            success: true,
            userid: new_user.id

        })
    } catch (error) {
        console.log("Error creating user:", error);

        return NextResponse.json(
            {
                error: "Failed to create user",
                success: false
            },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect(); // Properly close the Prisma client
    }
}

