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
		<Container className={styles.root} data-theme="white" tag="section">
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
							weight="regular"
						>
							{item.question}
						</Body>
						<Expandable
							duration={500}
							isExpanded={index === indexExpanded}
							className={clsx(
								styles.expandable,
								index === indexExpanded && styles.isExpanded
							)}
						>
							<Body size="s">{item.answer}</Body>
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
		answer:
			'Не важно, какая форма обучения, курс и твоя специальность. Единственное условие — быть обучающимся вуза',
	},
	{
		question: 'У меня есть команда, можно с ней участвовать?',
		answer:
			'Да, можно, каждому участнику нужно зарегистрироваться. Когда будем формировать группы, сможете собраться своим составом. Важно, в команде может быть от 3 - 5 человек. Лайфак: берите больше программистов',
	},
	{
		question: 'Как будет проходить акселератор?',
		answer: (
			<span>
				{
					'До 22 сентября идет регистрация. После нее участники знакомятся с треками и формируют команды. Внутри направлений пройдут образовательный блок, генерация идей и первые питчинги. У команды появится модератор, тьютор, трекер и наставник, которые помогут довести проект до ума. На хакатоне вы разработаете первый прототип.\nВ декабре будут финальный питчинг и выставка проектов\n\n'
				}
				<a href="#timeline">смотреть таймлайн</a>
			</span>
		),
	},
	{
		question: 'Сколько времени в день у меня займет акселератор?',
		answer: (
			<span>
				{
					'Впереди 3 месяца работы — не пугайся, хватит пары часов в день. Хакатон идет 48 часов подряд\n\n'
				}
				<a href="#timeline">смотреть таймлайн</a>
			</span>
		),
	},
	{
		question: 'Что делать, если у меня нет идей?',
		answer:
			'Внутри 3 треков будут кейсы от партнеров, которые облегчат генерацию идей. Кроме этого, будут образовательные ивенты, где расскажут, как создать свой продукт с нуля',
	},
	{
		question:
			'Не хочу выполнять кейсы партнёров.\nУ меня своя идея. Что делать?',
		answer: (
			<span>
				{
					'Команда может разработать свою идею в рамках одного из трех треков\n\n'
				}
				<a href="#tracks">смотреть треки</a>
			</span>
		),
	},
	{
		question: 'Выиграет только одна команда?',
		answer: (
			<span>
				{
					'Нет. Призы получат команды в каждом из направлений. Плюс тебя ждут подарки от партнеров. Победители поедут в Стартап-тур в Стамбул, а лучшие проекты получат возможность подать заявки на привлечение посевных инвестиций от 3-х миллионов рублей\n\n'
				}
				<a href="#prizes">смотреть призы</a>
			</span>
		),
	},
	{
		question: 'Что такое гибридный формат?',
		answer:
			'Мероприятия проходят онлайн. Удобно! А финальное мероприятие пройдет в г. Ярославль',
	},
	{
		question: 'Регистрация пройдена, что дальше?',
		answer:
			'После 24 сентября загляни в почту — там будет ссылка в чат, где уже собираются все участники',
	},
	{
		question: 'Какое ПО необходимо для участия?',
		answer: (
			<span>
				{'Минимальный набор для коммуникаций — Telegram, Zoom, Discord.\n\n'}
				<a
					href="https://t.me"
					style={{ marginRight: '0.5rem' }}
					target="_blank"
				>
					TG
				</a>
				<a
					href="https://zoom.us"
					style={{ marginRight: '0.5rem' }}
					target="_blank"
				>
					Zoom
				</a>
				<a href="https://discord.com" target="_blank">
					Discord
				</a>
			</span>
		),
	},
	{
		question: 'Нет ответа на мой вопрос',
		answer: (
			<span>
				{
					'Свяжись с нами по почте или напиши вопрос в сообщения группы ВКонтакте\n\n'
				}
				<a
					href="mailto:cifrastartup.online@gmail.com"
					style={{ display: 'inline', marginRight: '0.5rem' }}
				>
					cifrastartup.online@gmail.com
				</a>
				<a href="https://vk.com" target="_blank">
					ВК
				</a>
			</span>
		),
	},
];
