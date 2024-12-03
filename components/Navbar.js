"use client"
import localFont from 'next/font/local'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const poppinsBold= localFont({
    src: "./fonts/Poppins-Bold.ttf",
    variable: "--font-poppins",
    weight: "100 900",
  });

const Navbar = () => {
    const [showdropdown, setshowdropdown] = useState(false)

    return (
        <>
            <div className='w-full h-40 flex justify-center items-end fixed z-20' >
                <div  onMouseLeave={()=>{setshowdropdown(false)}}  className='bg-[#ffffff] w-[90%] h-24 mx-auto rounded-full flex justify-between items-center'>
                    <div className={`rightdiv flex items-center  gap-16 pl-9 ${poppinsBold.className}`}>
                        <div className="logo">
                            <Image src={"/linktree.svg"} width={130} height={130} alt='LinkTree' />
                        </div>
                        <div className="others flex items-center relative">
                            <ul className='flex gap-3 text-lg items-center'>
                                <Link href=""><li className='hover:bg-[#e9e9e9] px-4 py-3 rounded-xl text-[#676b5f]'>Templates</li></Link>
                                <Link href=""><li onMouseOver={()=>{setshowdropdown(false)}} className='hover:bg-[#e9e9e9] text-[#676b5f] px-4 py-3 rounded-xl'>Marketplace</li></Link>
                                <Link href=""><li onMouseOver={()=>{setshowdropdown(true)}} className='hover:bg-[#e9e9e9] text-[#676b5f] px-4 py-3 rounded-xl relative'>Discover</li></Link>
                                <Link href=""><li onMouseOver={()=>{setshowdropdown(false)}} className='hover:bg-[#e9e9e9] text-[#676b5f] px-4 py-3 rounded-xl'>Pricing</li></Link>
                                <Link href=""><li className='hover:bg-[#e9e9e9] text-[#676b5f] px-4 py-3 rounded-xl'>Learn</li></Link>
                            </ul>
                            <ul  onMouseOver={()=>{setshowdropdown(true)}} className={`${showdropdown ? "" : "hidden"} absolute top-[9.2vh] left-[15vw] flex flex-col justify-start gap-3 w-72 bg-[#ffffff] rounded-xl px-6 py-6`}>
                                <Link href=""><li className='hover:bg-[#e9e9e9] text-[#676b5f] px-4 py-3 rounded-xl'>LinkTree for Instagram</li></Link>
                                <Link href=""><li className='hover:bg-[#e9e9e9] text-[#676b5f] px-4 py-3 rounded-xl'>LinkTree for Tik Tok</li></Link>
                                <Link href=""><li className='hover:bg-[#e9e9e9] text-[#676b5f] px-4 py-3 rounded-xl'>LinkTree for Facebook</li></Link>
                                <Link href=""><li className='hover:bg-[#e9e9e9] text-[#676b5f] px-4 py-3 rounded-xl'>LinkTree for Twitter</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="leftdiv flex items-center gap-6 pr-4">
                        <button className='bg-[#eff0ec] text-xl px-8 py-5 rounded-xl hover:bg-[#e9e9e9]'>Log in</button>
                        <button className='bg-[#1e2330] text-white hover:bg-[#303541] rounded-full text-xl font-semibold px-8 py-5'>Sign up free</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
