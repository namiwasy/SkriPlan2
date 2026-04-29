import Image from 'next/image';
import Navbar from '../Component/navbar4';
import Latian from '../latianlagi2/page'
import Latianlagi from '../latianlagi3/page'
async function getPosts() {
  const res = await fetch('http://localhost:3001/posts', {
    cache: 'no-store',
  });
  return res.json();
}
const images = [
  "/assets/beach8.jpg",
  "/assets/beach2.jpg",
  "/assets/beach7.jpg",
];
export default async function PostPage() {
  const posts = await getPosts();

  return (

    <section className="bg-amber-50 h-full w-full ">
      <Navbar />
      <img
                    src="/assets/beach5.jpg"
                    alt="Latian Lagi"
                    className="object-cover w-full h-60 shadow-2xl"
                />
      <div className="flex flex-wrap justify-center gap-5 mt-10 px-5">
        {posts.map((post: any, index: number) => (
                  <div key={post.id ?? index} className="bg-white h-90 w-64 rounded-2xl shadow-lg p-5 flex flex-col hover:scale-105 duration-300 mt-14">
        
                    <Image
                      src={images[index % images.length]} 
                      alt={post.province}
                      width={300}
                      height={100}
                      className="rounded-2xl mx-auto object-cover mb-3"
                    />
           <div className='flex-grow mt-2'>
            <h2 className="text-4xl text-center font-sans font-semibold text-blue-900">{post.province}</h2>
            <h1 className="font-sans mt-2 ml-2 text-blue-950 font-semibold">{post.city}</h1>
            <h1 className="font-sans mt-2 ml-2 text-blue-950 font-semibold">{post.district}</h1>
            <h1 className="font-sans mt-2 ml-2 text-blue-950">{post.subdistrict}</h1>
            <h1 className="font-sans mt-2 ml-2 text-blue-950">{post.postal_code}</h1>
            <button className="bg-white hover:bg-gray-400 text-blue-900 font-semibold py-2 px-4 rounded-lg mt-5 mx-auto flex justify-center items-center shadow-2xl hover:scale-105 duration-300">
              Lihat Lokasi
            </button>
            </div>
          </div>
        ))}
      </div>
      
<div>
<Latian />
</div>
<div>
<Latianlagi />
</div>
    </section>
  );
}