"use client";
import Link from 'next/link';
export default function Page() {

  const backgroundImage = {
    backgroundImage: `url('./images/login2.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div className="flex items-center justify-left " style={backgroundImage}>
      <div className="bg-white p-8 rounded-lg shadow-md text-center ml-20 max-w-sm">
        <h1 className="text-3xl font-bold mb-4">CPRG-306 Project</h1>
        <h2 className="text-2xl mb-4">A web application developed for a massage therapist</h2>
        <h3 className='text-xl'>By: Stephanie Martyna</h3>
        <div className="mt-10 p-2 border-2 border-x-4 text-zinc-800 bg-lightgreen text-white  hover:bg-darkgreen">
        <Link href="/home">
          <p>Click Here To View</p>
        </Link>
        </div>
      </div>
    </div>
  );
}
