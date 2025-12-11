import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { User2Icon } from "lucide-react";

export async function POST(req:NextRequest){
    const user = await currentUser();
    //If USER Already exists, then do not create a new user
    const userResult = await db.select().from(usersTable)
    //@ts-ignore
    .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress))


    //if Not Then insert new user in DB
    if(userResult?.length == 0){
        const data = {
            name: user?.fullName ?? 'NA',
            email: user?.primaryEmailAddress?.emailAddress?? '',
            credits:5
        }

        const result = await db.insert(usersTable).values({
            ...data
        })
        return NextResponse.json({ user: data })
    }

    return NextResponse.json({ user: userResult[0]})
}