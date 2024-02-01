import { writable } from 'svelte/store';

interface InfoProps {
	type: string;
	thumbnail: string;
	title: string;
	author: string;
	downloads: string[];
}

const createInfoStore = () => {
	const { subscribe, set } = writable<InfoProps>({
		type: '',
		thumbnail: '',
		title: '',
		author: '',
		downloads: []
	});

	return {
		subscribe,
		setInfo: (info: InfoProps) => set(info),
		resetInfo: () =>
			set({
				type: '',
				thumbnail: '',
				title: '',
				author: '',
				downloads: []
			})
	};
};

export const info = createInfoStore();
