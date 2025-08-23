'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { AnimatePresence, motion } from 'motion/react';

import { DesignerIcon } from '@/components/icons';
import { Body, Button, Container, Heading, Image } from '@/components/ui';
import { CarouselControls } from '@/components/ui/carousel-controls/carousel-controls';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';
import { useCarouselControls } from '@/hooks/client/use-carousel-controls';

import styles from './slider.module.scss';

export const Slider = () => {
	const visibleSlides = 1;
	const bp = useBreakpoint();

	const { activeSlide, handleNext, handlePrev } = useCarouselControls(
		slides.length,
		visibleSlides
	);

	const variants =
		bp === 'mobile'
			? {
					initial: { opacity: 0, rotate: 0 },
					animate: { opacity: 1, rotate: 0 },
					exit: (dir: 'next' | 'prev') => ({
						opacity: 0,
						x: dir === 'next' ? 5 : -5,
					}),
				}
			: {
					initial: { opacity: 0, rotate: 0 },
					animate: { opacity: 1, rotate: 0 },
					exit: (dir: 'next' | 'prev') => ({
						opacity: 0,
						rotate: dir === 'next' ? 5 : -5,
					}),
				};

	const [direction, setDirection] = useState<'next' | 'prev'>('next');

	const searchParams = useSearchParams();
	const router = useRouter();

	const openModal = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('modal', 'true');
		router.replace(`?${params.toString()}`, { scroll: false });
	};

	return (
		<Container className={styles.root} id="teams" tag="section">
			<Heading className={styles.heading} color="secondary" size="xl">
				состав команд
			</Heading>
			<div className={styles.slider}>
				<div className={styles.headingButton}>
					<Heading color="secondary" size="1">
						решил кем видишь себя в команде?
					</Heading>
					<Button onClick={openModal} size="s" variant="outline">
						да, го в команду
					</Button>
				</div>
				<div className={styles.cards}>
					<Image
						alt="cards"
						className={`${styles.imageCards} ${styles[`rotate-${activeSlide}`]}`}
						src="/images/cards/cards.png"
					/>

					<AnimatePresence custom={direction} mode="wait">
						<motion.div
							key={activeSlide}
							animate="animate"
							className={styles.card}
							custom={direction}
							exit="exit"
							initial="initial"
							transition={{ duration: 0.35, ease: 'easeInOut' }}
							variants={variants}
						>
							<Image
								alt={slides[activeSlide].title}
								className={styles.image}
								src={slides[activeSlide].imageSrc}
							/>
							<Image
								alt={`${slides[activeSlide].title} icon`}
								className={styles.icon}
								src={slides[activeSlide].icon}
							/>
						</motion.div>
					</AnimatePresence>
				</div>

				<div className={styles.controlsPosition}>
					<CarouselControls
						className={styles.carouselControls}
						disableNext={activeSlide === slides.length - visibleSlides}
						disablePrev={activeSlide === 0}
						onNext={() => {
							setDirection('next');
							handleNext();
						}}
						onPrev={() => {
							setDirection('prev');
							handlePrev();
						}}
					/>

					<AnimatePresence mode="wait">
						<motion.div
							key={activeSlide}
							animate={{ y: 0, opacity: 1 }}
							className={styles.position}
							exit={{ y: -10, opacity: 0 }}
							initial={{ y: 10, opacity: 0 }}
							transition={{ duration: 0.35, ease: 'easeInOut' }}
						>
							<Heading color="secondary" size="1">
								{slides[activeSlide].title}
							</Heading>
							<Body color="secondary" size="s">
								{slides[activeSlide].subtitle}
							</Body>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</Container>
	);
};

Slider.displayName = 'Slider';

const slides = [
	{
		title: 'дизайнер',
		subtitle:
			'Креативный гений, который создает эффективные пользовательские интерфейсы, разрабатывает эстетически привлекательные дизайны и уделяет особое внимание пользовательскому опыту',
		imageSrc: '/images/slides/pic-1.webp',
		icon: '/images/slides/icons/designer.webp',
	},
	{
		title: 'маркетолог',
		subtitle:
			'Эксперт в области цифрового\nмаркетинга, который помогает команде успешно продвигать продукты и привлекать новых клиентов',
		imageSrc: '/images/slides/pic-2.webp',
		icon: '/images/slides/icons/marketing.webp',
	},
	{
		title: 'менеджер',
		subtitle:
			'Он планирует и контролирует\nпроцессы разработки, управляет ресурсами и распределяет задачи между участниками команды',
		imageSrc: '/images/slides/pic-3.webp',
		icon: '/images/slides/icons/manager.webp',
	},
	{
		title: 'программист',
		subtitle:
			'Он занимается программированием \n на различных языках и технологиях, разрабатывает архитектуру системы \ и обеспечивает надежность \n и безопасность программного продукта',
		imageSrc: '/images/slides/pic-4.webp',
		icon: '/images/slides/icons/coder.webp',
	},
];
