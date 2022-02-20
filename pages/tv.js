import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const movies = () => {
    const [data, setData] = useState([]);
    const [datas, setDatas] = useState([]);
    const router = useRouter();

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((res) => res.json())
            .then((res) => setData(res.results))
            .catch((err) => {
                router.push(`/error/${err}`);
            })

    }, [])
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=hi-IN&region=IN&primary_release_year=2021&with_original_language=hi`)
            .then((res) => res.json())
            .then((res) => setDatas(res.results))
            .catch((err) => {
                router.push(`/error/${err}`);
            })

    }, [])
    return (
        <>
        <Head>
            <title>Netflix | TV Shows</title>
            <link rel="icon" href="/netflix_logo.ico" />
        </Head>
        <Navbar />
        <div className='flex flex-wrap w-screen justify-center'>
            {console.log(data)}
            {data.map((item, i) => {
                return (
                    <img key={i} onClick={()=> router.push(`/details/${item?.id}`)} className='m-4 cursor-pointer hover:scale-110 ease-linear duration-300' src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}/>
                );
            })}
            {datas.map((item, i) => {
                return (
                    <img key={i} onClick={()=> router.push(`/details/${item?.id}`)} className='m-4 cursor-pointer hover:scale-110 ease-linear duration-300' src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}/>
                );
            })}
        </div>
        </>
    )
}

export default movies