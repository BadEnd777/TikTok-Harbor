<script lang="ts">
	import Layout from '@/components/Layout.svelte';
	import Form from '@/components/Form.svelte';
	import ResultSection from '@/components/ResultSection.svelte';

	import { siteConfig } from '@/config/siteConfig';
</script>

<Layout>
	<h1 class="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
		Welcome to {siteConfig.title}
	</h1>
	<p class="text-center text-xl text-muted-foreground">
		{siteConfig.description}
	</p>
	<Form />
	<ResultSection />
</Layout>
