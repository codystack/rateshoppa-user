"use client";

import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

export default function LoginForm() {
  return (
    
      <div className="flex flex-col justify-center px-8 sm:px-14 py-12 bg-white">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome back to Nucleus
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Build your design system effortlessly with our powerful component library.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              defaultValue="alex.jordan@gmail.com"
              className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <button className="w-full rounded-full bg-violet-600 text-white py-3 font-medium hover:bg-violet-700">
            Log in
          </button>

          <div className="flex items-center gap-4 text-xs text-gray-400">
            <div className="h-px bg-gray-200 flex-1" />
            OR
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 rounded-full border py-3"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>
        </form>
      </div>
  );
}