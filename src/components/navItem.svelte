<script>
    export let name
    export let path

    const css = 'mx-4 text-large'
</script>

<a href={'/' + path} class={css}>{name}</a>