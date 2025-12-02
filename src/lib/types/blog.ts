import type { Component } from 'svelte';

export interface BlogPostMetadata {
	title: string;
	date: string;
	description: string;
	slug: string;
	image?: string;
}

export interface BlogPost {
	metadata: Omit<BlogPostMetadata, 'slug'>;
	default: Component;
}
