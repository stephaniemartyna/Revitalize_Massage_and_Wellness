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
      <div className="bg-white p-8 rounded-lg shadow-md text-center ml-20">
        <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
        <h2 className="text-2xl">Please sign in below:</h2>
        <div className="mt-4 flex justify-center p-2 border-2 border-x-4 text-zinc-800">
        <Link href="/homepage">
          <p>View Shopping List...</p>
        </Link>
        </div>
      </div>
    </div>
  );
}
