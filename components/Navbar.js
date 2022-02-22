import Image from 'next/image'
import React from 'react'
import { ImSearch } from "react-icons/im";
import { BsBellFill } from "react-icons/bs";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";
import { useRouter } from 'next/router';

const Navbar = () => {

    const router = useRouter(); 

    return (
        <>
            <div className='bg-black w-screen sticky top-0 z-30'>
                <ul className='flex items-center justify-between'>
                    <div className='flex items-center justify-evenly w-1/3'>
                        <li onClick={()=> {router.push("/")}} className='cursor-pointer hover:text-red-600'>
                            <Image src="/netflix-logo.svg" height={50} width={50} alt="Logo"/>
                        </li>
                        <li onClick={()=> {router.push("/")}} className='hidden md:block cursor-pointer hover:text-red-600'>
                            Home
                        </li>
                        <li onClick={() => router.push("/tv")} className='hidden md:block cursor-pointer hover:text-red-600'>
                            TV Shows
                        </li>
                        <li onClick={() => router.push("/movies")} className='hidden md:block cursor-pointer hover:text-red-600'>
                            Movies
                        </li>
                        <li onClick={() => router.push("/latest")} className='hidden md:block cursor-pointer hover:text-red-600'>
                            Latest
                        </li>
                        <li className='hidden md:block cursor-pointer hover:text-red-600'>
                            My List
                        </li>
                    </div>
                    <div className='flex items-center justify-evenly w-1/6'>
                        <li className='cursor-pointer mx-2'>
                            <ImSearch />
                        </li>
                        <li className='cursor-pointer mx-2'>
                            <BsBellFill />
                        </li>
                        <li className='cursor-pointer'>
                            <div className='flex items-center mx-2'>
                                <RiCheckboxBlankFill />
                                <MdArrowDropDown  className='cursor-pointer'/>
                            </div>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Navbar