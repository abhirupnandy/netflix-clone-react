const KEY = '2d1afc8b3435a1eb000fa18058a28d2e';

// Trending, Popular, Top Rated, Horror, Romance, Upcoming
const requests = {
	fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`,
	fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`,
	fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
	fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=27`,
	fetchRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=10749`,
	fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US&page=1`,
};

export default requests;
