<script lang="ts">
	import { siteConfig } from '@/config/siteConfig';

	const year = new Date().getFullYear();
</script>

<footer class="w-full border-t border-border/40 bg-background/95">
	<div class="container flex h-16 items-center justify-between">
		<div class="flex items-center space-x-2">
			<p class="text-muted-foreground">© {year} {siteConfig.title}</p>
			<div class="h-6 w-[1px] bg-border/40" />
			<nav class="flex items-center space-x-2">
				<a href="/privacy-policy" class="text-muted-foreground hover:underline"> Privacy Policy </a>
				<a href="/terms-of-service" class="text-muted-foreground hover:underline">
					Terms of Service
				</a>
			</nav>
		</div>
		<div class="flex items-center space-x-2">
			<p class="text-muted-foreground">This website is open source, feel free to contribute.</p>
			<a
				href={siteConfig.repository}
				target="_blank"
				rel="noopener noreferrer"
				class="hover:underline"
			>
				View on GitHub
			</a>
		</div>
	</div>
</footer>
