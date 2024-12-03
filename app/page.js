import Image from "next/image";
import localFont from "next/font/local";

const poppinsBold= localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
   <main>
    <section className=" min-h-[100vh] grid grid-cols-2">
    <div className="relative flex flex-col gap-5 items-center pt-[44vh] ml-[6vw]">
      <h1 className={`${poppinsBold.className} text-7xl text-wrap text-[#d2e823] `}>Everything you are. In one, simple link in bio.</h1>
      <p className="text-wrap text-xl text-[#d2e823]">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
      </div> 

      <div className="ml-[6vw]">

      </div>
    </section>
    <section className="bg-green-600 min-h-[100vh]">
      Main
    </section>
   </main>
    </>
  );
}
