import { Body, Container, Display, Heading, Image } from '@/components/ui';

import styles from './what-do-u-get.module.scss';

export const WhatDoUGet = () => {
	return (
		<Container className={styles.root} data-theme="white" tag="section">
			<Heading className={styles.heading} color="violete" size="xl">
				Что получишь?
			</Heading>
			<div className={styles.cards}>
				{cards.map((card, index) => (
					<div key={index} className={styles.cardWrapper}>
						<div className={styles.indexWrapper}>
							<Display color="secondary" size="xs">
								{index + 1}
							</Display>
						</div>
						<div className={styles.card}>
							<Heading size="m">{card.title}</Heading>
							<Body color="primary" size="s">
								{card.subtitle}
							</Body>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
};

WhatDoUGet.displayName = 'WhatDoUGet';

const cards = [
	{
		title: 'Образование',
		subtitle:
			'Пройдешь мастер-классы, консультации с топовыми экспертами из центров для стартапов России. Завершишь программу «Цифры» — получишь документ об образовании гособразца',
	},
	{
		title: 'Интеллектуальная собственность',
		subtitle:
			'Создашь собственный проект — права на него будут принадлежать тебе. Добавишь его в портфолио, кто знает, вдруг компания возьмет его в разработку',
	},
	{
		title: 'Трудоустройство',
		subtitle:
			'Используешь шанс попасть на стажировку или на работу в крупные компании.  Наставники и эксперты — твои потенциальные работодатели',
	},
	{
		title: 'Коммуникация',
		subtitle:
			'Поработаешь в команде и наладишь контакты по всей стране.\nДадим наставника трекера и тьютора — они помогут эффективно простроить время и выиграть',
	},
];
