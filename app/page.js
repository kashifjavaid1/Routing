
import Link from 'next/link'

export default function Home() {
  return (
   <>
   <h1 className='text-2xl py-2 px-2'>Home Page</h1>
   <ul className='py-6 px-3'>
    <li><Link href='/about'>About Us</Link></li>
    <li><Link href='/prodcut'>Prodcuts</Link></li>
    <li><Link href='/mobile'>Mobile</Link></li>
    <li><Link href='/routing'>Routing</Link></li>
   </ul>
   </>
  )
}
