import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';

const SavedShows = () => {
	const [movies, setMovies] = useState([]);
	const { user } = UserAuth();

	// slider functions
	const slideLeft = () => {
		var slider = document.getElementById('slider');
		slider.scrollLeft -= 500;
	};

	const slideRight = () => {
		var slider = document.getElementById('slider');
		slider.scrollLeft += 500;
	};

	// Database Snapshot
	useEffect(() => {
		onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
			setMovies(doc.data()?.savedShows);
		});
	}, [user?.email]);

	// delete movie from database
	const movieRef = doc(db, 'users', `${user?.email}`);
	const deleteMovie = async (passedID) => {
		try {
			const result = movies.filter((movie) => movie.id !== passedID);
			// console.log(result);
			await updateDoc(movieRef, {
				savedShows: result,
			});
		} catch (error) {
			// console.log(error);
		}
	};

	return (
		<div>
			<h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
			<div className='relative flex items-center group'>
				<MdChevronLeft size='40' className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block' onClick={slideLeft} />
				<div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
					{movies.map((item, id) => (
						<div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={id}>
							<img src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} className='w-full h-auto block' />
							<div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
								<p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center p-4'>{item?.title}</p>
								<p
									className='absolute top-4 right-4 font-bold text-gray-300'
									onClick={() => {
										deleteMovie(item?.id);
									}}>
									<AiOutlineClose size='20' />
								</p>
							</div>
						</div>
					))}
				</div>
				<MdChevronRight size='40' className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-80 cursor-pointer z-10 hidden group-hover:block' onClick={slideRight} />
			</div>
		</div>
	);
};

export default SavedShows;
