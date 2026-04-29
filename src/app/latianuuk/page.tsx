import Image from 'next/image'
import Navbar from '../Component/navbar3'

async function getPosts() {
  const res = await fetch('http://localhost:3001/posts', {
    cache: 'no-store',
  })
  return res.json()
}

const images = [
  "/assets/beach.jpg",
  "/assets/beach2.jpg",
  "/assets/beach3.jpg",
];


export default async function PostPage() {
  const posts = await getPosts()

  return (
    <section className="bg-pink-200 min-h-screen w-full">
      <Navbar />
      <h1 className="text-white text-shadow-md text-2xl text-center pt-5 font-bold">
        Jumlah Data
      </h1>

      <div className="flex flex-wrap justify-center gap-7 mt-10 px-4 pb-10">
        {posts.map((post: any, index: number) => (
          <div key={post.id} className="bg-white h-80 w-64 rounded-2xl shadow-lg p-5 flex flex-col">

            <Image
              src={images[index % images.length]} 
              alt={post.province}
              width={300}
              height={100}
              className="rounded-2xl mx-auto object-cover mb-3"
            />


            <h2 className="text-xl text-center font-bold text-blue-900 mt-1 truncate">
              {post.province}
            </h2>

            <p className="font-semibold text-blue-950 font-sans truncate mt-2">{post.city}</p>
            <p className="font-semibold text-blue-950 font-sans truncate">{post.district}</p>
            <p className="text-blue-950 truncate">{post.subdistrict}</p>
            <p className="text-blue-950">{post.postal_code}</p>
          </div>

        ))}
      </div>
    </section>
  )
}
