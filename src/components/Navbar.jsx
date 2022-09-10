import React from 'react'


import {AiFillHome} from 'react-icons/ai'

import {ImCompass2} from 'react-icons/im'
import {BsHeart,BsPlusSquare} from 'react-icons/bs'

import {RiMessengerLine} from 'react-icons/ri'

const Navbar = () => {
  return (
    <div >
      <nav className='border-b border py-5 '>
<div className='w-full md:w-[60rem] mx-auto'>

<div className=' flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0  justify-between'>




<div>
<img src={process.env.PUBLIC_URL+"/imgs/Logo.svg"} alt="Instagram Logo" />


</div>
<div>

<input className='border p-1 px-3 rounded-md' type="text" placeholder='Search' />

</div>
<div>

<ul className='space-x-5 flex justify-center items-center'>

    <li   className='text-2xl'><a href=""><AiFillHome/></a></li>
    <li className='text-2xl'><a href=""><RiMessengerLine/> </a></li>
    <li className='text-2xl'><a href=""><BsPlusSquare/> </a></li>
    <li className='text-2xl'><a href=""><ImCompass2/> </a></li>
    <li className='text-2xl'><a href=""><BsHeart/> </a></li>
    <li  className='ml-1 text-2xl'><a href=""><img src={process.env.PUBLIC_URL+"/imgs/Profile-Pic-S.svg"} alt="Profile Picture" />
</a></li>

</ul>

</div>

</div></div>
      </nav>
    </div>
  )
}

export default Navbar
