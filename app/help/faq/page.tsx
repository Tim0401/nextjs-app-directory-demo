import Nl2br from "@/components/Nl2br";
import { prisma } from "@/globals/db";

export const revalidate = 30;

export default async function Page() {
  const data = await prisma.metadata.findUniqueOrThrow({
    where: { key: "faq" },
  });
  return (
    <main>
      <h1 className="text-xl my-2">Frequently Asked Questions</h1>
      <p className="text-xs text-gray-400 my-2">The following text is a sample.</p>
      <Nl2br>{data.value}</Nl2br>
    </main>
  );
}
