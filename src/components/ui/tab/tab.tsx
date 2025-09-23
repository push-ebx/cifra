import type { ComponentProps } from 'react';

import { clsx } from 'clsx';

import styles from './tab.module.scss';

export type TabProps = ComponentProps<'button'> & {
	isActive?: boolean;
	variant?: 'secondary' | 'disabled';
};

const variantCn = {
	secondary: styles.variantSecondary,
	disabled: styles.variantDisabled,
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
