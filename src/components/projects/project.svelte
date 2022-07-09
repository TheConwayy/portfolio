<script>
	export let name;
	export let repo;
	export let emoji;
	export let desc;
	export let link;
</script>

<li class="mb-5">
	<a href={link || 'https://github.com/TheConwayy/' + repo} target="_blank">{name} {emoji}</a>
	<p class="text-base">{desc}</p>
</li>
