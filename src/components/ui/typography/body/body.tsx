import type { ComponentProps } from 'react';

import { clsx } from 'clsx';

import type { ComponentOrTag } from '@/types';

import type { TypographyProps } from '../typography';
import { Typography } from '../typography';

import styles from './body.module.scss';

export type BodyProps<Element extends ComponentOrTag<ComponentProps<Element>>> =
	TypographyProps<Element> & {
		size?: 'l' | 'm' | 's';
	};

const sizeCn = {
	l: styles.sizeL,
	m: styles.sizeM,
	s: styles.sizeS,
	sStrong: styles.sizeSStrong,
};

export const Body = <Element extends ComponentOrTag<ComponentProps<Element>>>(
	props: BodyProps<Element>
) => {
	const {
		className,
		children,
		size = 'm',
		weight,
		...restProps
	} = props as BodyProps<'span'>;

	return (
		<Typography
			weight={weight}
			className={clsx(
				styles.root,
				weight === 'regular' ? sizeCn['sStrong'] : sizeCn[size],
				className
			)}
			{...restProps}
		>
			{children}
		</Typography>
	);
};

Body.displayName = 'Heading';
