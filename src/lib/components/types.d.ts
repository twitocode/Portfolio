export  	type Project = {
		title: string;
		summary: string;
		image: string;
    stack: {
      colour: string,
      tag: string
    }[],
    status: "completed" | "in-progress",
		links: {
			url: string;
			alt: string;
			icon?: Component<SvelteHTMLElements['svg']>;
		}[];
	};