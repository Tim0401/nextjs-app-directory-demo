import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  // delete all
  await prisma.metadata.deleteMany();
  await prisma.note.deleteMany();
  // seeding
  const metadatas: Prisma.MetadataCreateInput[] = [
    {
      key: "version",
      value: "13.2.1",
    },
    {
      key: "faq",
      value: faq,
    },
    {
      key: "tos",
      value: tos,
    },
  ];
  for (const metadata of metadatas) {
    await prisma.metadata.create({
      data: metadata
    });
  }

  const notes: Prisma.NoteCreateInput[] = [
    {
      title: "First note",
      body: "This is the first note.",
    },
    {
      title: "Second note",
      body: "This is the second note.",
    },
    {
      title: "Third note",
      body: "This is the third note.",
    },
    {
      title: "Fourth note",
      body: "This is the fourth note.",
    },
  ];
  for (const note of notes) {
    await prisma.note.create({
      data: note
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });

const faq = `
Q: How do I create a new note?
A: To create a new note, click the "New Note" button located in the top left corner of the screen. This will open a blank note where you can begin typing.

Q: Can I customize the appearance of my notes?
A: Yes, you can customize the appearance of your notes by changing the font, font size, and background color. Simply click the "Settings" button and select "Appearance" to make these changes.

Q: Can I share my notes with others?
A: Yes, you can share your notes with others by clicking the "Share" button located at the bottom of the note. You can then enter the email address of the person you wish to share the note with.

Q: How do I delete a note?
A: To delete a note, click on the note you wish to delete and then click the "Delete" button located at the bottom of the note.

Q: Is my data secure?
A: Yes, we take the security and privacy of your data very seriously. All notes are stored on secure servers and are encrypted for added protection.

Q: Can I access my notes on multiple devices?
A: Yes, you can access your notes on multiple devices by logging into your account on our website. All notes will be synced across all devices.

Q: What happens if I forget my password?
A: If you forget your password, you can reset it by clicking the "Forgot Password" link located on the login page. You will then be prompted to enter your email address to receive instructions on how to reset your password.

Q: Do you offer a mobile app?
A: Yes, we offer a mobile app for both iOS and Android devices. You can download the app from the App Store or Google Play.
`
const tos = `
Welcome to our website. These Terms of Service ("TOS") govern your use of our website, including any content, functionality, and services offered on or through the website. By using our website, you accept and agree to be bound by these TOS. If you do not agree with these TOS, you may not use our website.

User Conduct
You agree to use our website only for lawful purposes and in a manner that does not violate the rights of any third party. You agree not to use our website in any way that could damage, disable, overburden, or impair our servers or networks. You also agree not to access or attempt to access any information or data on our website that you are not authorized to access.

Intellectual Property
All content on our website, including text, graphics, logos, images, and software, is owned by us or our licensors and is protected by copyright and other intellectual property laws. You may not copy, distribute, modify, or create derivative works of any content on our website without our prior written consent.

Disclaimer of Warranties
Our website is provided "as is" and without warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that our website or the servers that make it available are free of viruses or other harmful components.

Limitation of Liability
In no event shall we be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from or in connection with your use of our website, even if we have been advised of the possibility of such damages. Our liability to you for any cause whatsoever, and regardless of the form of the action, will at all times be limited to the amount paid by you, if any, to access our website.

Indemnification
You agree to indemnify, defend, and hold us harmless from any claim, demand, or damage, including reasonable attorneys' fees, arising out of your use of our website, your violation of these TOS, or your violation of any rights of another.

Governing Law and Jurisdiction
These TOS and any disputes arising out of or related to your use of our website will be governed by and construed in accordance with the laws of [insert jurisdiction], without giving effect to any principles of conflicts of law. Any legal action or proceeding arising out of or related to these TOS or your use of our website shall be brought exclusively in [insert court of jurisdiction], and you consent to the jurisdiction of such courts.

Modifications to these TOS
We reserve the right to modify these TOS at any time without notice. Your continued use of our website following any such modification constitutes your agreement to be bound by the modified TOS.
`;
