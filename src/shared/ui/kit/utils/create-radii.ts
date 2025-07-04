import { match } from 'ts-pattern';

export type Radii = (typeof borderRadii)[number];
export const borderRadii = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

export const createRadii = (radii: Radii) =>
	match(radii)
		.with('xs', () => ({
			l1: { value: '{radii.2xs}' },
			l2: { value: '{radii.xs}' },
			l3: { value: '{radii.sm}' },
		}))
		.with('sm', () => ({
			l1: { value: '{radii.xs}' },
			l2: { value: '{radii.sm}' },
			l3: { value: '{radii.md}' },
		}))
		.with('md', () => ({
			l1: { value: '{radii.sm}' },
			l2: { value: '{radii.md}' },
			l3: { value: '{radii.lg}' },
		}))
		.with('lg', () => ({
			l1: { value: '{radii.md}' },
			l2: { value: '{radii.lg}' },
			l3: { value: '{radii.xl}' },
		}))
		.with('xl', () => ({
			l1: { value: '{radii.lg}' },
			l2: { value: '{radii.xl}' },
			l3: { value: '{radii.2xl}' },
		}))
		.with('2xl', () => ({
			l1: { value: '{radii.xl}' },
			l2: { value: '{radii.2xl}' },
			l3: { value: '{radii.3xl}' },
		}))
		.otherwise(() => ({
			l1: { value: '{radii.none}' },
			l2: { value: '{radii.none}' },
			l3: { value: '{radii.none}' },
		}));
