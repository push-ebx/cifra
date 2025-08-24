'use client';

import { useEffect, useRef, useState } from 'react';

import { Container, Display, Heading, Image } from '@/components/ui';
import { FixedButtons } from '@/components/widgets/fixed-buttons/fixed-buttons';

import styles from './hero.module.scss';

export const Hero = () => {
	const rootRef = useRef<HTMLDivElement>(null);
	const [offset, setOffset] = useState(0);

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
					src="/images/maskot-hero.webp"
					style={{ transform: `translateY(${offset}rem)` }}
				/>
			</Container>
		</>
	);
};

Hero.displayName = 'Hero';
