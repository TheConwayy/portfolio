<script>
    import Projects from '../components/projects/Projects.svelte'
    import About from '../components/About.svelte'

    let h1css =  `text-6xl text-w font-['Oswald'] `
    let h2css = `text-2xl text-w font-['Oswald'] `
</script>

<h1 class={h1css}>Devin Conway</h1>

<h2 class={h2css + 'mt-1 uppercase'}>
    <span class="no-underline text-base">Young</span> <span class="underline underline-offset-2">developer, student, entrepreneur</span>
</h2>

<Projects />
<About />