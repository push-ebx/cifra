'use client';

import { useEffect, useState } from 'react';

import { RotateIcon } from '@/components/icons';
import { Display, Image } from '@/components/ui';
import { PlayButton } from '@/components/widgets';

import styles from './video-section.module.scss';

export const VideoSection = () => {
	const [isPortrait, setIsPortrait] = useState(false);

	useEffect(() => {
		const mql = window.matchMedia('(orientation: portrait)');
		const handler = (e: MediaQueryListEvent | MediaQueryList) => {
			setIsPortrait(e.matches);
		};

		handler(mql);

		mql.addEventListener('change', handler);
		return () => mql.removeEventListener('change', handler);
	}, []);

	return (
		<div className={styles.root}>
			<div className={styles.previewContainer}>
				{isPortrait && window.innerWidth <= 768 && (
					<div className={styles.rotateButton}>
						<RotateIcon fill="white" />
						<Display color="secondary" size="xs">
							поверни чтобы посмотреть
						</Display>
					</div>
				)}

				{(!isPortrait || window.innerWidth > 768) && (
					<div className={styles.playButton}>
						<PlayButton />
						<Display color="secondary" size="xs">
							жми плэээй
						</Display>
					</div>
				)}

				<Image
					alt="preview"
					className={styles.preview}
					loading="lazy"
					src="/images/video-preiview.webp"
				/>
			</div>
		</div>
	);
};

VideoSection.displayName = 'VideoSection';
