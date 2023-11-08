import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"


export const getDataFromTokon =(request:NextRequest):string=>{
    try {
        const token=request.cookies.get("token")?.value||""
       
        
        const decodedToken=jwt.verify(token,process.env.TOKEN_SECRET!)as { _id: string };
        
        
        return decodedToken._id 
    } catch (error:any) {
        throw new Error(error.message)
    }
}

