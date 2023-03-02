import { zUpsertNote } from "@/app/notes/type";
import { prisma } from "@/globals/db";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  const notes = await prisma.note.findMany();
  return NextResponse.json(notes)
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parcedData = zUpsertNote.parse(data);
  const note = await prisma.note.create({
    data: { title: parcedData.title, body: parcedData.body },
  });
  return new NextResponse(`${note.id}`, { status: 201 })
}
