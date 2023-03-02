import { apiUrl } from "@/constants/api";
import "server-only";
import { zNote } from "../type";

export const getNote = async (id: string) => {
  const res = await fetch(`${apiUrl}/notes/${id}`, { cache: 'no-store' });
  const data = await res.json();
  const note = zNote.parse(data);
  return note;
};
