<script>
	export let humidity;
	export let feelslike_c;
	export let wind_kph;
</script>

<footer class="flex text-center">
	<div>
		<strong>Humidity</strong>
		<span>{humidity}%</span>
	</div>
	<div>
		<strong>Feels Like</strong>
		<span>{feelslike_c}<sup>o</sup>C</span>
	</div>
	<div>
		<strong>Wind Speed</strong>
		<span>{wind_kph}Kph</span>
	</div>
</footer>

