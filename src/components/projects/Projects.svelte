<script>
	import Project from './project.svelte';

	let h1css = `text-6xl text-w font-['Oswald'] `;
</script>

<h1 class={h1css + 'text-right mt-20 mb-10'}>
	Projects <span class="text-base"><a href="https://github.com/TheConwayy" target="_blank">(GitHub)</a></span>
</h1>

<ul class="text-2xl text-w font-['Oswald'] text-right list-none">
	<Project name="Personal Portfolio" repo="portfolio" emoji="📜" desc="Well.. Do I need to say?" />
	<Project
		name="Quote Bot"
		repo="QuoteBot"
		emoji="💬"
		desc="Discord bot the gives you that little boost you may need."
	/>
	<Project
		name="GTA V Mods"
		link="https://youtube.com"
		emoji="🚓"
		desc="Making FiveM ES vehicles!"
	/>
</ul>
