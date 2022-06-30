<script>
	import WeatherFooter from './../components/weather-footer.svelte';
	import { getWeatherFrom } from '../services/weather.js';

	const promise = getWeatherFrom('Tucuman');
</script>

{#await promise}
	<h2>Procesando ...</h2>
{:then weather}
	<div class="card w-96 bg-base-100 shadow-xl mx-2 my-2">
		<figure><img src={null} alt={weather.name} /></figure>
		<div class="card-body">
			<h2 class="card-title text-primary text-4xl">{weather.name}</h2>
			<p class="text-secondary text-2xl">{weather.region}</p>
			<p class="text-secondary text-2xl">{weather.country}</p>
			<p class="text-secondary text-6xl">{weather.temp_c}<sup>o</sup>C</p>
			<h4 class="text-secondary text-2xl">{weather.text}</h4>
			<div class="divider" />
			<WeatherFooter />
		</div>
	</div>
{:catch error}
	<h2>{error}</h2>
{/await}
