'use client';

import { useState } from 'react';

import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

import { Container, Heading, Image } from '@/components/ui';

import styles from './slider.module.scss';

export const Slider = () => {
	const [current, setCurrent] = useState(0);

	const nextSlide = () => {
		setCurrent((prev) => (prev + 1) % slides.length);
	};

	return (
		<Container className={styles.root} tag="section">
			<Heading className={styles.heading} color="secondary" size="xl">
				состав команд
			</Heading>
			<div className={styles.slider}>
				<div className={styles.cards}>
					<Image
						alt="cards"
						className={`${styles.imageCards} ${styles[`rotate-${current}`]}`}
						src="/images/cards/cards.png"
					/>

					<AnimatePresence mode="wait">
						<motion.div
							key={current}
							animate={{ opacity: 1, rotate: 0 }}
							className={styles.card}
							exit={{ opacity: 0, rotate: 10 }}
							initial={{ opacity: 0, rotate: 0 }}
							transition={{ duration: 0.45, ease: 'easeInOut' }}
						>
							<Image
								alt={slides[current].title}
								className={styles.image}
								src={slides[current].imageSrc}
							/>
						</motion.div>
					</AnimatePresence>
				</div>

				<button className={styles.nextBtn} onClick={nextSlide}>
					➜
				</button>
			</div>
		</Container>
	);
};

Slider.displayName = 'Slider';

const slides = [
	{
		title: 'Дизайнер',
		subtitle:
			'Креативный гений, который создает эффективные пользовательские интерфейсы...',
		imageSrc: '/images/slides/pic-1.webp',
	},
	{
		title: 'Маркетолог',
		subtitle: 'Эксперт в области цифрового маркетинга...',
		imageSrc: '/images/slides/pic-2.webp',
	},
	{
		title: 'Менеджер',
		subtitle: 'Он планирует и контролирует процессы...',
		imageSrc: '/images/slides/pic-3.webp',
	},
	{
		title: 'Программист',
		subtitle: 'Он занимается программированием...',
		imageSrc: '/images/slides/pic-4.webp',
	},
];
