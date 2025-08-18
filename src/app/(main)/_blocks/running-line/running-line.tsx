'use client';

import { useEffect, useState } from 'react';

import { Heading, Image } from '@/components/ui';

import styles from './running-line.module.scss';

const srcImages = [
	'/images/gallery/1.webp',
	'/images/gallery/2.webp',
	'/images/gallery/3.webp',
];

export const RunningLine = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % srcImages.length);
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className={styles.root}>
			<div className={styles.wrapper}>
				<Heading className={styles.line} color="violete" size="xl">
					как это было как это было как это было как это было
				</Heading>
				<div className={styles.gallery}>
					<Image alt="img" src={srcImages[currentIndex]} />
				</div>
			</div>
		</section>
	);
};

RunningLine.displayName = 'RunningLine';
