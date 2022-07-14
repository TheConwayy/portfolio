<script>
	let element;
</script>

<div bind:this={element}>
	<slot />
</div>

<button
	on:click={() => {
		element.scrollIntoView();
	}}
>
	<i class="fa-solid fa-arrow-up" />
</button>

<style>
	button {
		background: #d1d1d1;
		padding: 10px 20px 10px 20px;
		border-radius: 50%;
		font-size: 1.75rem;

		position: fixed;
		bottom: 40px;
		right: 40px;
	}
</style>
