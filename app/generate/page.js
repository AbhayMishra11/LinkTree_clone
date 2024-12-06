"use client"
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image';
import { Bounce } from 'react-toastify';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation'

const Generate = () => {

  const searchParams=useSearchParams()

  const [links, setLinks] = useState([{ link: "", linktext: "" }])
  const [handle, sethandle] = useState(searchParams.get('handle'))
  const [picture, setpicture] = useState("")

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext }
        }
        else {
          return item
        }
      })
    })
  }

  const AddNewLinks = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]))
  }

  const CreateYourBitTree = async (link, handle, picture) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "handle": handle,
      "picture": picture,
      "links": link
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions)
    const result = await r.json()

    if (result.success) {
      toast.success(result.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setLinks([{ link: "", linktext: "" }])
      setpicture("")
      sethandle("")
    }
    else {
      toast.error(result.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }

  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition='Bounce'
      />
      <ToastContainer />
      <div className='h-full grid grid-cols-2 bg-[#225abf] relative'>
        <div className="col1 flex flex-col gap-20 justify-center items-center">
        <Link href="/"><Image src={"/linktree.svg"} width={130} height={130} alt='LinkTree' className='absolute top-4 left-4' /></Link>
          <h1 className='font-bold text-5xl text-white'>Create Your BitTree</h1>
          <div className='flex flex-col gap-9'>
            <div className="items">
              <h1 className='font-semibold text-2xl text-white'>Step 1: Claim Your Handle</h1>
              <div className="mx-4 mt-6">
                <input value={handle || ""} onChange={(e) => { sethandle(e.target.value) }} className='px-24 py-6 rounded-xl focus:outline-pink-600' type="text" placeholder='Choose a handle' />
              </div>
            </div>

            <div className="items">
              <h1 className='font-semibold text-2xl text-white'>Step 2: Add Links</h1>
              <div className="arrItems flex flex-col gap-6 mt-6 justify-center items-center">
                {links && links.map((items, index) => {
                  return <div key={index} className="mx-4 flex gap-3">
                    <input value={items.linktext || ""} onChange={(e) => { handleChange(index, items.link, e.target.value) }} className='px-24 py-6 rounded-xl focus:outline-pink-600' type="text" placeholder='Enter link text' />
                    <input value={items.link || ""} onChange={(e) => { handleChange(index, e.target.value, items.linktext) }} className='px-24 py-6 rounded-xl focus:outline-pink-600' type="text" placeholder='Enter link ' />
                  </div>
                })

                }
                <button onClick={() => AddNewLinks()} className='px-20 py-4 hover:bg-[#ffffff] rounded-xl font-medium text-lg bg-slate-200 w-fit'>Add Link</button></div>
            </div>

            <div className="items">
              <h1 className='font-semibold text-2xl text-white'>Step 3: Add a Picture and Finalize</h1>
              <div className="mx-4 flex gap-6 mt-6">
                <input value={picture} onChange={(e) => setpicture(e.target.value)} className='px-24 py-6 rounded-xl focus:outline-pink-600' type="text" placeholder='Add picture link' />
                <Link href={`/${handle}`}><button disabled={picture == "" || handle.length<5 || links[0].link == "" || links[0].linktext == ""} onClick={() => CreateYourBitTree(links, handle, picture)} className='px-11 py-6 hover:bg-[#ffffff] w-fit rounded-xl font-medium text-lg bg-slate-200 disabled:bg-blue-400'>Create Your BitTree</button></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col2">
          <img src="/Banner.png" alt="Banner" className='w-full' />
        </div>
      </div>
    </>
  )
}

export default Generate
