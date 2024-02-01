<script lang="ts">
	import { Sun, Moon, Github } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { siteConfig } from '@/config/siteConfig';
	import { toggleMode } from 'mode-watcher';
</script>

<header
	class="sticky top-0 z-50 h-16 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-16 items-center justify-between">
		<div class="flex items-center">
			<a href="/" class="text-lg font-bold">
				{siteConfig.title}
			</a>
		</div>
		<nav class="flex items-center space-x-2">
			<Button on:click={toggleMode} variant="ghost" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
			<div class="h-6 w-[1px] bg-border/40" />
			<Button
				href={siteConfig.repository}
				target="_blank"
				rel="noopener noreferrer"
				variant="ghost"
				class="flex items-center space-x-2"
			>
				<Github class="h-[1.2rem] w-[1.2rem]" />
				<span>GitHub</span>
			</Button>
		</nav>
	</div>
</header>
