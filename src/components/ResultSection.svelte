<script lang="ts">
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { Button } from '$lib/components/ui/button';
	import { Loader, Download } from 'lucide-svelte';
	import { info, isLoadings, isFetching } from '@/stores';
	import JSZip from 'jszip';

	// Function to handle download
	const handleDownload = async () => {
		isLoadings.setLoading(true);

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
			isLoadings.setLoading(false);
		}
	};
</script>

{#if $isFetching && !$info.title}
	<div
		class="mt-8 flex w-full flex-col space-x-2 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:mx-auto md:max-w-4xl md:space-x-8"
	>
		<Skeleton
			class="max-h-[200px] min-h-[200px] w-full rounded-md object-cover sm:max-h-[300px] sm:w-1/3"
		/>
		<div class="flex w-full flex-col space-y-4 sm:w-2/3">
			<Skeleton class="h-6 w-1/2" />
			<Skeleton class="h-4 w-1/4" />
			<Skeleton class="h-6 w-1/3" />
		</div>
	</div>
{:else if $info.title}
	<div
		class="mt-8 flex w-full flex-col space-x-2 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:mx-auto md:max-w-4xl md:space-x-8"
	>
		<img
			src={$info.thumbnail}
			alt={$info.title}
			class="max-h-[200px] min-h-[200px] w-full rounded-md object-cover sm:max-h-[300px] sm:w-1/3"
		/>
		<div class="flex w-full flex-col space-y-4 sm:w-2/3">
			<h3 class="text-md scroll-m-20 font-semibold tracking-tight md:text-xl lg:text-2xl">
				{$info.title}
			</h3>
			<p class="text-muted-foreground">Author: {$info.author}</p>
			<Button class="flex items-center space-x-2" on:click={handleDownload} disabled={$isLoadings}>
				{#if $isLoadings}
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
