import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { getDocuments } from "@/lib/doc";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DocuCraft - A documentation website by Protocal",
  description: "A documentation website by Protocal",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-white dark:bg-zinc-900" suppressHydrationWarning>
        
       
        <Header docs={allDocuments} />

        
        <div className="relative px-4 pt-14 sm:px-6 lg:pl-72 lg:pr-8 xl:pl-80">

          
          <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
            <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100" />
            </div>
          </div>

          <main className="py-16">
            <article className="prose dark:prose-invert">
              {children}
            </article>
          </main>

        </div>
      </body>
    </html>
  );
}