'use client';

import type { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useMetrica } from 'next-yandex-metrica';

import clsx from 'clsx';

import { Description, Display, Image, Link } from '@/components/ui';
import { IconButton } from '@/components/ui/icon-button/icon-button';

import styles from './mobile-menu.module.scss';

type MobileMenuProps = {
	className?: string;
	closeMenu: () => void;
};

const NAV_ITEMS = [
	{ label: 'о цифре', href: '#about' },
	{ label: 'призы', href: '#prizes' },
	{ label: 'треки', href: '#tracks' },
	{ label: 'команды', href: '#teams' },
	{ label: 'таймлайн', href: '#timeline' },
	{ label: 'вопросы', href: '#faq' },
];

export const MobileMenu: FC<MobileMenuProps> = ({ className, closeMenu }) => {
	const router = useRouter();
	const { reachGoal } = useMetrica();

	const openModal = () => {
		const params = new URLSearchParams(window.location.search);
		params.set('modal', 'true');
		router.replace(`?${params.toString()}`, { scroll: false });
		reachGoal('open_form');
	};

	return (
		<div className={styles.root}>
			<div className={clsx(styles.panel, className)}>
				<nav className={styles.nav}>
					{NAV_ITEMS.map((i) => (
						<a
							key={i.href}
							className={styles.link}
							href={i.href}
							onClick={closeMenu}
						>
							{i.label}
						</a>
					))}
				</nav>

				<div className={styles.hero}>
					<Image
						alt="maskot"
						className={styles.mascot}
						src="/images/maskot.webp"
					/>
					<Display className={styles.title} color="secondary" size="xs">
						{'АКСЕЛЕРАТОР\n2026'}
					</Display>
					<Description className={styles.subtitle} color="secondary" size="xs">
						Старт осенью 2026
					</Description>
				</div>

				<div className={styles.contact}>
					<Description className={styles.contactTitle} size="xs">
						свяжись с нами
					</Description>
					<div className={styles.socials}>
						<a
							href="https://vk.com/cifra.startup"
							rel="nofollow"
							target="_blank"
						>
							<IconButton className={styles.vk} />
						</a>
						<a href="https://t.me/cifra_startup" rel="nofollow" target="_blank">
							<IconButton className={styles.tg} />
						</a>
					</div>

					<Link
						className={styles.privacy}
						href="https://docs.google.com/document/d/e/2PACX-1vQw9TeRe_oyzYVy97u4XIJoIGByAv6ZMes-yb1wbMbc_2Hn9DoZbmuOHn8Rea02qeLHJw4t6IlAS_oe/pub"
					>
						<Description color="violete" size="xxs">
							политика конфиденциальности
						</Description>
					</Link>
				</div>
			</div>
		</div>
	);
};

MobileMenu.displayName = 'MobileMenu';
