'use client';

import {
	Body,
	Button,
	Container,
	Description,
	Display,
	Heading,
} from '@/components/ui';
import { Carousel } from '@/components/ui/carousel/carousel';
import { useCarouselControls } from '@/hooks/client/use-carousel-controls';

import styles from './cifra-fro-u.module.scss';

export const CifraFroU = () => {
	const { activeSlide, setActiveSlide } = useCarouselControls(1);

	const _cards = [
		...cards.map((card, index) => (
			<div key={index} className={styles.card}>
				<Display color="violete" size="xs">
					0{index + 1}
				</Display>
				<Body size="s" weight="regular">
					{card.title}
				</Body>
			</div>
		)),
		<Button key="cb" className={styles.circle} variant="circle">
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
				}}
			>
				{_cards}
			</Carousel>

			<div className={styles.cards}>{_cards}</div>
		</Container>
	);
};

CifraFroU.displayName = 'CifraFroU';

const cards = [
	{
		title: 'Ты действующий студент любого вуза ',
	},
	{
		title: 'Хочешь пополнить портфолио',
	},
	{
		title: 'Мечтаешь работать с крупным заказчиком',
	},
	{
		title: 'Хочешь зарабатывать на своих идеях',
	},
	{
		title: 'Целишься\nв IT тусовку',
	},
];
