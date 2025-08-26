'use client';

import clsx from 'clsx';
import { useLenis } from 'lenis/react';

import styles from './scroll-to-top-button.module.scss';

export const ScrollToTopButton = () => {
	const lenis = useLenis();

	const scrollToTop = () => {
		if (lenis) {
			lenis.scrollTo(0, { offset: 0 });
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	return (
		<>
			<button
				aria-hidden
				className={clsx(styles.root, styles.purple)}
				onClick={scrollToTop}
			>
				<svg
					fill="none"
					height="2.5rem"
					viewBox="0 0 40 40"
					width="2.5rem"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						fill="#752CE8"
						height="39"
						rx="19.5"
						width="39"
						x="0.5"
						y="0.5"
					/>
					<rect
						height="39"
						rx="19.5"
						stroke="white"
						width="39"
						x="0.5"
						y="0.5"
					/>
					<g clip-path="url(#clip0_2775_1075)">
						<path d="M32 8H8V32H32V8Z" fill="white" fill-opacity="0.01" />
						<path
							d="M20 11V29"
							stroke="white"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M14 17L20 11L26 17"
							stroke="white"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_2775_1075">
							<rect
								fill="white"
								height="24"
								transform="translate(8 8)"
								width="24"
							/>
						</clipPath>
					</defs>
				</svg>
			</button>
		</>
	);
};

ScrollToTopButton.displayName = 'ScrollToTopButton';
