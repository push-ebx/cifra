'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMetrica } from 'next-yandex-metrica';

import {
	Body,
	Container,
	Display,
	Heading,
	Image,
} from '@/components/ui';
import { FixedButtons } from '@/components/widgets/fixed-buttons/fixed-buttons';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';

import styles from './hero.module.scss';

export const Hero = () => {
	const rootRef = useRef<HTMLDivElement>(null);
	const [offset, setOffset] = useState(0);

	const bp = useBreakpoint();

	useEffect(() => {
		const handleScroll = () => {
			if (!rootRef.current) return;
			const rect = rootRef.current.getBoundingClientRect();

			const scrollProgress = rect.top / window.innerHeight;

			setOffset(scrollProgress * 5);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
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
			<Image
				alt="gradient"
				className={styles.gradient}
				fetchPriority="high"
				src="/images/gradient-1.webp"
			/>
			<Container
				ref={rootRef}
				className={styles.root}
				data-theme="white"
				id="about"
				tag="section"
			>
				<div className={styles.headings}>
					<Display color="secondary" size="xl">
						акселератор
					</Display>
					<Heading color="secondary" size="m">
						бесплатная программа для студентов всех вузов
					</Heading>
				</div>
				<Image
					alt="maskot"
					className={styles.maskot}
					style={{ transform: `translateY(${offset}rem)` }}
					src={
						bp === 'mobile'
							? '/images/hero-375.webp'
							: '/images/maskot-hero.webp'
					}
				/>
				<FixedButtons />

				<div className={styles.button}>
					<Heading
						className={styles.regTextDesk}
						color={'darkViolete'}
						size={'m'}
					>
						Старт осенью 2026
					</Heading>
					<Body className={styles.regTextMob} color={'darkViolete'} size={'s'}>
						Старт осенью 2026
					</Body>
				</div>
			</Container>
		</>
	);
};

Hero.displayName = 'Hero';
