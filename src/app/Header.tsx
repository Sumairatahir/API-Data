import React from 'react'

const Header = () => {
  return (
    <div  className='sm:bg-black-200 bg-blue-200 w-full'>
       
            
       <ul className='flex justify-center items-center text-black-300 gap-40 font-semibold text-xl'>
       <h1 className='sm: font-bold text-black-500 md:black-500 mr-20 flex  p-7 text-3xl'>My E-Commerce Store</h1>
 
 
       <li>Home</li>     
        <li>About</li>
        <li> Contact</li>
       </ul>
    </div>
  )
}

export default Header;
