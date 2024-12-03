"use client"
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";

const poppinsBold = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {

  const [Name, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <main>
        <section className=" min-h-[100vh] grid grid-cols-2">
          <div className="relative flex flex-col gap-5 items-center pt-[44vh] ml-[6vw]">
            <h1 className={`${poppinsBold.className} text-7xl text-wrap text-[#d2e823] `}>Everything you are. In one, simple link in bio.</h1>
            <p className="text-wrap text-xl text-[#d2e823]">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

            <div className="inputbtn flex gap-3 w-full items-start relative">
              <div className="InputSection flex text-xl font-medium text-[#7b6b5f]">
                <label htmlFor="inputName" className="z-10 absolute left-4 top-[30%]">linktr.ee/</label>
                <p className="inputBox">
                  <input id="inputName" name="inputName" type="text" value={Name} onChange={(e) => { handleChange(e) }} placeholder="yourname" className=" pl-24 py-5 rounded-2xl placeholder: placeholder:text-xl placeholder:font-medium" />
                </p></div>
              <div className="btns flex items-center justify-center absolute right-[20%] ">
                <button className={`bg-[#e9c0e9] px-8  py-5 rounded-full font-medium text-xl`}>Claim for LinkTree</button>
              </div>
            </div>
          </div>
 
          <div className="ml-[6vw] pt-44">
            <Image src={"/picture_1.png"} width={600} height={600} alt="Picture"/>
          </div>
        </section>
        <section className="bg-green-600 min-h-[100vh]">
          Main
        </section>
      </main>
    </>
  );
}
