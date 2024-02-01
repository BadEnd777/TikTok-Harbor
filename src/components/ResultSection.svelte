<script lang="ts">
	import { Loader, Download } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { info } from '@/stores/infoStore';
	import JSZip from 'jszip';

	let isLoaded = false;

	// Function to handle download
	const handleDownload = async () => {
		isLoaded = true;

		try {
			if ($info?.type === 'video') {
				const response = await fetch($info.downloads[0]);
				const blob = await response.blob();
				const url = URL.createObjectURL(blob);
				const a = document.createElement('a');
				a.href = url;
				a.download = `${$info.title}.mp4`;
				a.click();
				URL.revokeObjectURL(url);
			} else {
				const zip = new JSZip();
				const folder = zip.folder($info?.title || '');

				if (!folder) {
					throw new Error('Failed to create folder');
				}

				if (!$info?.downloads.length) {
					throw new Error('Downloads not found');
				}

				for (let i = 0; i < $info?.downloads.length; i++) {
					const response = await fetch($info?.downloads[i] || '');
					const blob = await response.blob();
					const url = URL.createObjectURL(blob);
					const filename = `${$info?.title}_${i + 1}.jpg`;
					folder.file(filename, blob);
					URL.revokeObjectURL(url);
				}

				const content = await zip.generateAsync({
					type: 'blob'
				});
				const url = URL.createObjectURL(content);
				const a = document.createElement('a');
				a.href = url;
				a.download = `${$info?.title}.zip`;
				a.click();
				URL.revokeObjectURL(url);
			}
		} catch (error) {
			console.error(error);
		} finally {
			isLoaded = false;
		}
	};
</script>

{#if $info.title}
	<div class="mt-8 flex w-full space-x-8">
		<img src={$info.thumbnail} alt={$info.title} class="w-1/3 rounded-md object-cover" />
		<div class="flex w-2/3 flex-col space-y-4">
			<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">{$info.title}</h3>
			<p class="text-muted-foreground">Author: {$info.author}</p>
			<Button class="flex items-center space-x-2" on:click={handleDownload} disabled={isLoaded}>
				{#if isLoaded}
					<Loader class="h-6 w-6 animate-spin" />
					<span>Please wait</span>
				{:else}
					<Download class="h-6 w-6" />
					<span>Download {$info.type}</span>
				{/if}
			</Button>
		</div>
	</div>
{/if}
