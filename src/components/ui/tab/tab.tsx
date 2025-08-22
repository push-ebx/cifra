import type { ComponentProps } from 'react';

import { clsx } from 'clsx';

import styles from './tab.module.scss';

export type TabProps = ComponentProps<'button'> & {
	isActive?: boolean;
	variant?: 'secondary';
};

const variantCn = {
	secondary: styles.variantSecondary,
};

export const Tab = (props: TabProps) => {
	const {
		className,
		children,
		style,
		variant = 'secondary',
		isActive = false,
		...restProps
	} = props;

	return (
		<button
			style={style}
			type="button"
			className={clsx(
				styles.root,
				variantCn[variant],
				isActive && styles.isActive,
				className
			)}
			{...restProps}
		>
			<span className={styles.main}>{children}</span>
		</button>
	);
};

Tab.displayName = 'Tab';
