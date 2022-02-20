import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import MovieItem from '../components/MovieItem';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const latest = () => {
    const [data, setData] = useState([]);
    const router = useRouter();

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((res) => res.json())
            .then((res) => setData(res.results))
            .catch((err) => {
                router.push(`/error/${err}`);
            })

    }, [])
    return (
        <>
        <Head>
        <title>Netflix | Latest</title>
        <link rel="icon" href="/netflix_logo.ico" />
      </Head>
        <Navbar />
        <div className='flex flex-wrap w-screen justify-center'>
            {console.log(data)}
            {data.map((item, i) => {
                return (
                    // <MovieItem key={i} id={item?.id} backPhoto={item.backdrop_path} title={item.title} />
                    <img onClick={()=> router.push(`/details/${item?.id}`)} className='m-4 cursor-pointer hover:scale-110 ease-linear duration-300' src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}/>
                );
            })}
        </div>
        </>
    )
}

export default latest