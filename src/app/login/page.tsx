"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen
    py-2 text-white bg-black "
    >
      <h1 className="font-bold text-3xl">LoginPage</h1>

      <label className="mt-3" htmlFor="email">
        email
      </label>
      <input
        className="p-2"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label className="mt-3" htmlFor="password">
        password
      </label>
      <input
        className="p-2"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onLogin}
        className="p-2 border bg-zinc-500 mt-3 border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
      >
       login
      </button>
      <Link href="/signup">visit signup page</Link>
    </div>
  );
}
