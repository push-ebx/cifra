'use client';

import { useEffect, useRef, useState } from 'react';

import { clsx } from 'clsx';

import { Description, Heading } from '@/components/ui';
import { useScrollLock } from '@/hooks/client';

import styles from './app-loader.module.scss';

type AppLoaderProps = {
	onLoaded?: () => void;
};

const imageUrls = [
	'/images/cube.webp',
	'/images/slides/pic-1.webp',
	'/images/slides/icons/designer.webp',
	'/images/slides/pic-2.webp',
	'/images/slides/icons/marketing.webp',
	'/images/slides/pic-3.webp',
	'/images/slides/icons/manager.webp',
	'/images/slides/pic-4.webp',
	'/images/slides/icons/coder.webp',
];

export const AppLoader = ({ onLoaded }: AppLoaderProps) => {
	const [isVisible, setIsVisible] = useState(true);
	const [isScriptsLoaded, setIsScriptsLoaded] = useState(false);
	const [isImagesLoaded, setIsImagesLoaded] = useState(false);
	const [isFading, setIsFading] = useState(false);

	const rootRef = useRef<HTMLDivElement | null>(null);
	useScrollLock(isVisible, 0, 'fixed');

	useEffect(() => {
		const handleLoad = () => setIsScriptsLoaded(true);

		if (document.readyState === 'complete') {
			setIsScriptsLoaded(true);
		} else {
			window.addEventListener('load', handleLoad, { once: true });
		}
	}, []);

	const loadImages = (urls: string[]) => {
		return Promise.all(
			urls.map(
				(src) =>
					new Promise((resolve) => {
						const img = new Image();
						Object.assign(img, { src, onload: resolve, onerror: resolve });
					})
			)
		);
	};

	useEffect(() => {
		if (!isScriptsLoaded) return;

		loadImages(imageUrls).then(() => {
			setIsImagesLoaded(true);
		});
	}, [isScriptsLoaded]);

	useEffect(() => {
		if (!isImagesLoaded) return;
		const element = rootRef.current;
		if (!element) return;

		const progressText = element.querySelector(`.${styles.progressText}`);
		if (!progressText) return;

		const handleAnimationEnd = () => {
			setIsFading(true);
		};

		progressText.addEventListener('animationend', handleAnimationEnd);
		return () => {
			progressText.removeEventListener('animationend', handleAnimationEnd);
		};
	}, [isImagesLoaded]);

	useEffect(() => {
		if (!isFading) return;
		const element = rootRef.current;
		if (!element) return;

		const handleTransitionEnd = () => {
			document.documentElement.setAttribute('data-loaded', 'true');
			setIsVisible(false);
			onLoaded?.();
		};

		element.addEventListener('transitionend', handleTransitionEnd);
		return () => {
			element.removeEventListener('transitionend', handleTransitionEnd);
		};
	}, [isFading, onLoaded]);

	if (!isVisible) return null;

	return (
		<div
			ref={rootRef}
			className={clsx(
				styles.root,
				isImagesLoaded && styles.imagesLoaded,
				isFading && styles.fadeOut
			)}
		>
			<Heading
				className={styles.progressText}
				color={'darkViolete'}
				weight={'extraBold'}
			/>
			<Description className={styles.description} size={'xl'}>
				главное не волновайся, еще чуть чуть...
			</Description>
		</div>
	);
};

AppLoader.displayName = 'AppLoader';
