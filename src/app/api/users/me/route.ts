import { getDataFromTokon } from "@/helpers/GetDataFromToken";

import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel"
import { connect } from "@/dbconfig/dbCongif";


connect()

export async function GET(request:NextRequest) {
    try {
    const userId=await  getDataFromTokon(request)
    console.log("userid",userId);
    
   const user=await  User.findOne({_id:userId}).select("-password")
   console.log("user",user);
   return NextResponse.json({
    message:"user foound",
    data:user
   })
    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }
}