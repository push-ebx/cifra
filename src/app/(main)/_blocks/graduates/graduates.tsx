'use client';

import { useState } from 'react';

import { Body, Container, Heading, Image } from '@/components/ui';
import { PlayButton } from '@/components/widgets';

import styles from './graduates.module.scss';

export const Graduates = () => {
	const [activeVideo, setActiveVideo] = useState<number | null>(null);

	return (
		<Container className={styles.root} data-theme="white" tag="section">
			<Heading className={styles.heading} color="violete" size="xl">
				Выпускники
			</Heading>
			<div className={styles.cards}>
				{cards.map((card, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.videoContainer}>
							{activeVideo === index ? (
								<video
									autoPlay={true}
									className={styles.video}
									controls={false}
									src={card.srcVideo}
								/>
							) : (
								<div
									className={styles.preview}
									onClick={() => setActiveVideo(index)}
								>
									<Image alt="preview" loading="lazy" src={card.srcImage} />
									<PlayButton className={styles.playButton} />
								</div>
							)}
						</div>
						<Heading size="m">{card.name}</Heading>
						<Body color="darkGray" size="s">
							{card.subtitle}
						</Body>
					</div>
				))}
			</div>
		</Container>
	);
};

Graduates.displayName = 'Graduates';

const cards = [
	{
		name: 'Манукян Ваник',
		subtitle:
			'Основал Стартап-студию, занял 2 место в всероссийском конкурсе технологических предпринимателей в Сколково',
		srcVideo: '/video/manukyan.mp4',
		srcImage: '/images/graduates/video-preiview.webp',
	},
	{
		name: 'Манукян Ваник',
		subtitle:
			'Основал Стартап-студию, занял 2 место в всероссийском конкурсе технологических предпринимателей в Сколково',
		srcVideo: '/video/manukyan.mp4',
		srcImage: '/images/graduates/video-preiview.webp',
	},
	{
		name: 'Манукян Ваник',
		subtitle:
			'Основал Стартап-студию, занял 2 место в всероссийском конкурсе технологических предпринимателей в Сколково',
		srcVideo: '/video/manukyan.mp4',
		srcImage: '/images/graduates/video-preiview.webp',
	},
	{
		name: 'Манукян Ваник',
		subtitle:
			'Основал Стартап-студию, занял 2 место в всероссийском конкурсе технологических предпринимателей в Сколково',
		srcVideo: '/video/manukyan.mp4',
		srcImage: '/images/graduates/video-preiview.webp',
	},
	{
		name: 'Манукян Ваник',
		subtitle:
			'Основал Стартап-студию, занял 2 место в всероссийском конкурсе технологических предпринимателей в Сколково',
		srcVideo: '/video/manukyan.mp4',
		srcImage: '/images/graduates/video-preiview.webp',
	},
	{
		name: 'Манукян Ваник',
		subtitle:
			'Основал Стартап-студию, занял 2 место в всероссийском конкурсе технологических предпринимателей в Сколково',
		srcVideo: '/video/manukyan.mp4',
		srcImage: '/images/graduates/video-preiview.webp',
	},
];
