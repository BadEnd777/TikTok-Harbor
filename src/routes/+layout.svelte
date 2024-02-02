<script>
	import { ModeWatcher } from 'mode-watcher';
	import { siteConfig } from '@/config/siteConfig';

	import '$src/app.pcss';
</script>

<svelte:head>
	<title>{siteConfig.title} - TikTok Downloader</title>
	<meta name="description" content={siteConfig.description} />

	<meta property="og:url" content={siteConfig.url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`${siteConfig.title} - TikTok Downloader`} />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:image" content={siteConfig.ogImage} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={siteConfig.url} />
	<meta property="twitter:url" content={siteConfig.url} />
	<meta name="twitter:title" content={`${siteConfig.title} - TikTok Downloader`} />
	<meta name="twitter:description" content={siteConfig.description} />
	<meta name="twitter:image" content={siteConfig.ogImage} />
</svelte:head>

<ModeWatcher defaultMode={'dark'} />
<slot />
