import type { ComponentProps } from 'react';

import { clsx } from 'clsx';

import type { ComponentOrTag } from '@/types';

import type { TypographyProps } from '../typography';
import { Typography } from '../typography';

import styles from './display.module.scss';

export type DisplayProps<
	Element extends ComponentOrTag<ComponentProps<Element>>,
> = TypographyProps<Element> & {
	size?: 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
};

const sizeCn = {
	xl: styles.sizeXL,
	l: styles.sizeL,
	m: styles.sizeM,
	s: styles.sizeS,
	xs: styles.sizeXS,
	xxs: styles.sizeXXS,
};

export const Display = <
	Element extends ComponentOrTag<ComponentProps<Element>>,
>(
	props: DisplayProps<Element>
) => {
	const {
		className,
		children,
		size = 'm',
		weight,
		...restProps
	} = props as DisplayProps<'span'>;

	return (
		<Typography
			className={clsx(styles.root, sizeCn[size], className)}
			weight={weight}
			{...restProps}
		>
			{children}
		</Typography>
	);
};

Display.displayName = 'Display';
