import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Movie = ({ item, id, liked }) => {
	return (
		<div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
			<img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} className='w-full h-auto block' />
			<div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
				<p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center p-4'>{item?.title}</p>
				<p className='absolute top-4 left-4 text-gray-300'>{liked ? <FaHeart /> : <FaRegHeart />}</p>
			</div>
		</div>
	);
};

export default Movie;
