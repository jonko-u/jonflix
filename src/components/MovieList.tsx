import React from 'react';
import { isEmpty } from 'lodash';
import { MovieListProps } from './data/movieListProps';
import MovieCard from './MovieCard';

const MovieList:React.FC<MovieListProps> = ( {data,title}) => {
  if (isEmpty(data)){
    return null;
  }

  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
      <div>
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
        {title}
        </p>
      </div>
      <div className='grid grid-cols-4 gap-2'>
        {data.map((movie: Record<string, any>)=>(
          <MovieCard key={movie.id} title={movie.title} data={movie}></MovieCard>
        ))}
      </div>
    </div>
  )
}

export default MovieList