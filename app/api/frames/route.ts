import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";
import { chatTable, frameTable } from "@/config/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const frameId = searchParams.get("frameId");

  if (!frameId) {
    return NextResponse.json(
      { error: "frameId is required" },
      { status: 400 }
    );
  }

  const frameResult = await db
    .select()
    .from(frameTable)
    // @ts-ignore
    .where(eq(frameTable.frameId, frameId));

  const chatResult = await db
    .select()
    .from(chatTable)
    // @ts-ignore
    .where(eq(chatTable.frameId, frameId));

  // 🔑 Normalize chat messages
  let chatMessages: any[] = [];

  if (chatResult.length > 0 && chatResult[0]?.chatMessage) {
    if (Array.isArray(chatResult[0].chatMessage)) {
      chatMessages = chatResult[0].chatMessage;
    } else {
      chatMessages = [chatResult[0].chatMessage];
    }
  }

  const finalResult = {
    ...frameResult[0],
    chatMessages,
  };

  return NextResponse.json(finalResult);
}
