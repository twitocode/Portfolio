import type { Component } from 'svelte';
import type { SvelteHTMLElements } from 'svelte/elements';

export type StackItem = {
	colour: string;
	tag: string;
	icon?: Component<SvelteHTMLElements['svg']>;
};

export type Project = {
	title: string;
	summary: string;
	image: string;
	stack: StackItem[];
	status: 'completed' | 'in-progress';
	links: {
		url: string;
		alt: string;
		icon?: Component<SvelteHTMLElements['svg']>;
	}[];
};
export type Hackathon = {
	name: string;
	imageUrl: string;
	location: string;
	date: string;
	points: Point[];
	devpostLink: string
};

export type Point = {
	content: string;
	children?: Point[];
};
export type Education = {
	name: string;
	startDate: string;
	graduationDate: string;
	points: Point[];
	program?: string;
	icon: Component<SvelteHTMLElements['svg']>;
};

export type Skill = {
	name: string;
	icon: Component<SvelteHTMLElements['svg']>;
	items: StackItem[];
};
