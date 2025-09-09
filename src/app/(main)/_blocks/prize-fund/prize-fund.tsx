'use client';

import { RubleIcon } from '@/components/icons/ruble-icon';
import { Container, Display, GlassCard, Heading, Image } from '@/components/ui';
import { useCarouselControls } from '@/hooks/client/use-carousel-controls';

import styles from './prize-fund.module.scss';

export const PrizeFund = () => {
	const { activeSlide, setActiveSlide } = useCarouselControls(1);

	const _cards = [
		...cards.map((card, index) => (
			<GlassCard
				key={index}
				cardClassName={styles.card}
				contentClassName={styles.contentCard}
			>
				<Display color="secondary" size="xxs">
					{card.subtitle}
				</Display>
				<Display color="secondary" size="m">
					{card.title}
				</Display>
				<Image
					alt={card.subtitle}
					className={styles.image}
					src={card.imageSrc}
				/>
			</GlassCard>
		)),
		<Image
			key="maskot"
			alt="maskot"
			className={styles.maskot}
			src="/images/cards/morgen.webp"
		/>,
	];

	return (
		<Container
			className={styles.root}
			data-theme="purple"
			id="prizes"
			tag="section"
		>
			<div className={styles.contentWrapper}>
				<Heading className={styles.heading} color="secondary" size="xl">
					Призовой фонд
				</Heading>

				{/*<Carousel*/}
				{/*	active={activeSlide}*/}
				{/*	className={styles.carousel}*/}
				{/*	onChangeAction={(index) => setActiveSlide(index)}*/}
				{/*	onClick={(e) => e.stopPropagation()}*/}
				{/*	options={{*/}
				{/*		align: 'center',*/}
				{/*		dragFree: false,*/}
				{/*		containScroll: 'trimSnaps',*/}
				{/*		skipSnaps: true,*/}
				{/*	}}*/}
				{/*>*/}
				{/*	{_cards}*/}
				{/*</Carousel>*/}
				{/*<div className={styles.carouselDots}>*/}
				{/*	<CarouselDots*/}
				{/*		activeSlide={activeSlide}*/}
				{/*		onDotClick={setActiveSlide}*/}
				{/*		totalSlides={_cards?.length ?? 0}*/}
				{/*	/>*/}
				{/*</div>*/}

				<div className={styles.cards}>{_cards}</div>
			</div>
		</Container>
	);
};

PrizeFund.displayName = 'PrizeFund';

const cards = [
	{
		title: '1 место',
		subtitle: 'поездка в стамбул всей командой',
		imageSrc: '/images/cards/stambul.webp',
	},
	{
		title: 'в крыму',
		subtitle: 'каникулы \nкомандой',
		imageSrc: '/images/cards/krim.webp',
	},
	{
		title: (
			<>
				4 млн <RubleIcon />
			</>
		),
		subtitle: 'Помощь в написании грантовой заявки на',
		imageSrc: '/images/cards/offer.webp',
	},
	{
		title: 'IPR',
		subtitle: 'регистрация интеллектуальных прав',
		imageSrc: '/images/cards/brain.webp',
	},
	{
		title: 'подарки',
		subtitle: 'партнерские',
		imageSrc: '/images/cards/hand.webp',
	},
];
