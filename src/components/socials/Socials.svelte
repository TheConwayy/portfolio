<script>
	import Social from './social.svelte';

	let h1css = `text-6xl text-w font-['Oswald'] `;
</script>

<h1 class={h1css + 'text-right mt-20 mb-10'}>
	Socials <span class="text-base"><a href="https://linktr.ee/devinconwayy">(LinkTr.ee)</a></span>
</h1>

<ul class="text-2xl text-w font-['Oswald'] text-right list-none">
	<Social name="GitHub" icon="fa-brands fa-github" link="https://github.com/TheConwayy/" />
	<Social name="Twitter" icon="fa-brands fa-twitter" link="https://twitter.com/DevinConwayy" />
	<li class="mb-5">
		<i class="fa-brands fa-discord" /> - Discord: <span class="non-link">Conway#1000</span>
	</li>
	<li>
		<i class="fa-solid fa-at" /> - Email: <span class="non-link">devinthomas1208@gmail.com</span>
	</li>
</ul>
