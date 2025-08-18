import { Body, Container, Display, Heading, Image } from '@/components/ui';

import styles from './accelerator-is.module.scss';

export const AcceleratorIs = () => {
	return (
		<Container className={styles.root} tag="section">
			<Heading className={styles.heading} color="violete" size="xl">
				Акселератор Цифра – это
			</Heading>
			<div className={styles.wrapper}>
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
			</div>
		</Container>
	);
};

AcceleratorIs.displayName = 'AcceleratorIs';

const cards = [
	{
		title: 'Проект для\nстудентов',
		subtitle:
			'Способность строить технологичный стартап с нуля и находить инвесторов',
	},
	{
		title: 'Сообщество\nединомышленников',
		subtitle:
			'Комьюнити единомышленников, обмен опытом и сеть профессиональных контактов',
	},
	{
		title: 'Инвестиции для\nваших проектов',
		subtitle:
			'Шанс привлечь инвестиции от венчурных инвесторов для вашего проекта',
	},
	{
		title: 'Личные\nкураторы',
		subtitle:
			'Менторство от ведущих предпринимателей, инвесторов и преподавателей ВУЗов России',
	},
];
