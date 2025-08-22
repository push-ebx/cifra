import { RubleIcon } from '@/components/icons/ruble-icon';
import { Container, Display, GlassCard, Heading, Image } from '@/components/ui';

import styles from './prize-fund.module.scss';

export const PrizeFund = () => {
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
				<div className={styles.cards}>
					{cards.map((card, index) => (
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
					))}
				</div>
			</div>
		</Container>
	);
};

PrizeFund.displayName = 'PrizeFund';

const cards = [
	{
		title: '1 место',
		subtitle: 'поездка в стамбул всей командой',
		imageSrc: '/images/cards/star.webp',
	},
	{
		title: 'в Казань',
		subtitle: 'IT-путешествие',
		imageSrc: '/images/cards/plane.webp',
	},
	{
		title: (
			<>
				4 млн <RubleIcon />
			</>
		),
		subtitle: 'Помощь в написании грантовой заявки на',
		imageSrc: '/images/cards/ruble.webp',
	},
	{
		title: (
			<>
				2 млн <RubleIcon />
			</>
		),
		subtitle: 'серверы для твоего стартапа на ',
		imageSrc: '/images/cards/server.webp',
	},
	{
		title: 'fast track',
		subtitle: 'привлечение посевных инвестиций через',
		imageSrc: '/images/cards/cube.webp',
	},
	{
		title: 'IPR',
		subtitle: 'регистрация интеллектуальных прав',
		imageSrc: '/images/cards/ipr.webp',
	},
];
