export async function get(params) {
	const { searchParams } = params.url;

	const apiKey = 'ea2aed1bf68b4c75b17111446222906';
	const query = searchParams.get('q') ?? 'Buenos Aires';

	const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`;
	const response = await fetch(url);
	const data = await response.json();

	const { location, current } = data;
	const { name, region, country, localtime } = location;
	const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current;
	const { code, text } = condition;

	const body = {
		name,
		region,
		country,
		localtime,
		humidity,
		feelslike_c,
		is_day,
		temp_c,
		wind_kph,
		wind_dir,
		code,
		text
	};

	return {
		status: 200,
		body
	};
}
