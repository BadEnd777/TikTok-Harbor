<script>
	import { ModeWatcher } from 'mode-watcher';
	import { siteConfig } from '@/config/siteConfig';
	import '$src/app.pcss';

	const openGraph = `${siteConfig.url}${siteConfig.image}`;
</script>

<svelte:head>
	<meta name="msapplication-TileColor" content="#000000" />
	<meta name="theme-color" content="#000000" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="keywords" content={siteConfig.keywords.join(', ')} />
	<meta name="description" content={siteConfig.description} />
	<meta name="og:description" content={siteConfig.description} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={openGraph} />
	<meta name="twitter:site:domain" content={siteConfig.url} />
	<meta name="twitter:url" content={siteConfig.url} />
	<meta name="og:title" content={siteConfig.title} />
	<meta name="og:image" content={openGraph} />
	<meta name="apple-mobile-web-app-title" content="Chat Bridge" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
</svelte:head>

<ModeWatcher defaultMode={'dark'} />
<slot />
