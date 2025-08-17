'use client';

import { useState } from 'react';

import clsx from 'clsx';

import { CrossIcon } from '@/components/icons/cross-icon';
import { Body, Container, Heading } from '@/components/ui';
import { Expandable } from '@/components/wrappers';

import styles from './faq.module.scss';

export const Faq = () => {
	const [indexExpanded, setIndexExpanded] = useState<number | null>(null);

	const handleClick = (index: number) => {
		if (index === indexExpanded) {
			setIndexExpanded(null);
			return;
		}
		setIndexExpanded(index);
	};

	return (
		<Container className={styles.root} tag="section">
			<div className={styles.headingWrapper}>
				<Heading className={styles.heading} color="violete" size="xl">
					Ответы на вопросы
				</Heading>
			</div>
			<div className={styles.faq}>
				{faqData.map((item, index) => (
					<div
						key={index}
						className={styles.faqItem}
						onClick={() => handleClick(index)}
					>
						<Body
							className={styles.question}
							color={index === indexExpanded ? 'gray' : 'primary'}
							size="s"
						>
							{item.question}
						</Body>
						<Expandable
							className={styles.expandable}
							duration={300}
							isExpanded={index === indexExpanded}
						>
							{item.answer}
						</Expandable>
						<CrossIcon
							className={clsx(
								styles.cross,
								index === indexExpanded && styles.isExpanded
							)}
						/>
					</div>
				))}
			</div>
		</Container>
	);
};

Faq.displayName = 'Faq';

const faqData = [
	{
		question: 'Кто может участвовать?',
		answer: (
			<p>
				Любой желающий, независимо от опыта и специализации. У нас есть разные
				треки и задачи для всех.
			</p>
		),
	},
	{
		question: 'У меня есть команда, можно с ней участвовать?',
		answer: (
			<p>Конечно! Вы можете участвовать как в команде, так и индивидуально.</p>
		),
	},
	{
		question: 'Как будет проходить акселератор?',
		answer: (
			<p>
				Акселератор проходит в несколько этапов: отбор, обучение, разработка
				проекта и финальная презентация.
			</p>
		),
	},
	{
		question: 'Сколько времени в день у меня займет акселератор?',
		answer: (
			<>
				<p>Впереди 3 месяца работы — не пугайся, хватит пары часов в день.</p>
				<p>Хакатон идет 48 часов подряд</p>
				<a className={styles.link} href="#">
					смотреть таймлайн
				</a>
			</>
		),
	},
];
