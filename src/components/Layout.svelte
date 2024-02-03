<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<Header />
<main class="container mx-auto min-h-[calc(100vh-4rem)] overflow-x-hidden py-8">
	<slot />
</main>
<Footer />
