import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
	return (
		<div>
			<Main />
			<Row title='Up Coming' fetchURL={requests.fetchUpcoming} rowID='1' />
			<Row title='Popular' fetchURL={requests.fetchPopular} rowID='2' />
			<Row title='Top Rated' fetchURL={requests.fetchTopRated} rowID='3' />
			<Row title='Trending' fetchURL={requests.fetchTrending} rowID='4' />
			<Row title='Horror' fetchURL={requests.fetchHorror} rowID='5' />
			<Row title='Romance' fetchURL={requests.fetchRomance} rowID='6' />
		</div>
	);
};

export default Home;
