# TikTok Harbor - Development Guide

## Overview

This guide provides step-by-step instructions for setting up, developing and Deployment the TikTok Harbor website. The TikTok Harbor is built using [SvelteKit](https://kit.svelte.dev/), a framework for building website with [Svelte](https://svelte.dev/).

## Prerequisites

Before you begin, make sure your have the following installed on your development machine:

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/)

## Getting Started

1. Clone the repository to your local machine:

```bash
git clone https://github.com/Onyx-Innovators/TikTok-Harbor.git
```

2. Change into the project directory:

```bash
cd TikTok-Harbor
```

3. Install the project dependencies:

```bash
npm install
```

## Development

### Running Locally

To run the website locally, use the following command:

```bash
npm run dev
```

This will start the development server. Open your web browser and visit [`http://localhost:5173/`](http://localhost:5173/) to view the website.

### Project Structure

- `src/components`: Reusable Svelte components.
- `src/config`: Configuration files.
- `src/lib`: Utility functions of external libraries.
- `src/routes`: Contains Svelte files for each page of the website.
- `src/stores`: Svelte stores for managing global state.
- `src/utils`: Utility functions for the website.
- `static`: Static assets such as images, videos, and other files.

### Making Changes

1. Make changes to Svete files in the `src` directory.
2. Save your changes and the development server will automatically reload.

## Deployment

### Building for Production

To build the website for production, use:

```bash
npm run build
```

This will generates an optimized version of the website in the `.svelte-kit/output` directory.

### Deploying to Cloudflare Pages

The TikTok Harbor website is deployed to [Cloudflare Pages](https://pages.cloudflare.com/). Refer to the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/get-started) for instructions on deploying the website.

1. Install the Cloudflare adapter:

```bash
npm install -D @sveltejs/adapter-cloudflare
```

2. Add the adapter to the `svelte.config.js` file:

```javascript
import adapter from '@sveltejs/adapter-cloudflare';

export default {
	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		})
	}
};
```

> [!NOTE]
> To deploy the website to other platforms, refer to the [SvelteKit Adapters documentation](https://kit.svelte.dev/docs/adapters).

## Contributing

1. Fork the repository from [GitHub](https://github.com/Onyx-Innovators/TikTok-Harbor).
2. Clone your fork to your local machine.
3. Create a new branch for your festure or bug fix.
4. Make your changes and submit a pull request.

## Conclusion

This guild provides a basic setup for the development of the TikTok Harbor website. Customization and extent is based on your requirements. Always refer to the official documentation for the tools and frameworks used for more in-depth information.

For more information, refer to the [SvelteKit documentation](https://kit.svelte.dev/docs) and the [Svelte documentation](https://svelte.dev/docs).

## License

The TikTok Harbor website is open-source and licensed under the [MIT License](LICENSE).

---
