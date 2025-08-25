'use client';

import { useRef, useState } from 'react';

import clsx from 'clsx';

import { head, rock, tetris } from '@/components/icons';
import { Body, Container, Heading, Image } from '@/components/ui';

import styles from './tracks.module.scss';

const tracksData = [
	{
		title: 'Образование',
		description:
			'Используй цифровые технологии в образовании. Улучши процесс обучения в школе, вузе или компании',
		imageSrc: '/images/tracks/track-1.webp',
		icon: head,
	},
	{
		title: 'Креативные индустрии',
		description:
			'Представь в цифровом формате современное творчество и внедри его в реальность',
		imageSrc: '/images/tracks/track-2.webp',
		icon: rock,
	},
	{
		title: 'Промышленность',
		description:
			'Оптимизируй процессы с искусственным интеллектом в промышленной индустрии',
		imageSrc: '/images/tracks/track-3.webp',
		icon: tetris,
	},
];

export const Tracks = () => {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const [active, setActive] = useState(0);

	return (
		<Container
			ref={rootRef}
			className={styles.root}
			data-theme="white"
			id="tracks"
			tag="section"
		>
			<div className={styles.content}>
				<div>
					<Heading className={styles.heading} color="violete" size="xl">
						треки
					</Heading>
					<Body className={styles.description} size="l">
						Вы сами с командой определяете направление: можно прийти со своим
						проектом или выбрать кейс от партнеров
					</Body>

					{/* Лента карточек */}
					<div aria-label="Треки" className={styles.tracks} role="tablist">
						{tracksData.map((track, index) => (
							<div
								key={index}
								aria-selected={active === index}
								onClick={() => setActive(index)}
								role="tab"
								tabIndex={0}
								className={clsx(
									styles.card,
									active === index && styles.cardActive
								)}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										setActive(index);
									}
									if (e.key === 'ArrowLeft')
										setActive((p) => (p ? p - 1 : tracksData.length - 1));
									if (e.key === 'ArrowRight')
										setActive((p) => (p === tracksData.length - 1 ? 0 : p + 1));
								}}
							>
								<div aria-hidden className={styles.vBlock}>
									<span className={styles.vIconDesktop}>{track.icon}</span>
									<Heading
										className={styles.vTitle}
										size={'m'}
										weight={'regular'}
									>
										{track.title}
									</Heading>
									<span className={styles.vIcon}>{track.icon}</span>
								</div>

								<div className={styles.cardContent}>
									<div className={styles.cardContentInner}>
										<Image alt={'track'} src={track.imageSrc} />
										<div className={styles.cardText}>
											<Heading color={'secondary'} size="m">
												{track.title}
											</Heading>
											<Body color="secondary" size="s">
												{track.description}
											</Body>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Container>
	);
};

Tracks.displayName = 'Tracks';
