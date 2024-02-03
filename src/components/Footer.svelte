<script lang="ts">
	import { siteConfig } from '@/config/siteConfig';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-border/40 bg-background/95">
	<div class="container flex h-16 flex-col items-center justify-center">
		<p class="text-sm text-muted-foreground">
			&copy; {year}
			{siteConfig.title}, All rights reserved.
		</p>
		<nav class="flex items-center space-x-4 text-sm text-muted-foreground">
			<a href="/privacy-policy"> Privacy Policy </a>
			<a href="/terms-of-service"> Terms of Service </a>
			<a href={siteConfig.repository} target="_blank" rel="noopener noreferrer"> GitHub </a>
		</nav>
	</div>
</footer>
