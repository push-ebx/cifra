'use client';

import type { ChangeEvent, ComponentProps } from 'react';
import { useState } from 'react';
import { memo, useCallback } from 'react';

import clsx from 'clsx';

import styles from './checkbox.module.scss';

const CheckIcon = () => (
	<svg
		fill="none"
		height="0.5625rem"
		viewBox="0 0 12 9"
		width="0.75rem"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 3.07692L4.95337 7L11 1"
			pathLength="14"
			stroke="white"
			strokeLinecap="round"
			strokeWidth="2"
		/>
	</svg>
);

CheckIcon.displayName = 'CheckIcon';

type CheckboxProps = ComponentProps<'input'> & {
	className?: string;
	checked?: boolean;
	defaultChecked?: boolean;
};

export const Checkbox = memo((props: CheckboxProps) => {
	const { className, onChange, checked, defaultChecked, ...restProps } = props;

	const [internalChecked, setInternalChecked] = useState(
		defaultChecked ?? false
	);

	const isChecked = checked !== undefined ? checked : internalChecked;

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			if (checked === undefined) {
				setInternalChecked(e.target.checked);
			}

			onChange?.(e);
		},
		[onChange, checked]
	);

	return (
		<label className={clsx(styles.wrapper, className)}>
			<input
				checked={isChecked}
				className={styles.input}
				onChange={handleChange}
				type="checkbox"
				{...restProps}
			/>
			<div className={clsx(styles.visual, isChecked && styles.isChecked)}>
				{isChecked && (
					<div className={styles.icon}>
						<CheckIcon />
					</div>
				)}
			</div>
		</label>
	);
});

Checkbox.displayName = 'Checkbox';
