import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

const tokens = defineTokens.colors({
	light: {
		'1': { value: '#fcfdfc' },
		'2': { value: '#f8faf8' },
		'3': { value: '#eff1ef' },
		'4': { value: '#e7e9e7' },
		'5': { value: '#dfe2df' },
		'6': { value: '#d7dad7' },
		'7': { value: '#cccfcc' },
		'8': { value: '#b9bcb8' },
		'9': { value: '#898e87' },
		'10': { value: '#7f847d' },
		'11': { value: '#60655f' },
		'12': { value: '#1d211c' },
		'a1': { value: '#00550003' },
		'a2': { value: '#00490007' },
		'a3': { value: '#00200010' },
		'a4': { value: '#00160018' },
		'a5': { value: '#00180020' },
		'a6': { value: '#00140028' },
		'a7': { value: '#000f0033' },
		'a8': { value: '#040f0047' },
		'a9': { value: '#050f0078' },
		'a10': { value: '#040e0082' },
		'a11': { value: '#020a00a0' },
		'a12': { value: '#010600e3' },
	},
	dark: {
		'1': { value: '#111210' },
		'2': { value: '#181917' },
		'3': { value: '#212220' },
		'4': { value: '#282a27' },
		'5': { value: '#2f312e' },
		'6': { value: '#383a36' },
		'7': { value: '#454843' },
		'8': { value: '#5c625b' },
		'9': { value: '#687066' },
		'10': { value: '#767d74' },
		'11': { value: '#afb5ad' },
		'12': { value: '#eceeec' },
		'a1': { value: '#00000000' },
		'a2': { value: '#f1f2f008' },
		'a3': { value: '#f4f5f312' },
		'a4': { value: '#f3fef21a' },
		'a5': { value: '#f2fbf122' },
		'a6': { value: '#f4faed2c' },
		'a7': { value: '#f2fced3b' },
		'a8': { value: '#edfdeb57' },
		'a9': { value: '#ebfde766' },
		'a10': { value: '#f0fdec74' },
		'a11': { value: '#f6fef4b0' },
		'a12': { value: '#fdfffded' },
	},
});
const semanticTokens = defineSemanticTokens.colors({
	'1': { value: { _light: '{colors.olive.light.1}', _dark: '{colors.olive.dark.1}' } },
	'2': { value: { _light: '{colors.olive.light.2}', _dark: '{colors.olive.dark.2}' } },
	'3': { value: { _light: '{colors.olive.light.3}', _dark: '{colors.olive.dark.3}' } },
	'4': { value: { _light: '{colors.olive.light.4}', _dark: '{colors.olive.dark.4}' } },
	'5': { value: { _light: '{colors.olive.light.5}', _dark: '{colors.olive.dark.5}' } },
	'6': { value: { _light: '{colors.olive.light.6}', _dark: '{colors.olive.dark.6}' } },
	'7': { value: { _light: '{colors.olive.light.7}', _dark: '{colors.olive.dark.7}' } },
	'8': { value: { _light: '{colors.olive.light.8}', _dark: '{colors.olive.dark.8}' } },
	'9': { value: { _light: '{colors.olive.light.9}', _dark: '{colors.olive.dark.9}' } },
	'10': { value: { _light: '{colors.olive.light.10}', _dark: '{colors.olive.dark.10}' } },
	'11': { value: { _light: '{colors.olive.light.11}', _dark: '{colors.olive.dark.11}' } },
	'12': { value: { _light: '{colors.olive.light.12}', _dark: '{colors.olive.dark.12}' } },
	'a1': { value: { _light: '{colors.olive.light.a1}', _dark: '{colors.olive.dark.a1}' } },
	'a2': { value: { _light: '{colors.olive.light.a2}', _dark: '{colors.olive.dark.a2}' } },
	'a3': { value: { _light: '{colors.olive.light.a3}', _dark: '{colors.olive.dark.a3}' } },
	'a4': { value: { _light: '{colors.olive.light.a4}', _dark: '{colors.olive.dark.a4}' } },
	'a5': { value: { _light: '{colors.olive.light.a5}', _dark: '{colors.olive.dark.a5}' } },
	'a6': { value: { _light: '{colors.olive.light.a6}', _dark: '{colors.olive.dark.a6}' } },
	'a7': { value: { _light: '{colors.olive.light.a7}', _dark: '{colors.olive.dark.a7}' } },
	'a8': { value: { _light: '{colors.olive.light.a8}', _dark: '{colors.olive.dark.a8}' } },
	'a9': { value: { _light: '{colors.olive.light.a9}', _dark: '{colors.olive.dark.a9}' } },
	'a10': { value: { _light: '{colors.olive.light.a10}', _dark: '{colors.olive.dark.a10}' } },
	'a11': { value: { _light: '{colors.olive.light.a11}', _dark: '{colors.olive.dark.a11}' } },
	'a12': { value: { _light: '{colors.olive.light.a12}', _dark: '{colors.olive.dark.a12}' } },
	'default': { value: { _light: '{colors.olive.light.9}', _dark: '{colors.olive.dark.9}' } },
	'emphasized': { value: { _light: '{colors.olive.light.10}', _dark: '{colors.olive.dark.10}' } },
	'fg': { value: { _light: 'white', _dark: 'white' } },
	'text': { value: { _light: '{colors.olive.light.12}', _dark: '{colors.olive.dark.12}' } },
});

export default {
	name: 'olive',
	tokens,
	semanticTokens,
};
