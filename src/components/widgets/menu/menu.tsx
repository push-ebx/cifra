'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMetrica } from 'next-yandex-metrica';

import clsx from 'clsx';
import { useLenis } from 'lenis/react';

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

	const lenis = useLenis();

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

	const router = useRouter();
	const { reachGoal } = useMetrica();

	const openModal = () => {
		const params = new URLSearchParams(window.location.search);
		params.set('modal', 'true');
		router.replace(`?${params.toString()}`, { scroll: false });
		reachGoal('open_form');
	};

	return (
		<>
			<div aria-hidden={false} className={clsx(styles.root, styles.white)}>
				<div>
					<Image alt="logo" className={styles.logo} src="/images/logo.svg" />
					<nav className={styles.navigation}>
						{NAVIGATION_MENU.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className={clsx({
									[styles.active]: `#${activeSection}` === item.href,
								})}
								onClick={(e) => {
									e.preventDefault();
									const id = item.href.slice(1);
									const el = document.getElementById(id);
									if (el && lenis) {
										lenis.scrollTo(el, { offset: 0 }); // offset под фикс-хедер
									}
									history.replaceState(null, '', item.href);
								}}
							>
								{item.label}
							</a>
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
						size="s"
					>
						{'регистрация до: \n20 сентября'}
					</Description>
					<Button onClick={openModal} size="s">
						участвовать
					</Button>

					<Image
						alt="maskot"
						className={styles.maskot}
						src="/images/maskot.webp"
					/>
					<Image
						alt="gradient"
						className={styles.gradient}
						fetchPriority="high"
						priority
						src="/images/violet-gr.webp"
					/>
				</div>

				<div>
					<Description className={styles.getInTouch} size="xs">
						cвяжись с нами
					</Description>

					<div className={styles.btns}>
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
							<a
								key={item.href}
								href={item.href}
								className={clsx({
									[styles.active]: `#${activeSection}` === item.href,
								})}
								onClick={(e) => {
									e.preventDefault();
									const id = item.href.slice(1);
									const el = document.getElementById(id);
									if (el && lenis) {
										lenis.scrollTo(el, { offset: 0 });
									}
									history.replaceState(null, '', item.href);
								}}
							>
								{item.label}
							</a>
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
						size="s"
					>
						{'регистрация до: \n20 сентября'}
					</Description>
					<Button onClick={openModal} size="s" variant="secondary">
						участвовать
					</Button>

					<Image
						alt="maskot"
						className={styles.maskot}
						src="/images/maskot.webp"
					/>
					<Image
						alt="gradient"
						className={styles.gradient}
						src="/images/gray-gr.webp"
					/>
				</div>

				<div>
					<Description className={styles.getInTouch} size="xs">
						cвяжись с нами
					</Description>

					<div className={styles.btns}>
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
					<Description color="violete" size="xxs">
						cifra 2025
					</Description>
				</div>
			</div>
		</>
	);
};

Menu.displayName = 'Menu';
