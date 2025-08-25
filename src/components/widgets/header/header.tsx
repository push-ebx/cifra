'use client';

import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { Body, Container, Description, Image } from '@/components/ui';
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

	const closeMenu = () => setOpen(false);

	return (
		<>
			<Container className={styles.root} tag="header">
				<Image
					alt="logo"
					className={styles.logo}
					src="/images/Logo-header.svg"
				/>

				{!open && (
					<button className={styles.menuBtn} onClick={() => setOpen(true)}>
						<Description color="secondary" size="xl">
							меню
						</Description>
					</button>
				)}
			</Container>
			{open && (
				<>
					<div className={styles.backdrop} onClick={() => setOpen(false)} />

					<button
						aria-label="Закрыть меню"
						className={styles.closeBtn}
						onClick={() => setOpen(false)}
					>
						<Body color={'secondary'} size={'l'}>
							закрыть
						</Body>
					</button>

					<MobileMenu className={styles.menuPanel} closeMenu={closeMenu} />
				</>
			)}
		</>
	);
};

Header.displayName = 'Header';
