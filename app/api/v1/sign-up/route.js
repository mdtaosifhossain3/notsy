import User from '@/model/userSchema'
import {connectDB} from "@/db/connectDB"
export const POST = async (request) => {
 const {name,email,password} = await request.json();
  try{

  await connectDB();

  const user = new User({
     name: name,
     email: email,
     password: password,
   });

  const savedUser = await user.save();

  return new Response(JSON.stringify(savedUser), { status: 201 });
    
  }catch(e) { 
    console.log(e.message);
    return new Response(
      JSON.stringify({
        message: `Duplicate ${Object.keys(e.keyValue)} Entered`,
      }),
      { status: 400 }
    );}

};



// export const GET = async (request) => {
//   const data = await request.json();
//   try {
//     return new Response(JSON.stringify(data), { status: 201 });
//   } catch (e) {
//     console.log(e);
//   }
// };