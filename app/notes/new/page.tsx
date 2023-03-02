import Link from 'next/link';
import NewNote from './NewNote';

export const metadata = {
  title: "New Note",
};

export default async function Page() {
  return (
    <main className="mx-2 sm:mx-4">
      <Link href={`/notes`} className='inline-block focus-visible:ring ring-pink-300 text-gray-500 hover:text-pink-500 active:text-pink-600 text-s md:text-base font-semibold rounded-lg outline-none transition duration-100'>← back</Link>
      <h2 className='my-4 text-gray-400 text-xs'>New Note</h2>
      <NewNote></NewNote>
    </main>
  )
}
