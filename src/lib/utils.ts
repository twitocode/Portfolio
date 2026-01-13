import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export const badgeColorMap: Record<string, string> = {
	purple: 'bg-purple-500 hover:bg-purple-600 text-white',
	cyan: 'bg-cyan-500 hover:bg-cyan-600 text-white',
	orange: 'bg-orange-500 hover:bg-orange-600 text-white',
	blue: 'bg-blue-500 hover:bg-blue-600 text-white',
	sky: 'bg-sky-500 hover:bg-sky-600 text-white',
	green: 'bg-green-500 hover:bg-green-600 text-white',
	emerald: 'bg-emerald-700 hover:bg-emerald-800 text-white',
	dark_blue: 'bg-blue-700 hover:bg-blue-800 text-white',

	red: 'bg-red-500 hover:bg-red-600 text-white',
	yellow: 'bg-yellow-500 hover:bg-yellow-600 text-black',
	lime: 'bg-lime-500 hover:bg-lime-600 text-black',
	teal: 'bg-teal-500 hover:bg-teal-600 text-white',
	indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
	violet: 'bg-violet-500 hover:bg-violet-600 text-white',
	fuchsia: 'bg-fuchsia-500 hover:bg-fuchsia-600 text-white',
	pink: 'bg-pink-500 hover:bg-pink-600 text-white',
	rose: 'bg-rose-500 hover:bg-rose-600 text-white',
	slate: 'bg-slate-500 hover:bg-slate-600 text-white',
	zinc: 'bg-zinc-500 hover:bg-zinc-600 text-white',
	neutral: 'bg-neutral-500 hover:bg-neutral-600 text-white',
	stone: 'bg-stone-500 hover:bg-stone-600 text-white',
	black: 'bg-black hover:bg-gray-800 text-white',
	white: 'bg-white hover:bg-gray-100 text-black border border-gray-200'
};
