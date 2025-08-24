import { Body, Container, Description, Heading } from '@/components/ui';

import styles from './timeline.module.scss';

export const Timeline = () => {
	// const trackLineTitles = ['Первый трек', 'Второй трек'];

	return (
		<Container
			className={styles.root}
			data-theme="white"
			id="timeline"
			tag="section"
		>
			<Heading className={styles.heading} color="violete" size="xl">
				Таймлайн
			</Heading>
			<div className={styles.trackLines}>
				{trackLines.map((trackLine, i) => (
					<div key={i} className={styles.trackLineWrapper}>
						{/*<Heading className={styles.trackLineTitle} color="violete" size="m">*/}
						{/*	{trackLineTitles[i]}*/}
						{/*</Heading>*/}
						<div className={styles.trackLine}>
							{trackLine.map((track, j) => (
								<div key={`${i}${j}`} className={styles.track}>
									<div className={styles.date}>
										<Description size="xl">{track.day}</Description>
										<Description color="gray" size="xxs">
											{track.month}
										</Description>
									</div>
									<Body size="s">{track.title}</Body>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</Container>
	);
};

Timeline.displayName = 'Timeline';

const trackLines = [
	[
		{ day: '22', month: 'сентября', title: 'Завершение\nрегистрации' },
		{ day: '25', month: 'сентября', title: 'Открытие\nпрограммы' },
		{ day: '27', month: 'сентября', title: 'Обучающие\nблоки и трекинг' },
		{ day: '31', month: 'октября', title: 'Хакатон' },
		{ day: '24', month: 'ноября', title: 'Пицца питч' },
		{ day: '06', month: 'декабря', title: 'Демодей' },
		{ day: '12', month: 'декабря', title: 'Пост-поддержка' },
	],
	// [
	// 	{ day: '22', month: 'августа', title: 'Завершение\nрегистрации' },
	// 	{ day: '27', month: 'сентября', title: 'Открытие\nпрограммы' },
	// 	{ day: '01', month: 'октября', title: 'Обучающие\nблоки и трекинг' },
	// 	{ day: '08', month: 'ноября', title: 'Пицца питч' },
	// 	{ day: '29', month: 'ноября', title: 'Демодей' },
	// 	{ day: '26', month: 'декабря', title: 'Хакатон' },
	// 	{ day: '06', month: 'января', title: 'Пост-поддержка' },
	// ],
];
