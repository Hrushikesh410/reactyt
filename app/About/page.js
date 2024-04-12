"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import React from 'react'

const page = ({params}) => {
  const {id}=params;
  const [users, setusers] = useState([])
  const getusers=async()=>{
    const {data} =await axios.get("https://jsonplaceholder.typicode.com/users")
    setusers(data)
  }
  useEffect(() => {
    getusers()
  }, [])
  return (
    <div>page {}</div>
  )
}

export default page