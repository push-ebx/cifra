import { Body, Container, Display, Heading, Image } from '@/components/ui';

import styles from './accelerator-is.module.scss';

export const AcceleratorIs = () => {
	return (
		<Container className={styles.root} tag="section">
			<Heading className={styles.heading} color="violete" size="xl">
				Акселератор Цифра – это
			</Heading>
			<div className={styles.cards}>
				{cards.map((card, index) => (
					<div key={index} className={styles.card}>
						<Heading size="m">{card.title}</Heading>
						<Body color="darkGray" size="s">
							{card.subtitle}
						</Body>
					</div>
				))}
			</div>
		</Container>
	);
};

AcceleratorIs.displayName = 'AcceleratorIs';

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
