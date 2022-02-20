import { useRouter } from 'next/router';
import React from 'react'

const MovieItem = ({ id, backPhoto }) => {
    const router = useRouter();

    return (
        <>
            <img onClick={()=> router.push(`/details/${id}`)} className='mx-0.5 h-[150px] w-[300px] cursor-pointer relative hover:scale-110 ease-linear duration-300' src={`https://image.tmdb.org/t/p/original${backPhoto}`}/>
        </>
    )
}

export default MovieItem;
