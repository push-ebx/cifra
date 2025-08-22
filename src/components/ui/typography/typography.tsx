import type { ComponentProps } from 'react';

import clsx from 'clsx';

import type { ComponentOrTag, DynamicProps } from '@/types';

import styles from './typography.module.scss';

export type TypographyProps<
	Element extends ComponentOrTag<ComponentProps<Element>>,
> = DynamicProps<Element> & {
	weight?: 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold';
	color?:
		| 'primary'
		| 'secondary'
		| 'inherit'
		| 'accent'
		| 'violete'
		| 'darkViolete'
		| 'gray'
		| 'darkGray';
};

const weightCn = {
	regular: styles.weightRegular,
	medium: styles.weightMedium,
	semiBold: styles.weightSemiBold,
	bold: styles.weightBold,
	extraBold: styles.extraBold,
};

const colorCn = {
	inherit: styles.colorInherit,
	primary: styles.colorPrimary,
	secondary: styles.colorSecondary,
	accent: styles.colorAccent,
	violete: styles.colorViolete,
	darkViolete: styles.colorDarkViolete,
	gray: styles.colorGray,
	darkGray: styles.colorDarkGray,
};

export const Typography = <
	Element extends ComponentOrTag<ComponentProps<Element>>,
>(
	props: TypographyProps<Element>
) => {
	const {
		children,
		className,
		tag: Component = 'span',
		weight,
		color = 'primary',
		...restProps
	} = props as TypographyProps<'span'>;

	return (
		<Component
			{...restProps}
			className={clsx(
				styles.root,
				weight && weightCn[weight],
				colorCn[color],
				className
			)}
		>
			{children}
		</Component>
	);
};

Typography.displayName = 'Typography';
