import type { ComponentProps } from 'react';

import { clsx } from 'clsx';

import type { ComponentOrTag } from '@/types';

import type { TypographyProps } from '../typography';
import { Typography } from '../typography';

import styles from './heading.module.scss';

export type HeadingProps<
	Element extends ComponentOrTag<ComponentProps<Element>>,
> = TypographyProps<Element> & {
	size?: 'xl' | '1' | 'm';
};

const sizeCn = {
	xl: styles.sizeXL,
	'1': styles.size1,
	m: styles.sizeM,
};

export const Heading = <
	Element extends ComponentOrTag<ComponentProps<Element>>,
>(
	props: HeadingProps<Element>
) => {
	const {
		className,
		children,
		size = '1',
		weight,
		...restProps
	} = props as HeadingProps<'span'>;

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

Heading.displayName = 'Heading';
