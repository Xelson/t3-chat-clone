import { comboboxAnatomy } from '@ark-ui/react';
import { defineSlotRecipe } from '@pandacss/dev';

export const combobox = defineSlotRecipe({
	className: 'combobox',
	slots: comboboxAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			gap: '1.5',
		},
		control: {
			position: 'relative',
		},
		label: {
			color: 'fg.default',
			fontWeight: 'medium',
		},
		input: {
			outline: '1px solid transparent',
			outlineColor: 'gray.4',
			backgroundColor: 'gray.2',
			_hover: {
				outlineColor: 'gray.5',
			},
			_priority: {
				_focusWithin: {
					outlineColor: 'colorPalette.7',
				},
				_invalid: {
					outlineColor: 'border.error',
				},
			},
			height: '2rem',
			borderRadius: '0.25rem',
			paddingX: '0.75rem',
			paddingY: '0.25rem',
			gap: '0.75rem',
		},
		trigger: {
			bottom: '0',
			color: 'fg.muted',
			position: 'absolute',
			right: '0',
			top: '0',
		},
		content: {
			background: 'bg.default',
			borderRadius: 'l2',
			boxShadow: 'lg',
			display: 'flex',
			flexDirection: 'column',
			zIndex: 'dropdown',
			_hidden: {
				display: 'none',
			},
			_open: {
				animation: 'fadeIn 0.25s ease-out',
			},
			_closed: {
				animation: 'fadeOut 0.2s ease-out',
			},
			_focusVisible: {
				outlineOffset: '2px',
				outline: '2px solid',
				outlineColor: 'border.outline',
			},
		},
		item: {
			alignItems: 'center',
			borderRadius: 'l1',
			cursor: 'pointer',
			display: 'flex',
			justifyContent: 'space-between',
			transitionDuration: 'fast',
			transitionProperty: 'background, color',
			transitionTimingFunction: 'default',
			_hover: {
				background: 'bg.muted',
			},
			_highlighted: {
				background: 'bg.muted',
			},
			_disabled: {
				color: 'fg.disabled',
				cursor: 'not-allowed',
				_hover: {
					background: 'transparent',
				},
			},
		},
		itemGroupLabel: {
			fontWeight: 'semibold',
			textStyle: 'sm',
		},
		itemIndicator: {
			color: 'colorPalette.default',
		},
	},
	defaultVariants: {
		size: 'md',
	},
	variants: {
		size: {
			sm: {
				content: { p: '0.5', gap: '1' },
				item: { textStyle: 'sm', px: '2', height: '9' },
				itemIndicator: {
					_icon: {
						width: '4',
						height: '4',
					},
				},
				itemGroupLabel: {
					px: '2',
					py: '1.5',
				},
				label: { textStyle: 'sm' },
				trigger: { right: '2.5' },
			},
			md: {
				content: { p: '1', gap: '1' },
				item: { textStyle: 'md', px: '2', height: '10' },
				itemIndicator: {
					_icon: {
						width: '4',
						height: '4',
					},
				},
				itemGroupLabel: {
					px: '2',
					py: '1.5',
				},
				label: { textStyle: 'sm' },
				trigger: { right: '3' },
			},
			lg: {
				content: { p: '1.5', gap: '1' },
				item: { textStyle: 'md', px: '2', height: '11' },
				itemIndicator: {
					_icon: {
						width: '5',
						height: '5',
					},
				},
				itemGroupLabel: {
					px: '2',
					py: '1.5',
				},
				label: { textStyle: 'sm' },
				trigger: { right: '3.5' },
			},
		},
	},
});
