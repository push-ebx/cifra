'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import type { PanInfo } from 'motion/react';
import { AnimatePresence, motion } from 'motion/react';

import { Body, Button, Container, Heading, Image } from '@/components/ui';
import { CarouselControls } from '@/components/ui/carousel-controls/carousel-controls';
import { FixedButtons } from '@/components/widgets/fixed-buttons/fixed-buttons';
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
						rotate: dir === 'next' ? 5 : -5,
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

	const router = useRouter();

	const openModal = () => {
		const params = new URLSearchParams(window.location.search);
		params.set('modal', 'true');
		router.replace(`?${params.toString()}`, { scroll: false });
	};

	const SWIPE_CONFIDENCE = 800; // чем больше — тем «жёстче» порог
	const swipePower = (offset: number, velocity: number) =>
		Math.abs(offset) * Math.abs(velocity);

	const onDragEnd = (_: unknown, info: PanInfo) => {
		const { offset, velocity } = info;
		const power = swipePower(offset.x, velocity.x);

		if (power > SWIPE_CONFIDENCE) {
			if (offset.x < 0) {
				setDirection('prev');
				handlePrev();
			} else {
				setDirection('next');
				handleNext();
			}
		}
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
							drag="x"
							dragConstraints={{ left: 0, right: 0 }} // «якорим» в исходной точке
							dragElastic={0.25} // немного «тянется»
							dragMomentum={false} // без инерции
							exit="exit"
							initial="initial"
							onDragEnd={onDragEnd}
							style={{ touchAction: 'pan-y', cursor: 'grab' }}
							transition={{ duration: 0.35, ease: 'easeInOut' }}
							variants={variants}
							whileDrag={{ cursor: 'grabbing' }}
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
						disableNext={false}
						disablePrev={false}
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

			<FixedButtons className={styles.fixedButtons} type="secondary" />
		</Container>
	);
};

Slider.displayName = 'Slider';

const slides = [
	{
		title: 'дизайнер',
		subtitle:
			'Креативный гений, который создает эффективные пользовательские интерфейсы, разрабатывает эстетически привлекательные дизайны и уделяет особое внимание пользовательскому опыту',
		imageSrc: '/images/slides/pic-1.webp',
		icon: '/images/slides/icons/designer.webp',
	},
	{
		title: 'маркетолог',
		subtitle:
			'Эксперт в области цифрового\nмаркетинга, который помогает команде успешно продвигать продукты и привлекать новых клиентов',
		imageSrc: '/images/slides/pic-2.webp',
		icon: '/images/slides/icons/marketing.webp',
	},
	{
		title: 'менеджер',
		subtitle:
			'Он планирует и контролирует\nпроцессы разработки, управляет ресурсами и распределяет задачи между участниками команды',
		imageSrc: '/images/slides/pic-3.webp',
		icon: '/images/slides/icons/manager.webp',
	},
	{
		title: 'программист',
		subtitle:
			'Он занимается программированием \n на различных языках и технологиях, разрабатывает архитектуру системы и обеспечивает надежность \n и безопасность программного продукта',
		imageSrc: '/images/slides/pic-4.webp',
		icon: '/images/slides/icons/coder.webp',
	},
];
