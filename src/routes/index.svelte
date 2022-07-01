<script>
	import WeatherFooter from './../components/weather-footer.svelte';
	import { getWeatherFrom } from '../services/weather.js';

	let searchName = 'Buenos Aires';
	let promise;
	let domId;

	$: if (searchName.length > 3) {
		promise = getWeatherFrom(searchName);
	} else {
		promise = '';
	}
</script>

<div class="container">
	<div class="form-control w-full max-w-xs mx-8">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="label">
			<span class="label-text font-bold">Cual es su Ciudad ?</span>
		</label>
		<input
			type="text"
			bind:value={searchName}
			placeholder="Buscar ..."
			class="input input-bordered input-primary w-full max-w-xs"
		/>
	</div>

	{#await promise}
		<h2 class="text-secondary text-2xl mx-8 py-4">Procesando ...</h2>
	{:then weather}
		<div class="card w-6/12 bg-base-100 shadow-xl mx-2 my-2">
			<figure><img src={weather.icon} alt={weather.name} /></figure>
			<div class="card-body">
				<h2 class="card-title text-primary text-4xl">{weather.name}</h2>
				<p class="text-secondary text-2xl">{weather.region}</p>
				<p class="text-secondary text-2xl">{weather.country}</p>
				<p class="text-secondary text-6xl font-extrabold">{weather.temp_c}<sup>o</sup>C</p>
				<h4 class="text-secondary text-2xl">{weather.text}</h4>
				<div class="divider" />
				<WeatherFooter {...weather} />
			</div>
		</div>
	{:catch error}
		<h2>{error}</h2>
	{/await}
</div>
