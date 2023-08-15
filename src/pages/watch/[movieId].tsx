import '@/styles/globals.css'

import { AiOutlineArrowLeft} from 'react-icons/ai'
import React from 'react';
import useMovie from '@/hooks/useMovies';
import {useRouter} from 'next/router';

const Watch = () => {
    const router = useRouter();
    const {movieId} = router.query;

    const { data } = useMovie(movieId as string);

    return (
        <div className='h-screen w-screen bg-black'>
            <nav className='fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70'>
                <AiOutlineArrowLeft onClick={()=> router.push('/home')} className='text-white' size={40}></AiOutlineArrowLeft>
                <p className='text-white text-xl font-bold'>
                    <span className='font-light'>
                        Watching:
                    </span>
                    <br></br>
                    {data?.title}
                </p>                
            </nav>
            <video autoPlay controls className='h-full w-full' src={data?.videoUrl}>

            </video>
        </div>
    )
}
export default Watch;