'use client';

import { clsx } from 'clsx';

import { Body, Container, Display, Heading } from '@/components/ui';
import { useScrollIndexV2 } from '@/hooks/client/use-scroll-index-v2';

import styles from './what-do-u-get.module.scss';

export const WhatDoUGet = () => {
	const { index: active, rootRef } = useScrollIndexV2(cards.length, {
		pivotRatio: 0.35,
		startFromZero: true,
	});

	const stickyActive = Math.max(0, Math.min(active ?? 0, cards.length - 1));

	return (
		<Container
			ref={rootRef}
			className={styles.root}
			data-theme="white"
			tag="section"
		>
			<Heading className={styles.heading} color="violete" size="xl">
				Что получишь?
			</Heading>
			<div className={styles.cards}>
				{cards.map((card, index) => (
					<div
						key={index}
						className={clsx(styles.cardWrapper)}
						data-index={index + 1}
						data-scroll-item={true}
					>
						<div
							className={clsx(
								styles.indexWrapper,
								stickyActive === index && styles.active
							)}
						>
							<Display color="secondary" size="xs">
								{index + 1}
							</Display>
						</div>
						<div className={styles.card}>
							<Heading size="m">{card.title}</Heading>
							<Body
								className={styles[`subtitle-${index}`]}
								color="primary"
								size="s"
							>
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
