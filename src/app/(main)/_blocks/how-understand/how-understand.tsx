import { Body, Container, Display, Heading, Image } from '@/components/ui';

import styles from './how-understand.module.scss';

export const HowUnderstand = () => {
	return (
		<Container className={styles.root} tag="section">
			<Heading className={styles.heading} color="violete" size="xl">
				Акселератор Цифра – это
			</Heading>
			<div className={styles.cards}>
				{cards.map((card, index) => (
					<div key={index} className={styles.card}>
						<Heading size="m">{card.title}</Heading>
						<Body color="darkGray" size="s" weight="regular">
							{card.subtitle}
						</Body>
					</div>
				))}
			</div>
		</Container>
	);
};

HowUnderstand.displayName = 'HowUnderstand';

const cards = [
	{
		title: 'Проект для студентов',
		subtitle:
			'Способность строить технологичный стартап с нуля и находить инвесторов',
	},
	{
		title: 'Проект для студентов',
		subtitle:
			'Способность строить технологичный стартап с нуля и находить инвесторов',
	},
	{
		title: 'Проект для студентов',
		subtitle:
			'Способность строить технологичный стартап с нуля и находить инвесторов',
	},
	{
		title: 'Проект для студентов',
		subtitle:
			'Способность строить технологичный стартап с нуля и находить инвесторов',
	},
];
