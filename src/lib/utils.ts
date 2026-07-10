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

export const FAQS = [
	{
		q: 'Do you offer free estimates?',
		a: 'Yes — all estimates are free, detailed, and written. No vague ballparks.'
	},
	{
		q: 'Are you licensed and insured in Washington State?',
		a: 'Absolutely. NEXRA Construction is fully licensed (License #NEXRACO123), bonded, and carries $2M in general liability insurance.'
	},
	{
		q: 'How long does a typical kitchen remodel take?',
		a: 'Most kitchen remodels run 3–6 weeks depending on scope. We provide a written timeline before work begins and communicate any changes immediately.'
	},
	{
		q: 'Do you handle permits?',
		a: "Yes. We pull all necessary permits through Clark County and schedule inspections — you don't have to worry about it."
	},
	{
		q: 'What areas do you serve?',
		a: 'We serve all of Clark County, WA — including Vancouver, Camas, Washougal, Battle Ground, Ridgefield, La Center, and surrounding areas.'
	}
];
