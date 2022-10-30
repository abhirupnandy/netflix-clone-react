import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import axios from 'axios';
import Movie from './Movie';

const Row = ({ title, fetchURL, rowID }) => {
	const [movies, setMovies] = useState([]);
	const [liked, setLiked] = useState(false);

	useEffect(() => {
		axios.get(fetchURL).then((response) => {
			setMovies(response.data.results);
		});
	}, [fetchURL]);

	// slider functions
	const slideLeft = () => {
		var slider = document.getElementById('slider' + rowID);
		slider.scrollLeft -= 500;
	};

	const slideRight = () => {
		var slider = document.getElementById('slider' + rowID);
		slider.scrollLeft += 500;
	};

	return (
		<>
			<h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
			<div className='relative flex items-center group'>
				<MdChevronLeft size='40' className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block' onClick={slideLeft} />
				<div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
					{movies.map((item, id) => (
						<Movie item={item} key={id} liked={liked} />
					))}
				</div>
				<MdChevronRight size='40' className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block' onClick={slideRight} />
			</div>
		</>
	);
};

export default Row;