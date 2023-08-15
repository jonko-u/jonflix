import useBillboard from "@/hooks/useBillboard";
import  { AiOutlineInfoCircle } from 'react-icons/ai'
import PlayButton from "./PlayButton";
import { useCallback } from "react";
import useInfoModal from "@/hooks/useInfoModalStore";

const Billboard = () => {
    const { data, error, isLoading } = useBillboard();
    const {openModal} = useInfoModal();
    const movie = data?.[0];
    const handleOpenModal = useCallback(()=>{      
      openModal(movie?.id)
    },[openModal, movie?.id]);

    if (error) return <div>Error loading data</div>;
    if (isLoading) return <div>Loading...</div>;
    

    

    return (
       
    <div className='relative h-[56.25vw]'>
      <video className="w-full h-[56.25vw] object-cover brightness-[60%]" autoPlay muted loop poster={movie?.thumbnailUrl}  src={movie?.videoUrl}></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {movie.title}
        </p>
        <p className="text-white
         text-[8px] md:text-lg mt-3 md:mt-8 w-[80%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {movie.description}
         </p>
         <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
            <PlayButton movieId={movie?.id}></PlayButton>
            <button onClick={handleOpenModal} className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
              <AiOutlineInfoCircle className='mr-2'></AiOutlineInfoCircle>
              More Info
            </button>
         </div>
      </div>
    </div>
  );
    
}

export default Billboard;