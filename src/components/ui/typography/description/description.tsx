import type { ComponentProps } from 'react';

import { clsx } from 'clsx';

import type { ComponentOrTag } from '@/types';

import type { TypographyProps } from '../typography';
import { Typography } from '../typography';

import styles from './description.module.scss';

export type DescriptionProps<
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
	xxsStrong: styles.sizeXXSStrong,
};

export const Description = <
	Element extends ComponentOrTag<ComponentProps<Element>>,
>(
	props: DescriptionProps<Element>
) => {
	const {
		className,
		children,
		size = 'm',
		weight,
		...restProps
	} = props as DescriptionProps<'span'>;

	return (
		<Typography
			weight={weight}
			className={clsx(
				styles.root,
				sizeCn[weight === 'regular' ? 'xxsStrong' : size],
				className
			)}
			{...restProps}
		>
			{children}
		</Typography>
	);
};

Description.displayName = 'Description';
