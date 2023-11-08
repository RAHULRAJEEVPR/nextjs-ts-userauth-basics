"use client";
import {useState} from "react"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const[data,setData]=useState("nothing")
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserDetails =async()=>{
    const res=await axios.get('/api/users/me');
    console.log(res);
    setData(res.data.data._id)
    
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2 className="p-3 rounded bg-amber-200">{data==="nothing"?"Noting":<Link href={`/profile/${data}`}>{data}</Link>}</h2>
      
      <hr />
      <button onClick={logout} className="px-3 py-2 bg-yellow-500 mt-5 rounded">
        logOut
      </button>
      <button onClick={getUserDetails} className="px-3 py-2 bg-green-700 mt-5 rounded">
       get user data
      </button>
    </div>
  );
}
