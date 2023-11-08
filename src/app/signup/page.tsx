"use client";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function SignupPage() {

  const router=useRouter()

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled,setButtonDisabled]=useState(false)
const [loading,setLoading]=useState(false)


  const onSignup = async () => {
    try {
      setLoading(true)
  const response =  await  axios.post("/api/users/signup",user)
 console.log("signup success",response.data);
 router.push("/login")
   

} catch (error) {
      console.log("signup failed",error);
      
    }finally{
      setLoading(false)
    }
  };

  useEffect(()=>{
if(user.email.length>0 && user.password.length>0&&user.username.length>0){
  setButtonDisabled(false)
}else{
  setButtonDisabled(true)
}
  },[user])
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen
    py-2 text-white bg-black "
    >
      <h1 className="font-bold text-3xl">SignupPage</h1>
      <label className="mt-3" htmlFor="username">
        username
      </label>
      <input
        className="p-2 text-black "
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label className="mt-3" htmlFor="email">
        email
      </label>
      <input
        className="p-2 text-black "
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
        className="p-2 text-black "
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
      onClick={onSignup}
      className="p-2 border flex bg-zinc-500 mt-3 border-gray-300 rounded-lg focus:outline-none focus:border-gray-600">
        {buttonDisabled?"fill the field":"signup "}
        {loading &&

       <p className="animate-spin ps-3">{"+"}</p>
        }
      </button>
      <Link href="/login">visit login page</Link>
    </div>
  );
}
