import type { ComponentProps, CSSProperties, JSX } from 'react';

import { clsx } from 'clsx';

import styles from './glass-card.module.scss';

export type GlassCardProps<T extends keyof JSX.IntrinsicElements> =
	ComponentProps<T> & {
		tag?: T;
		borderWidth?: number;
		blurStrength?: number;
		borderRadius?: number;
		contentClassName?: string;
		cardClassName?: string;
	};

export const GlassCard = <T extends keyof JSX.IntrinsicElements>(
	props: GlassCardProps<T>
) => {
	const {
		children,
		tag: Component = 'div',
		borderWidth = '0.0625rem',
		blurStrength = '0.625rem',
		borderRadius = '1.25rem',
		contentClassName,
		cardClassName,
		...restProps
	} = props;

	const gradientStyle = {
		'--border-width': `${borderWidth}`,
		'--blur-strength': `${blurStrength}`,
		'--border-radius': `${borderRadius}`,
	} as CSSProperties;

	return (
		// @ts-expect-error Не сработало сужение типов
		<Component
			className={clsx(styles.root, cardClassName)}
			style={gradientStyle}
			{...restProps}
		>
			<div className={styles.border} />
			<div className={clsx(styles.content, contentClassName)}>{children}</div>
		</Component>
	);
};

GlassCard.displayName = 'GlassCard';
