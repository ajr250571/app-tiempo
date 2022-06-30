<script>
	import { getWeatherFrom } from '../services/weather.js';

	const promise = getWeatherFrom('Tucuman');
</script>

{#await promise then weather}
	<div class="card w-96 bg-base-100 shadow-xl mx-2 my-2">
		<figure><img src={null} alt={weather.name} /></figure>
		<div class="card-body">
			<h2 class="card-title">{weather.name}</h2>
			<p>{weather.region}</p>
			<p>{weather.country}</p>
			<p>{weather.temp_c}<sup>o</sup>C</p>
			<h4 class='rotate-90 position: absolute'>{weather.text}</h4>
			
		</div>
	</div>
{:catch error}
	<!-- promise was rejected -->
{/await}
