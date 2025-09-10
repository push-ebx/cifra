'use client';

import { clsx } from 'clsx';

import { backpack, gold, grand, ok } from '@/components/icons';
import { Body, Container, Description, Heading } from '@/components/ui';
import { Carousel } from '@/components/ui/carousel/carousel';
import { CarouselDots } from '@/components/ui/carousel-dots/carousel-dots';
import { useCarouselControls } from '@/hooks/client/use-carousel-controls';

import styles from './accelerator-is-mobile.module.scss';

export const AcceleratorIsMobile = () => {
	const { activeSlide, setActiveSlide } = useCarouselControls(1);

	return (
		<Container className={styles.root} data-theme="white" tag="section">
			<Heading className={styles.heading} color="violete" size="xl">
				Акселератор Цифра – это
			</Heading>
			<div className={styles.wrapper}>
				<div className={styles.cards}>
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
						{cards.map((card, index) => (
							<div
								key={index}
								className={clsx(styles.card, styles[`card-${index + 1}`])}
							>
								<Description className={styles.index}>0{index + 1}</Description>
								<div className={styles.cardText}>
									<Heading className={styles.title} size="m">
										{card.title}
									</Heading>
									<Body color="darkGray" size="s">
										{card.subtitle}
									</Body>
								</div>
								{/*<span className={styles.icon}>{card.icon}</span>*/}
							</div>
						))}
					</Carousel>
					<div className={styles.carouselDots}>
						<CarouselDots
							activeColor="#752CE8"
							activeSlide={activeSlide}
							onDotClick={setActiveSlide}
							totalSlides={cards?.length ?? 0}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

AcceleratorIsMobile.displayName = 'AcceleratorIsMobile';

const cards = [
	{
		title: 'Студенты',
		subtitle: 'Запуск стартапа с нуля для студентов',
		icon: backpack,
	},
	{
		title: 'Единомышленники',
		subtitle: 'IT-комьюнити, обмен опытом и сеть профессиональных контактов',
		icon: ok,
	},
	{
		title: 'Инвестиции',
		subtitle: 'Шанс привлечь инвестиции от венчурных инвесторов',
		icon: gold,
	},
	{
		title: 'Кураторы',
		subtitle: 'Ведущие предприниматели, инвесторы и преподаватели вузов России',
		icon: grand,
	},
];
