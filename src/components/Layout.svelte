<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<Header />
<main class="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[750px] flex-col space-y-8 py-16">
	<slot />
</main>
<Footer />
