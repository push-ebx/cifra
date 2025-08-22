'use client';

import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { Button, Description, Display, Image, Link } from '@/components/ui';
import { IconButton } from '@/components/ui/icon-button/icon-button';
import { useActiveSection } from '@/hooks/client';

import styles from './menu.module.scss';

const NAVIGATION_MENU = [
	{ label: 'о цифре', href: '#about' },
	{ label: 'призы', href: '#prizes' },
	{ label: 'треки', href: '#tracks' },
	{ label: 'команды', href: '#teams' },
	{ label: 'таймлайн', href: '#timeline' },
	{ label: 'FAQ', href: '#faq' },
];

export const Menu = () => {
	const activeSection = useActiveSection(
		NAVIGATION_MENU.map((i) => i.href.replace('#', ''))
	);

	const purpleRef = useRef<HTMLDivElement | null>(null);
	const [clipPath, setClipPath] = useState<string>('inset(0 0 100% 0)');

	useEffect(() => {
		const purpleSections = Array.from(
			document.querySelectorAll<HTMLElement>('[data-theme="purple"]')
		);

		if (!purpleRef.current) return;

		const updateMask = () => {
			const menuEl = purpleRef.current!;
			const menuRect = menuEl.getBoundingClientRect();
			const vh = window.innerHeight;

			const ranges: Array<[number, number]> = [];

			for (const sec of purpleSections) {
				const r = sec.getBoundingClientRect();

				const visTop = Math.max(r.top, 0);
				const visBot = Math.min(r.bottom, vh);

				const top = Math.max(visTop, menuRect.top);
				const bot = Math.min(visBot, menuRect.bottom);

				if (bot > top) {
					const y1 = top - menuRect.top;
					const y2 = bot - menuRect.top;
					ranges.push([y1, y2]);
				}
			}

			if (ranges.length === 0) {
				setClipPath('inset(0 0 100% 0)');
				return;
			}

			ranges.sort((a, b) => a[0] - b[0]);
			const merged: Array<[number, number]> = [];
			for (const [t, b] of ranges) {
				if (!merged.length || t > merged[merged.length - 1][1]) {
					merged.push([t, b]);
				} else {
					merged[merged.length - 1][1] = Math.max(
						merged[merged.length - 1][1],
						b
					);
				}
			}

			const w = menuRect.width;

			const d = merged
				.map(([t, b]) => `M${0} ${t} H ${w + w} V ${b} H ${0} Z`)
				.join(' ');
			setClipPath(`path('${d}')`);
		};

		let ticking = false;
		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(() => {
					updateMask();
					ticking = false;
				});
			}
		};

		updateMask();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		};
	}, []);

	return (
		<>
			<div aria-hidden={false} className={clsx(styles.root, styles.white)}>
				<div>
					<Image alt="logo" className={styles.logo} src="/images/logo.svg" />
					<nav className={styles.navigation}>
						{NAVIGATION_MENU.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={clsx(
									'#' + activeSection === item.href && styles.active
								)}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
				<div className={styles.withMascot}>
					<Display className={styles.it2025} color="secondary" size="xs">
						IT - акселератор 2025
					</Display>
					<Description
						className={styles.description}
						color="secondary"
						size="xs"
					>
						бесплатная программа для студентов всех вузов
					</Description>
					<Button size="s">участвовать</Button>

					<Image
						alt="maskot"
						className={styles.maskot}
						src="/images/maskot.webp"
					/>
				</div>

				<div>
					<Image
						alt="gradient"
						className={styles.gradient}
						fetchPriority="high"
						priority
						src="/images/violet-gr.webp"
					/>

					<Description className={styles.getInTouch} size="xs">
						cвяжись с нами
					</Description>

					<div className={styles.btns}>
						<IconButton className={styles.vk} />
						<IconButton className={styles.tg} />
					</div>

					<Link className={styles.privacy} href="#">
						<Description color="darkGray" size="xxs">
							политика конфиденциальности
						</Description>
					</Link>
					<Description color="darkGray" size="xxs">
						cifra 2025
					</Description>
				</div>
			</div>

			<div
				ref={purpleRef}
				aria-hidden
				className={clsx(styles.root, styles.purple)}
				style={{ clipPath }}
			>
				<div>
					<Image alt="logo" className={styles.logo} src="/images/logo.svg" />
					<nav className={styles.navigation}>
						{NAVIGATION_MENU.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={clsx(
									'#' + activeSection === item.href && styles.active
								)}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
				<div className={styles.withMascot}>
					<Display className={styles.it2025} color="secondary" size="xs">
						IT - акселератор 2025
					</Display>
					<Description
						className={styles.description}
						color="secondary"
						size="xs"
					>
						бесплатная программа для студентов всех вузов
					</Description>
					<Button size="s">участвовать</Button>

					<Image
						alt="maskot"
						className={styles.maskot}
						src="/images/maskot.webp"
					/>
				</div>

				<div>
					<Description className={styles.getInTouch} size="xs">
						cвяжись с нами
					</Description>

					<div className={styles.btns}>
						<IconButton className={styles.vk} />
						<IconButton className={styles.tg} />
					</div>

					<Link className={styles.privacy} href="#">
						<Description color="violete" size="xxs">
							политика конфиденциальности
						</Description>
					</Link>
					<Description color="violete" size="xxs">
						cifra 2025
					</Description>

					<Image
						alt="gradient"
						className={styles.gradient}
						src="/images/gray-gr.webp"
					/>
				</div>
			</div>
		</>
	);
};

Menu.displayName = 'Menu';
