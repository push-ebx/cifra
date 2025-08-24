'use client';

import { useEffect, useRef, useState } from 'react';

import { RotateIcon } from '@/components/icons';
import { Display, Image } from '@/components/ui';
import { PlayButton } from '@/components/widgets';

import styles from './video-section.module.scss';

export const VideoSection = () => {
	const [isPortrait, setIsPortrait] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [isPlayingFlash, setIsPlayingFlash] = useState(false);

	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		const mql = window.matchMedia('(orientation: portrait)');
		const handler = (e: MediaQueryListEvent | MediaQueryList) => {
			setIsPortrait('matches' in e ? e.matches : (e as MediaQueryList).matches);
		};
		handler(mql);
		mql.addEventListener('change', handler);
		return () => mql.removeEventListener('change', handler);
	}, []);

	useEffect(() => {
		const v = videoRef.current;
		if (!v) return;

		const onPlay = () => {
			setIsPaused(false);
			setIsPlayingFlash(true);
			const t = setTimeout(() => setIsPlayingFlash(false), 900);
			return () => clearTimeout(t);
		};

		const onPause = () => setIsPaused(true);
		const onEnded = () => setIsPaused(true);

		v.addEventListener('play', onPlay);
		v.addEventListener('pause', onPause);
		v.addEventListener('ended', onEnded);
		return () => {
			v.removeEventListener('play', onPlay);
			v.removeEventListener('pause', onPause);
			v.removeEventListener('ended', onEnded);
		};
	}, [isActive]);

	const raf =
		typeof window !== 'undefined' && 'requestAnimationFrame' in window
			? window.requestAnimationFrame.bind(window)
			: (cb: FrameRequestCallback) => setTimeout(cb, 0) as unknown as number;

	const startVideo = async () => {
		setIsActive(true);
		raf(async () => {
			const v = videoRef.current;
			if (!v) return;
			try {
				await v.play();
			} catch {
				setIsPaused(true);
			}
		});
	};

	const togglePlayPause = () => {
		const v = videoRef.current;
		if (!v) return;
		if (v.paused) v.play();
		else v.pause();
	};

	const showRotateHint = isPortrait && window.innerWidth <= 768;

	return (
		<div className={styles.root}>
			<div className={styles.previewContainer}>
				{/* призыв к повороту как в первой версии */}
				{showRotateHint && (
					<div className={styles.rotateButton}>
						<RotateIcon fill="white" />
						<Display color="secondary" size="xs">
							поверни чтобы посмотреть
						</Display>
					</div>
				)}

				{isActive ? (
					<div className={styles.videoWrapper} onClick={togglePlayPause}>
						<video
							ref={videoRef}
							className={styles.video}
							controls={false}
							muted
							playsInline
							preload="metadata"
							src="/video/promo.mp4"
						/>
						{isPaused && (
							<div className={styles.pauseOverlay}>
								<PlayButton height="3rem" width="3rem" />
							</div>
						)}
						{isPlayingFlash && (
							<div className={styles.playOverlay}>
								<PlayButton height="3rem" width="3rem" />
							</div>
						)}
					</div>
				) : (
					<div className={styles.preview} onClick={startVideo}>
						<Image
							alt="preview"
							className={styles.previewImg}
							loading="lazy"
							src="/images/video-preiview.webp"
						/>
						{/* кнопку play поверх превью показываем, когда НЕ просим повернуть телефон */}
						{!showRotateHint && (
							<div className={styles.playButtonPreview}>
								<PlayButton />
								<Display color="secondary" size="xs">
									жми плэээй
								</Display>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

VideoSection.displayName = 'VideoSection';
