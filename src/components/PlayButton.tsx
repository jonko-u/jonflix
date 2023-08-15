import React from 'react'
import { PlayButtonProps } from './data/playButtonProps'
import { useRouter } from 'next/router'
import { BsFillPlayFill } from 'react-icons/bs';



const PlayButton:React.FC<PlayButtonProps> = ({movieId}) => {
    const router = useRouter();
  return (
    <button onClick={()=> router.push(`/watch/${movieId}`)} className='bg-white rounded-md py-1 md:py-2 px-2 md:px-2 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition'>
        <BsFillPlayFill></BsFillPlayFill>
        Play
    </button>
  )
}

export default PlayButton