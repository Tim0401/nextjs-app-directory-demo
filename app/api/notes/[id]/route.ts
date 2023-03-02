import { zUpsertNote } from "@/app/notes/type";
import { prisma } from "@/globals/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const note = await prisma.note.findUnique({
    where: { id: Number(params.id) },
  });
  if (note === null) {
    return new NextResponse(null, { status: 404 })
  }
  return NextResponse.json(note)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json();
  const parcedData = zUpsertNote.parse(data);
  const note = await prisma.note.update({
    where: { id: Number(params.id) },
    data: { title: parcedData.title, body: parcedData.body, updatedAt: new Date() },
  });
  return new NextResponse(null, { status: 204 })
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const note = await prisma.note.delete({
    where: { id: Number(params.id) },
  });
  return new NextResponse(null, { status: 204 })
}

