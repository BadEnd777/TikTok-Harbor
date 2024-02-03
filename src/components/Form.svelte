<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Loader, Download } from 'lucide-svelte';
	import { API_URL, fetchData } from '@/utils/';
	import { info, isLoadings, isFetching } from '@/stores';

	let errorMsg = '';

	// Function to handle form submission
	const handleFormSubmit = async (e: Event) => {
		e.preventDefault();
		isLoadings.setLoading(true);
		isFetching.setFetching(true);

		try {
			const form = e.target as HTMLFormElement;
			const input = form.querySelector('input') as HTMLInputElement;

			const params = new URLSearchParams({
				url: input.value,
				count: '12',
				cursor: '0',
				web: '1',
				hd: '1'
			});

			const data = await fetchData(`${API_URL}/api/`, params);

			if (data.code !== 0) {
				errorMsg = data.msg;
				return;
			}

			const { title, cover, author, hdplay, size, images } = data.data;

			info.setInfo({
				type: size ? 'video' : 'slideshow',
				thumbnail: `${API_URL}${cover}`,
				title,
				author: author.nickname,
				downloads: images ? images : [`${API_URL}${hdplay}`]
			});
		} catch (error) {
			console.error(error);
			errorMsg = 'An error occurred while processing your request.';
		} finally {
			isLoadings.setLoading(false);
			isFetching.setFetching(false);
		}
	};
</script>

<form
	class="mt-8 flex w-full items-center space-x-2 md:mx-auto md:max-w-4xl
"
	on:submit={handleFormSubmit}
>
	<div class="flex-1 space-y-1">
		<Input
			type="text"
			placeholder="Paste TikTok video link here"
			class="w-full"
			disabled={$isLoadings || $isFetching}
		/>
		{#if errorMsg}
			<p class="text-xs text-red-500">{errorMsg}</p>
		{/if}
	</div>
	<Button type="submit" class="flex items-center space-x-2" disabled={$isLoadings || $isFetching}>
		{#if $isLoadings || $isFetching}
			<Loader class="h-6 w-6 animate-spin" />
			<span class="hidden sm:inline">Please wait</span>
		{:else}
			<Download class="h-6 w-6" />
			<span class="hidden sm:inline">Download</span>
		{/if}
	</Button>
</form>
