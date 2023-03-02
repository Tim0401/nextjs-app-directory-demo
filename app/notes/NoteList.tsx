'use client'
import Link from "next/link";
import useSWR from "swr";
import { Note, zNotes } from "./type";

type Props = {
  initialState: Note[];
}

const fetcher = (url: string) => fetch(url).then(async (res) => {
  const data = await res.json();
  const notes = zNotes.parse(data);
  return notes;
});

const NoteList: React.FC<Props> = ({ initialState }) => {
  const { data } = useSWR('/api/notes', fetcher, { suspense: true, fallbackData: initialState })
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10">
      {data.map(note => <NoteItem key={note.id} item={note} />)}
    </div>
  )
}

type NoteProps = {
  item: Note;
}

const NoteItem: React.FC<NoteProps> = ({ item }) => {
  return (
    <div className="bg-gray-100 rounded-lg relative p-5 pt-8">
      <Link href={`/notes/${item.id}/edit`} className=" absolute -top-4 left-4">
        <span className="w-8 h-8 inline-flex justify-center items-center bg-pink-500 hover:bg-pink-700 text-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 25 25" fill="currentColor">
            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
          </svg>
        </span>
      </Link>
      <Link href={`/notes/${item.id}`} prefetch={false}>
        <h3 className="text-pink-500 hover:text-pink-700 text-lg md:text-xl font-semibold mb-3 break-all underline underline-offset-2">{item.title}</h3>
      </Link>
      <p className="text-gray-500 break-all">{item.body}</p>
    </div>
  );
};

export default NoteList;
