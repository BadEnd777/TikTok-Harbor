<script lang="ts">
	import Layout from '@/components/Layout.svelte';
	import Form from '@/components/Form.svelte';
	import ResultSection from '@/components/ResultSection.svelte';

	import { siteConfig } from '@/config/siteConfig';
</script>

<Layout>
	<div class="flex flex-col items-center space-y-2">
		<h1
			class="scroll-m-20 text-center text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
		>
			Welcome to {siteConfig.title}
		</h1>
		<p
			class="md:text-md text-center text-sm text-muted-foreground md:max-w-2xl lg:max-w-3xl lg:text-lg"
		>
			{siteConfig.description}
		</p>
	</div>
	<Form />
	<ResultSection />
</Layout>
