import type { User } from "@prisma/client";
import prisma from "@/dbprisma";


const get_users=async()=>{
    const response:User[]=await prisma.user.findMany()
    // console.log( response)   
    return response  
  }

export default async function page() {

  const users:User[]=await get_users()
  // get_users()
  return (
    <div>
        {users.map((user)=>(
          <p key={user.id}>{user.email} <br />
          {user.password}</p>
        ))}
    </div>
  )
}
