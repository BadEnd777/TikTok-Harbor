<script lang="ts">
	import Layout from '@/components/Layout.svelte';

	import { siteConfig } from '@/config/siteConfig';
</script>

<Layout>
	<h2
		class="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
	>
		Privacy Policy - {siteConfig.title}
	</h2>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">1. Information We Collect</h3>
	<ul class="my-6 ml-6 list-disc [&>li]:mt-2">
		<li>TikTok video links provided for downloading purposes.</li>
		<li>Information provided during the download process.</li>
	</ul>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">2. How We Use Your Information</h3>
	<ul class="my-6 ml-6 list-disc [&>li]:mt-2">
		<li>Provide the requested TikTok video download service.</li>
		<li>Improve and optimize our website.</li>
	</ul>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">3. Information Sharing</h3>
	<p class="my-6 ml-6">
		We do not share your personal information with third parties except as required for our service.
	</p>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">4. Security</h3>
	<p class="my-6 ml-6">
		We take reasonable steps to protect your information, but no method of transmission over the
		Internet or electronic storage is entirely secure.
	</p>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">5. Third-Party Links</h3>
	<p class="my-6 ml-6">
		Our website may contain links to third-party websites. We have no control over the content and
		practices of these sites and are not responsible for their privacy policies.
	</p>
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
		6. Changes to This Privacy Policy
	</h3>
	<p class="my-6 ml-6">
		We reserve the right to update our privacy policy. Any changes will be posted on this page.
	</p>
</Layout>
