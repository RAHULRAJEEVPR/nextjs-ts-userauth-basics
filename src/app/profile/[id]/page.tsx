export default function userProfile({params}:any){
    return(
     <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <h1>Profile</h1>
         <hr />
         <p className="text-4xl">Profile page</p>
         <span className="p-2 rounded bg-orange-400">{params.id}</span>
     </div>
    ) 
 }