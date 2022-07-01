<script>
	export let humidity;
	export let feelslike_c;
	export let wind_kph;
	export let localtime;
</script>

<div class="stats shadow">
	<div class="stat place-items-center">
		<div class="stat-title">Humidity</div>
		<div class="stat-value">{humidity}%</div>
	</div>

	<div class="stat place-items-center">
		<div class="stat-title">Feels Like</div>
		<div class="stat-value text-secondary">{feelslike_c}<sup>o</sup>C</div>
	</div>

	<div class="stat place-items-center">
		<div class="stat-title">Wind Speed</div>
		<div class="stat-value">{wind_kph}Kph</div>
	</div>

	<div class="stat place-items-center">
		<div class="stat-title">Local Time</div>
		<div class="stat-value">{localtime}</div>
	</div>
</div>
