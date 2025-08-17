// Expandable.tsx
'use client';

import type { ComponentProps, CSSProperties, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

import { clsx } from 'clsx';

import styles from './expandable.module.scss';

interface ExpandableProps extends ComponentProps<'div'> {
	children: ReactNode;
	isExpanded: boolean;
	duration?: number;
	transitionEasing?: CSSProperties['transitionTimingFunction'];
	containerStyle?: CSSProperties;
	trigger?: ReactNode;
	contentPosition?: 'above' | 'below';
}

interface ExpandableStyles extends CSSProperties {
	'--max-height'?: string;
	'--duration'?: string;
	'--transition-easing'?: string;
	'--opacity'?: string;
}

export const Expandable = ({
	children,
	isExpanded,
	duration = 300,
	transitionEasing = 'ease',
	containerStyle,
	trigger,
	className,
	contentPosition,
	...props
}: ExpandableProps) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const rootRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!rootRef.current) return;

		rootRef.current.style.setProperty(
			'--max-height',
			`${rootRef.current.scrollHeight}px`
		);

		if (isExpanded) {
			rootRef.current.style.setProperty('--opacity', '1');
		} else {
			rootRef.current.style.setProperty('--opacity', '0');
			setTimeout(() => {
				if (!rootRef.current) return;
				rootRef.current.style.setProperty('--max-height', `0`);
			});
		}
	}, [isExpanded]);

	useEffect(() => {
		if (!rootRef.current) return;

		if (!isExpanded) rootRef.current.classList.remove(styles.expanded);

		rootRef.current.ontransitionend = () => {
			if (!rootRef.current) return;

			if (isExpanded) {
				rootRef.current.style.setProperty('--max-height', `auto`);
				rootRef.current.classList.add(styles.expanded);
			}
		};
	}, [isExpanded]);

	const expandableContent = (
		<div
			ref={rootRef}
			className={clsx(styles.expandableContent)}
			style={
				{
					'--duration': `${duration}ms`,
					'--transition-easing': transitionEasing,
					...containerStyle,
				} as ExpandableStyles
			}
		>
			<div ref={contentRef}>{children}</div>
		</div>
	);

	return (
		<div className={clsx(styles.root, className)} {...props}>
			{contentPosition === 'above' ? (
				<>
					{expandableContent}
					{trigger}
				</>
			) : (
				<>
					{trigger}
					{expandableContent}
				</>
			)}
		</div>
	);
};

Expandable.displayName = 'Expandable';
