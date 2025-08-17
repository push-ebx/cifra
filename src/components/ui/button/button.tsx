import type { ComponentProps, CSSProperties } from 'react';

import { clsx } from 'clsx';

import { Tappable } from '@/components/wrappers';

import { Spinner } from '../spinner/spinner';

import styles from './button.module.scss';

export type ButtonProps = ComponentProps<'button'> & {
	variant?: 'primary' | 'outline' | 'circle';
	size?: 's' | 'm' | 'l';
	width?: CSSProperties['width'];
	loading?: boolean;
};

const sizeCn = {
	s: styles.sizeS,
	m: styles.sizeM,
	l: styles.sizeL,
};

const variantCn = {
	primary: styles.variantPrimary,
	outline: styles.variantOutline,
	circle: styles.variantCircle,
};

export const Button = (props: ButtonProps) => {
	const {
		className,
		children,
		size = 'm',
		variant = 'primary',
		loading,
		disabled,
		type = 'button',
		width,
		style,
		...restProps
	} = props;

	const isDisabled = disabled || loading;

	return (
		<Tappable
			disabled={isDisabled}
			style={{ ...(width ? { '--button-width': width } : {}), ...style }}
			tag={'button'}
			type={type}
			className={clsx(
				styles.root,
				sizeCn[size],
				variantCn[variant],
				isDisabled && styles.disabled,
				loading && styles.loading,
				className
			)}
			{...restProps}
		>
			{loading ? (
				<span className={styles.loadingIndicator}>
					<Spinner />
				</span>
			) : null}
			<span className={styles.main}>{children}</span>
		</Tappable>
	);
};

Button.displayName = 'Button';
