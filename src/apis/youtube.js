import axios from 'axios';

const KEY = 'AIzaSyBLFh9DyXh0tN_2B7wDJ7wmRlgemdaebnI';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
		q: 'surfboards'
	}
});

