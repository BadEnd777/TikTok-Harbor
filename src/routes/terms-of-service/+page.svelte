<script lang="ts">
	import Layout from '@/components/Layout.svelte';

	import { siteConfig } from '@/config/siteConfig';
</script>

<Layout>
	<h2
		class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
	>
		Terms of Service - {siteConfig.title}
	</h2>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">1. Use of Service</h3>
	<p class="my-6 ml-6">
		By using our website, you agree to abide by these terms and conditions. If you disagree with any
		part of the terms, please do not use our services.
	</p>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">2. TikTok Video Downloads</h3>
	<p class="my-6 ml-6">
		Our website provides a service to download TikTok videos. You agree to use this service
		responsibly and only for personal, non-commercial purposes.
	</p>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">3. User Conduct</h3>
	<ul class="my-6 ml-6 list-disc [&>li]:mt-2">
		<li>Use our website in any unlawful manner.</li>
		<li>Attempt to disrupt the functioning of our website.</li>
		<li>Share content that violates copyright or intellectual property rights.</li>
	</ul>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">4. Limitation of Liability</h3>
	<p class="my-6 ml-6">
		We are not liable for any damages or losses resulting from the use of our website or services.
	</p>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">5. Changes to Terms of Service</h3>
	<p class="my-6 ml-6">
		We may update our terms of service from time to time. You are responsible for checking this page
		for any changes.
	</p>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">6. Governing Law</h3>
	<p class="my-6 ml-6">
		These terms are governed by and construed in accordance with the laws of the Thailand.
	</p>
</Layout>
