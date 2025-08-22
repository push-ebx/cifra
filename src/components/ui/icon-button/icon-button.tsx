import type { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './icon-button.module.scss';

type IconButton = ComponentProps<'button'>;

export const IconButton = ({ className, children, ...props }: IconButton) => {
	return (
		<button
			className={clsx(styles.IconButton, className)}
			type="button"
			{...props}
		>
			{children}
		</button>
	);
};

IconButton.displayName = 'IconButton';
