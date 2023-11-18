

"use client";
import { useUserAuth } from '../utils/auth-context';
import Link from 'next/link';

export default function Login() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = () => {
    gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
    window.location.reload();
  };

  return (
    <div className="bg-black">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold text-white">
                Welcome to Revitalize Massage & Wellness
            </h1>
    
            <p className="mt-3 text-2xl text-white">
                {user ? (
                <>
                    <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSignOut}
                    >
                    Sign Out
                    </button>
                    <Link href="/products">
                    <a className="text-2xl text-white">Go to Products</a>
                    </Link>
                </>
                ) : (
                <>
                    <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleSignIn}
                    >
                    Sign In
                    </button>
                </>
                )}
            </p>
            </main>
        </div>
    </div>
  );
}

