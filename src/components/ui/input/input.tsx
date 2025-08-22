'use client';

import type { ChangeEvent, ComponentProps, ReactNode } from 'react';
import { memo, useCallback, useState } from 'react';

import clsx from 'clsx';

import { useAutoControlledValue } from '@/hooks/client';

import styles from './input.module.scss';

const InputStates = {
	idle: 'idle',
	focused: 'focused',
	blurred: 'blurred',
};

type InputProps = ComponentProps<'input'> & {
	value?: string;
	disabled?: boolean;
	focused?: boolean;
	isValid?: boolean;
	forceError?: boolean;
	rightIcon?: ReactNode;
};

export const Input = memo((props: InputProps) => {
	const {
		value,
		disabled = false,
		focused,
		isValid = true,
		onChange,
		forceError = false,
		className,
		rightIcon,
		...restProps
	} = props;

	const [internalValue, setInternalValue] = useAutoControlledValue<string>({
		defaultState: value ?? '',
		state: value,
		initialState: '',
	});

	const [inputState, setInputState] = useState(InputStates.idle);

	const isBlurred = inputState === InputStates.blurred;
	const isFocused = inputState === InputStates.focused || focused;
	const isError = !isValid && (isBlurred || forceError) && !isFocused;

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value;
			setInternalValue(newValue);
			onChange?.(e);
		},
		[setInternalValue, onChange]
	);

	const handleFocus = useCallback(() => {
		setInputState(InputStates.focused);
	}, []);

	const handleBlur = useCallback(() => {
		setInputState(InputStates.blurred);
	}, []);

	return (
		<div
			className={clsx(
				styles.wrapper,
				{
					[styles.disabled]: disabled,
					[styles.error]: isError,
				},
				className
			)}
		>
			<input
				className={clsx(styles.input, { [styles.hasRightIcon]: !!rightIcon })}
				disabled={disabled}
				onBlur={handleBlur}
				onChange={handleChange}
				onFocus={handleFocus}
				value={internalValue ?? ''}
				{...restProps}
			/>
			{rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
		</div>
	);
});

Input.displayName = 'Input';
