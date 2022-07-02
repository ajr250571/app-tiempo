export async function getWeatherFrom(query = 'Tucuman') {
	return fetch(`/api/get-weather?q=${query}`).then((res) => res.json());
}
