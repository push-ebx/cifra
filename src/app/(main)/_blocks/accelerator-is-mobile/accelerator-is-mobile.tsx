import { backpack, gold, grand, ok } from '@/components/icons';
import { Body, Container, Heading } from '@/components/ui';

import styles from './accelerator-is-mobile.module.scss';

export const AcceleratorIsMobile = () => {
	return (
		<Container className={styles.root} data-theme="white" tag="section">
			<Heading className={styles.heading} color="violete" size="xl">
				Акселератор Цифра – это
			</Heading>
			<div className={styles.wrapper}>
				<div className={styles.cards}>
					{cards.map((card, index) => (
						<div key={index} className={styles.card}>
							<div className={styles.cardText}>
								<Heading size="m">{card.title}</Heading>
								<Body color="darkGray" size="s">
									{card.subtitle}
								</Body>
							</div>
							<span className={styles.icon}>{card.icon}</span>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

AcceleratorIsMobile.displayName = 'AcceleratorIsMobile';

const cards = [
	{
		title: '#Студенты',
		subtitle: 'Запуск стартапа с нуля для студентов',
		icon: backpack,
	},
	{
		title: '#Единомышленники',
		subtitle: 'IT-комьюнити, обмен опытом и сеть профессиональных контактов',
		icon: ok,
	},
	{
		title: '#Инвестиции',
		subtitle: 'Шанс привлечь инвестиции от венчурных инвесторов',
		icon: gold,
	},
	{
		title: '#Кураторы',
		subtitle: 'Ведущие предприниматели, инвесторы и преподаватели вузов России',
		icon: grand,
	},
];
