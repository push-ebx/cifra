'use client';

import { useEffect, useState } from 'react';

import { Heading, Image } from '@/components/ui';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';

import styles from './running-line.module.scss';

const srcImages = [
	'/images/gallery/1.webp',
	'/images/gallery/2.webp',
	'/images/gallery/3.webp',
];

type Props = { images: string[] };

export const RunningLine = ({ images }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const bp = useBreakpoint();

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		const tick = () => {
			setCurrentIndex((prev) => (prev + 1) % images.length);
			timeout = setTimeout(tick, 500);
		};

		timeout = setTimeout(tick, 500);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<section className={styles.root} data-theme="purple">
			<div className={styles.wrapper}>
				<Heading className={styles.line} color="violete" size="xl">
					{bp === 'mobile'
						? 'как это было'
						: 'как это было как это было как это было как это было'}
				</Heading>
				<div className={styles.gallery}>
					<Image alt="img" src={images[currentIndex]} />
				</div>
			</div>
		</section>
	);
};

RunningLine.displayName = 'RunningLine';
