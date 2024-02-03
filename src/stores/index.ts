import { writable } from 'svelte/store';

interface InfoProps {
	type: string;
	thumbnail: string;
	title: string;
	author: string;
	downloads: string[];
}

const initialState: InfoProps = {
	type: '',
	thumbnail: '',
	title: '',
	author: '',
	downloads: []
};

const createInfoStore = () => {
	const { subscribe, set } = writable<InfoProps>(initialState);

	return {
		subscribe,
		setInfo: (info: InfoProps) => set(info),
		resetInfo: () => set(initialState)
	};
};

export const info = createInfoStore();

const createLoadingStore = () => {
	const { subscribe, set } = writable<boolean>(false);

	return {
		subscribe,
		setLoading: (isLoading: boolean) => set(isLoading)
	};
};

export const isLoadings = createLoadingStore();

const createFetchingStore = () => {
	const { subscribe, set } = writable<boolean>(false);

	return {
		subscribe,
		setFetching: (isFetching: boolean) => set(isFetching)
	};
};

export const isFetching = createFetchingStore();
