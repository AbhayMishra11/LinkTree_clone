import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = (await params).handle

    const client = await clientPromise;
    const db = client.db("BitTree")
    const collection = db.collection("Links")

    //Check if the handle is already exist in the database
    const doc = await collection.findOne({ handle: handle })

    if(doc==null){
        return notFound()
    }

    return <div className=" bg-lime-600 flex min-h-screen justify-center">
        <div className="photo flex items-center flex-col gap-4 pt-20">
            <img src={doc.picture} alt="img" className="rounded-full w-32 h-28" />
            <span className="font-bold text-xl pb-20">@{doc.handle}</span>
            {doc.links.map((item, index) => {
                return <Link key={index} href={item.link} target="_blank"> <div className="flex gap-4 font-medium justify-center items-center text-xl hover:bg-slate-200 bg-slate-100 w-80">
                    <div className="py-6">{item.linktext}</div>
                </div></Link>
            })}
        </div>
    </div>
}