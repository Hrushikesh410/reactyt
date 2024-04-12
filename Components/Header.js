import React from 'react'
import Link from "next/link"

const Header = () => {
  return (
    <div className='h-8 px-5 bg-red-500 flex items-center justify-between'>
    <h2>Logo</h2>
    
    <Link href="/About">About</Link>
    <Link href='/Product'>product</Link>
    <Link href='/Courses'>Cources</Link>
        
    </div>
    
    
  )
}

export default Header