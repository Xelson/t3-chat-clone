import { defineSemanticTokens } from '@pandacss/dev';

export const radii = defineSemanticTokens.radii({
	l1: { value: '{radii.xs}' },
	l2: { value: '{radii.sm}' },
	l3: { value: '{radii.md}' },
});
