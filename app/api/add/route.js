import clientPromise from "@/lib/mongodb"

export async function POST(request) {

  const body = await request.json()

  const client = await clientPromise;
  const db = client.db("BitTree")
  const collection = db.collection("Links")

  //Check if the handle is already exist in the database
  const doc=await collection.findOne({handle:body.handle})
  if(doc){
      return Response.json({ success: false, error: true, message: 'Handle is already existed',result:null })
  }

  const result = await collection.insertOne({
    handle: body.handle,
    link: body.link,
   picture:body.picture
  })
  return Response.json({ success: true, error: false, message: 'Data Added successfully', result:result })
}