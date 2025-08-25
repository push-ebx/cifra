'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import { clsx } from 'clsx';

import {
	Body,
	Button,
	Container,
	Description,
	Display,
	Heading,
} from '@/components/ui';
import { Carousel } from '@/components/ui/carousel/carousel';
import { CarouselDots } from '@/components/ui/carousel-dots/carousel-dots';
import { useCarouselControls } from '@/hooks/client/use-carousel-controls';

import styles from './cifra-fro-u.module.scss';

const GifLoop = ({ src, className }: { src: string; className?: string }) => {
	const ref = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		const v = ref.current;
		if (!v) return;
		v.play().catch(() => void 0);

		const io = new IntersectionObserver(
			([e]) => (e.isIntersecting ? v.play().catch(() => void 0) : v.pause()),
			{ threshold: 0.2 }
		);
		io.observe(v);
		return () => io.disconnect();
	}, []);

	return (
		<div className={clsx(styles.media, className)}>
			<video
				// ref={ref}
				autoPlay
				controls={false}
				loop
				muted
				playsInline
				preload="metadata"
			>
				<source src={src} type="video/mp4" />
			</video>
		</div>
	);
};

export const CifraFroU = () => {
	const { activeSlide, setActiveSlide } = useCarouselControls(1);
	const router = useRouter();

	const openModal = () => {
		const params = new URLSearchParams(window.location.search);
		params.set('modal', 'true');
		router.replace(`?${params.toString()}`, { scroll: false });
	};

	const _cards = [
		...cards.map((card, index) => (
			<div key={index} className={styles.card}>
				<GifLoop className={styles.gif} src={card.gifSrc} />
				<div className={styles.cardText}>
					<Display color="violete" size="xs">
						0{index + 1}
					</Display>
					<Body size="s" weight="regular">
						{card.title}
					</Body>
				</div>
			</div>
		)),
		<Button
			key="cb"
			className={styles.circle}
			onClick={openModal}
			variant="circle"
		>
			<Description color="secondary" size="m">
				Воу...Это же я Участвовать!
			</Description>
		</Button>,
	];

	return (
		<Container
			className={styles.root}
			data-hide-fixed-buttons
			data-theme="white"
			tag="section"
		>
			<Heading className={styles.heading} color="violete" size="xl">
				Как понять, что Цифра для тебя?
			</Heading>

			<Carousel
				active={activeSlide}
				className={styles.carousel}
				onChangeAction={(index) => setActiveSlide(index)}
				onClick={(e) => e.stopPropagation()}
				options={{
					align: 'center',
					dragFree: false,
					containScroll: 'trimSnaps',
					skipSnaps: true,
					loop: false,
				}}
			>
				{_cards}
			</Carousel>
			<div className={styles.carouselDots}>
				<CarouselDots
					activeColor="#752CE8"
					activeSlide={activeSlide}
					onDotClick={setActiveSlide}
					totalSlides={_cards?.length ?? 0}
				/>
			</div>

			<div className={styles.cards}>{_cards}</div>
		</Container>
	);
};

CifraFroU.displayName = 'CifraFroU';

const cards = [
	{
		title: 'Ты действующий студент любого вуза ',
		gifSrc: '/video/student.mp4',
	},
	{
		title: 'Хочешь пополнить портфолио',
		gifSrc: '/video/2.mp4',
	},
	{
		title: 'Мечтаешь работать с крупным заказчиком',
		gifSrc: '/video/3.mp4',
	},
	{
		title: 'Хочешь зарабатывать на своих идеях',
		gifSrc: '/video/4.mp4',
	},
	{
		title: 'Целишься\nв IT тусовку',
		gifSrc: '/video/5.mp4',
	},
];
