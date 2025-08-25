'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button, Container, Display, Heading, Image } from '@/components/ui';
import { FixedButtons } from '@/components/widgets/fixed-buttons/fixed-buttons';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';

import styles from './hero.module.scss';

export const Hero = () => {
	const rootRef = useRef<HTMLDivElement>(null);
	const [offset, setOffset] = useState(0);

	const router = useRouter();

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

	const openModal = () => {
		const params = new URLSearchParams(window.location.search);
		params.set('modal', 'true');
		router.replace(`?${params.toString()}`, { scroll: false });
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
						IT-акселератор
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
				<Button className={styles.ctaButton} onClick={openModal} size="l">
					участвовать
				</Button>
				<FixedButtons />
			</Container>
		</>
	);
};

Hero.displayName = 'Hero';
