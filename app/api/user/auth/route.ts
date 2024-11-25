import { PrismaClient } from "@prisma/client";
import {  NextResponse } from "next/server";
import type { User } from "@prisma/client";

// interface user_i{
//     username:string,
//     password:string
// }

export  const prisma = new PrismaClient()

export async function POST() {
    try {
        const new_user: User = await prisma.user.create({
            data: {
                email: "megger",
                password: "megger123"
            }
        })
        console.log("new user created", new_user)
        localStorage.setItem("local_userID",new_user.id)

        return NextResponse.json({
            msg: new_user,
            userid:new_user.id

        })
    } catch (error) {
        console.error("Error creating user:", error);

        return NextResponse.json(
            { error: "Failed to create user" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect(); // Properly close the Prisma client
    }
}



// // import { PrismaClient } from "@prisma/client";
// // import { NextResponse } from "next/server";

// // // Initialize Prisma Client
// // export const prisma = new PrismaClient();

// // export async function POST() {
// //   try {
// //     // Static data for user creation
// //     const new_user = await prisma.user.create({
// //       data: {
// //         username: "narak",
// //         password: "narak123",
// //       },
// //     });

// //     // console.log("New user created:", new_user);

// //     // Return the created user as a JSON response
// //     return NextResponse.json({ msg: new_user });
// //   } catch (error) {
// //     console.error("Error creating user:", error);

// //     // Return an error response
// //     return NextResponse.json(
// //       { error: "Failed to create user" },
// //       { status: 500 }
// //     );
// //   }
// // }
