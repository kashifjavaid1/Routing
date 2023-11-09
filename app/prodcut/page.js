import React from 'react'
import Link from 'next/link'
export default async function Prodcut() {
    const fechdata=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await fechdata.json()
    console.log(data);
  return (
    <>
    <div className='text-2xl text-center'>Prodcut</div>
    <ul>
 {
    data.map((item)=>{
        return(
            <>
           <li className='py-3'><Link href={`prodcut/${item.id}`}>{item.title}</Link></li>
            </>
        )
    })
 }

    </ul>
    </>
  )
}
