import { prisma } from '@/globals/db';
import Image from 'next/image';
import Link from 'next/link';
import coverPic from '../public/cover.jpeg';
import { zVersion } from './type';

export default async function Page() {
  const metadata = await prisma.metadata.findUniqueOrThrow({
    where: {
      key: "version"
    }
  });
  const version = zVersion.parse(metadata.value);
  return (
    <main>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

          <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
            <div className="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
              <p className="text-pink-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Introducing the App Directory</p>

              <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Revolutionary way to build the web</h1>

              <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-4 md:mb-6">Learn about the new features of Next.js {version} through building a note application.</p>
              <p className="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">Front-end development will be more fun.</p>

              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <Link href="/notes/new" className="inline-block bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus-visible:ring ring-pink-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Add new</Link>
                <Link href="/notes" className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-pink-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">View list</Link>
              </div>
            </div>

            <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
              <Image src={coverPic} priority alt="Photo by Fakurian Design" className="w-full h-full object-cover object-center" />
            </div>

          </section>
        </div>
      </div>
    </main>
  )
}
