import {connect} from "@/dbconfig/dbCongif"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"



connect()


export async function POST(request:NextRequest){
    try {
    const reqBody =await request.json()
    const {email,password}=reqBody
    console.log(reqBody);
    const user = await User.findOne({email})
    if(!user) return NextResponse.json({error:"User not found"},{status:401});
    const validatePassword =await bcryptjs.compare(password,user.password)
    if (!validatePassword)  return NextResponse.json({error:'Invalid Password'},{status:401})
    
    const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET!,{expiresIn:"1d"})
  const response=NextResponse.json({
    message:"Login Successful",
    success:true
  })
  response.cookies.set("token",token,{httpOnly:true})
  return response;
    } catch (error) {
        
    }
}