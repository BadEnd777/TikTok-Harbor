/* 
Thanks to the author of the method to download TikTok videos.
https://github.com/zalazarc20/tiktokDL
*/
export const API_URL = 'https://www.tikwm.com';

const headers = new Headers({
	accept: 'application/json, text/javascript, */*; q=0.01',
	'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
	'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
	'user-agent': navigator.userAgent
});

// Function to handle API data fetching
export const fetchData = async (url: string, params: URLSearchParams) => {
	try {
		const response = await fetch(url, { method: 'POST', headers, body: params });
		return await response.json();
	} catch (error) {
		console.error(error);
		throw new Error('Failed to fetch data');
	}
};
