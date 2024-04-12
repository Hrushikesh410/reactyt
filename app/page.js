// // "use client"
// // import React, { useState } from 'react'
// // import Header from "@/Components/Header"
// // const page = () => {
// //   const [user, setfirst] = useState("Hrushi")
// //   const [editor, seteditor] = useState("lucky")
// //   return (
// //     <>
// //       <Header user={user} edit={editor}/>
// //       {user}
// //     </>
// //   )
  
  

// // }

// // export default page
// // import React from 'react'
// // const page = () => {
// //   return (
// //     <div>
// //     <h1>This is header</h1>
// //     </div>
// //   )
// // }

// // export default page
// "use client"
// import axios from 'axios'
// import React, { useState } from 'react'

// function page() {
//   const [Images, setImages] = useState([])
//   const getimg= async()=>{
//     try{
//     const res=await axios.get("https://picsum.photos/v2/list")
//     const data=res.data
//     console.log(Images)
//     setImages(data)
//     }
//     catch(error){
//       console.error("Error Fetching images")
//     }

//   }
//   return (
//     <div>
//         <button onClick={getimg} className='px-5 py-3 bg-green-800 text-white font-bold'>Get</button>
//         <div className='p-10'>
//           {Images.map((elem,i)=>{
//             return <img key={i} src={elem.download_url} />
//           })}
//         </div>
//     </div>
//   )
// }

// export default page
"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const page = () => {
  const [users, setusers] = useState([])
  const getusers=async()=>{
    const {data} =await axios.get("https://jsonplaceholder.typicode.com/users")
    setusers(data)
  }
  useEffect(() => {
    getusers()
  }, [])
  
  return (
    <>
      <button onClick={getusers} className='bg-green-400 text-white rounded px-4'>Get Data</button>
      <div className='p-8 bg-slate-300 mt-5' >
      <ul>
        {users.map((e)=>{
        return <li>{e.username} --- <a href={`/${e.id}`}>explore</a></li>
      })}
      </ul>
      </div>
    </>
  )
}

export default page