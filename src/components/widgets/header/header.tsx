'use client';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { Container, Description, Image } from '@/components/ui';
import { MobileMenu } from '@/components/widgets/mobile-menu/mobile-menu';

import styles from './header.module.scss';

export const Header = () => {
	const [open, setOpen] = useState(false);

	// блокируем скролл страницы, когда меню открыто
	useEffect(() => {
		const prev = document.body.style.overflow;
		document.body.style.overflow = open ? 'hidden' : prev || '';
		return () => {
			document.body.style.overflow = prev;
		};
	}, [open]);

	return (
		<>
			<Container className={styles.root} tag="header">
				<Image alt="logo" src="/images/Logo-header.svg" />

				{!open ? (
					<button className={styles.menuBtn} onClick={() => setOpen(true)}>
						<Description color="secondary" size="xl">
							меню
						</Description>
					</button>
				) : (
					<button
						aria-label="Закрыть меню"
						className={styles.closeBtn}
						onClick={() => setOpen(false)}
					>
						{/* SVG крестика из вашего макета */}
						<svg
							className={styles.closeIcon}
							viewBox="0 0 14 14"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								fill="white"
								height="1.25707"
								rx="0.628535"
								transform="rotate(45 1.22266 0)"
								width="17.599"
								x="1.22266"
							/>
							<rect
								fill="white"
								height="1.25707"
								rx="0.628535"
								transform="rotate(-45 0.332031 12.4443)"
								width="17.599"
								x="0.332031"
								y="12.4443"
							/>
						</svg>
					</button>
				)}
			</Container>
			{open && (
				<>
					<div className={styles.backdrop} onClick={() => setOpen(false)} />

					{/* крестик фиксируем поверх всего */}
					<button
						aria-label="Закрыть меню"
						className={styles.closeBtn}
						onClick={() => setOpen(false)}
					>
						<svg
							className={styles.closeIcon}
							viewBox="0 0 14 14"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								fill="white"
								height="1.25707"
								rx="0.628535"
								transform="rotate(45 1.22266 0)"
								width="17.599"
								x="1.22266"
							/>
							<rect
								fill="white"
								height="1.25707"
								rx="0.628535"
								transform="rotate(-45 0.332031 12.4443)"
								width="17.599"
								x="0.332031"
								y="12.4443"
							/>
						</svg>
					</button>

					<MobileMenu className={styles.menuPanel} />
				</>
			)}
		</>
	);
};

Header.displayName = 'Header';
