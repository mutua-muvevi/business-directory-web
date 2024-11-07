export {};

declare global {
	interface Window {
		hljs: typeof hljs;
	}
}