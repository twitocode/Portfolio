export type Project = {
	title: string;
	summary: string;
	image: string;
	stack: {
		colour: string;
		tag: string;
	}[];
	status: 'completed' | 'in-progress';
	links: {
		url: string;
		alt: string;
		icon?: Component<SvelteHTMLElements['svg']>;
	}[];
};

export type Point = {
  content: string
  children?: Point[]
}
export type Education = {
	name: string;
	startDate: string;
	graduationDate: string;
	points: Point[];
	program?: string;
};