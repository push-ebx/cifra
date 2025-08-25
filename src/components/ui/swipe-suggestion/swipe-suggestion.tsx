'use client';

import { type ComponentProps, useEffect, useRef, useState } from 'react';

import { Body } from '@/components/ui';

import styles from './swipe-suggestion.module.scss';

export type LinkProps = ComponentProps<'div'> & {};

export const SwipeSuggestion = (props: LinkProps) => {
	const { className, children, ...restProps } = props;
	const rootRef = useRef<HTMLDivElement | null>(null);
	const [visible, setVisible] = useState(false);
	const startedRef = useRef(false);

	useEffect(() => {
		const el = rootRef.current;
		if (!el) return;

		let hideTimer: ReturnType<typeof setTimeout> | null = null;

		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !startedRef.current) {
					startedRef.current = true;
					setVisible(true);
					hideTimer = setTimeout(() => setVisible(false), 3000);
				}
			},
			{ threshold: 0.25 }
		);

		io.observe(el);
		return () => {
			io.disconnect();
			if (hideTimer) clearTimeout(hideTimer);
		};
	}, []);

	return (
		<div ref={rootRef} className={styles.root} {...restProps}>
			{children}

			{/* overlay ВСЕГДА в DOM, а видимость — классом */}
			<div
				aria-hidden={!visible}
				className={`${styles.textWrapper} ${className} ${visible ? styles.isVisible : ''}`}
			>
				<div
					className={`${styles.blink} ${visible ? styles.contentIn : styles.contentOut}`}
				>
					<Body color="secondary" weight="semiBold">
						свайпай{' '}
						<svg
							fill="none"
							height="1rem"
							viewBox="0 0 27 16"
							width="1.6875rem"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M26.7071 8.70711C27.0976 8.31658 27.0976 7.68342 26.7071 7.29289L20.3431 0.928932C19.9526 0.538408 19.3195 0.538408 18.9289 0.928932C18.5384 1.31946 18.5384 1.95262 18.9289 2.34315L24.5858 8L18.9289 13.6569C18.5384 14.0474 18.5384 14.6805 18.9289 15.0711C19.3195 15.4616 19.9526 15.4616 20.3431 15.0711L26.7071 8.70711ZM0 8V9H26V8V7H0V8Z"
								fill="white"
							/>
						</svg>
					</Body>
				</div>
			</div>
		</div>
	);
};

SwipeSuggestion.displayName = 'SwipeSuggestion';
