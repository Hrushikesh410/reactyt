"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const page = ({params}) => {
    const {id}=params;
    const [users, setusers] = useState([])
  const getusers=async()=>{
    const {data} =await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
    setusers(data)
  }
  useEffect(() => {
    getusers()
  }, [])
  return (
    <div>{JSON.stringify(users)}</div>
  )
}

export default page