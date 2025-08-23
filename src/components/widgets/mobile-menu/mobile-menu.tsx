'use client';

import type { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import clsx from 'clsx';

import { Button, Description, Display, Image, Link } from '@/components/ui';
import { IconButton } from '@/components/ui/icon-button/icon-button';

import styles from './mobile-menu.module.scss';

type MobileMenuProps = {
	className?: string;
};

const NAV_ITEMS = [
	{ label: 'о цифре', href: '#about' },
	{ label: 'призы', href: '#prizes' },
	{ label: 'треки', href: '#tracks' },
	{ label: 'команды', href: '#teams' },
	{ label: 'таймлайн', href: '#timeline' },
	{ label: 'FAQ', href: '#faq' },
];

export const MobileMenu: FC<MobileMenuProps> = ({ className }) => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const openModal = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('modal', 'true');
		router.replace(`?${params.toString()}`, { scroll: false });
	};

	return (
		<div>
			{/* обнуляем паддинги модалки и рендерим свою фиолетовую панель */}
			<div className={clsx(styles.panel, className)}>
				<nav className={styles.nav}>
					{NAV_ITEMS.map((i) => (
						<a key={i.href} className={styles.link} href={i.href}>
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
						{'IT –\nАКСЕЛЕРАТОР\n2025'}
					</Display>
					<Description className={styles.subtitle} color="secondary" size="xs">
						бесплатная программа для студентов всех вузов
					</Description>
					<Button
						className={styles.cta}
						onClick={openModal}
						size="s"
						variant="secondary"
					>
						участвовать
					</Button>
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

					<Link className={styles.privacy} href="#">
						<Description color="violete" size="xxs">
							политика конфиденциальности
						</Description>
					</Link>

					<Description className={styles.footer} color="violete" size="xxs">
						cifra 2025
					</Description>
				</div>
			</div>
		</div>
	);
};

MobileMenu.displayName = 'MobileMenu';
