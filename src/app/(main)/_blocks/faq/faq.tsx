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
		<Container
			className={styles.root}
			data-theme="white"
			id="faq"
			tag="section"
		>
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
			'Единственное условие — быть студентом любого вуза России. Форма\n' +
			'обучения, курс, специальность — не имеют значения.',
	},
	{
		question: 'У меня есть команда, можно с ней участвовать?',
		answer: 'Да, можно, но каждый участник регистрируется отдельно.',
	},
	{
		question: 'Как будет проходить акселератор?',
		answer: (
			<span>
				{'После регистрации с тобой свяжется модератор. Он подтвердит твоё участие.\n' +
					'После этого ожидай старт акселератора. Если ты с командой, то вы сразу\n' +
					'можете выбрать кейс и приступить к решению. Если ты один, мы подберём\n' +
					'тебе команду. Во время акселератора пройдут мастер-классы и мероприятия.\n' +
					'Итогом программы станет выступление перед инвесторами и экспертами.\n\n'}
				<a href="#timeline">смотреть таймлайн</a>
			</span>
		),
	},
	{
		question: 'Сколько времени в день у меня займет акселератор?',
		answer: (
			<span>
				{
					'Пару минут или часов — всё зависит от проекта и твоей роли в команде.\n\n'
				}
				<a href="#timeline">смотреть таймлайн</a>
			</span>
		),
	},
	// {
	// 	question: 'Что делать, если у меня нет идей?',
	// 	answer:
	// 		'Внутри 3 треков будут кейсы от партнеров, которые облегчат генерацию идей. Кроме этого, будут образовательные ивенты, где расскажут, как создать свой продукт с нуля',
	// },
	{
		question:
			'Не хочу выполнять кейсы партнёров.\nУ меня своя идея. Что делать?',
		answer: (
			<span>
				{'Команда может разработать свою собственную идею.\n\n'}
				<a href="#tracks">смотреть треки</a>
			</span>
		),
	},
	{
		question: 'Призы получит только одна команда?',
		answer: (
			<span>
				{
					'Каждый приз предназначен для участников команд, занявших призовые места.\n\n'
				}
				<a href="#prizes">смотреть призы</a>
			</span>
		),
	},
	{
		question: 'Что такое гибридный формат?',
		answer:
			'Мероприятия проходят онлайн, но последнее финальное выступление\n' +
			'состоится очно. Город проведения сообщим позже.',
	},
	{
		question: 'Регистрация пройдена, что дальше?',
		answer: 'С тобой свяжется модератор. Ожидание может занять до 3 дней.',
	},
	{
		question: 'Какое ПО необходимо для участия?',
		answer: (
			<span>
				{
					'Коммуникация будет в онлайн-формате. Подойдет любой способ подключения.\n\n'
				}
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
					'Переходи в наши соцсети и оставляй вопрос там. Мы оперативно ответим.\n\n'
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
