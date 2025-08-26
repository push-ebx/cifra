'use client';

import { useEffect, useRef, useState } from 'react';

import { RotateIcon } from '@/components/icons';
import { Display, Image } from '@/components/ui';
import { PauseButton, PlayButton } from '@/components/widgets';

import styles from './video-section.module.scss';

export const VideoSection = () => {
	const [isPortrait, setIsPortrait] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [isPlayingFlash, setIsPlayingFlash] = useState(false);

	const videoRef = useRef<HTMLVideoElement | null>(null);

	const initialOrientationRef = useRef<'portrait' | 'landscape' | null>(null);
	const lastOrientationRef = useRef<'portrait' | 'landscape' | null>(null);
	const rotationCountRef = useRef(0);

	const getCurrentOrientation = () =>
		window.matchMedia('(orientation: portrait)').matches
			? 'portrait'
			: 'landscape';

	const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

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
		const o = getCurrentOrientation();
		initialOrientationRef.current = o;
		lastOrientationRef.current = o;
		rotationCountRef.current = 0;

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

	const wrapperRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const mql = window.matchMedia('(orientation: portrait)');

		const handler = (e: MediaQueryListEvent | MediaQueryList) => {
			const portrait =
				'matches' in e ? e.matches : (e as MediaQueryList).matches;
			setIsPortrait(portrait);

			// если видео активно — после переворота центрируем его во вьюпорте
			if (isActive) {
				raf(() => {
					const el = wrapperRef.current ?? videoRef.current;
					el?.scrollIntoView({
						block: 'center',
						inline: 'nearest',
						behavior: 'instant' as ScrollBehavior,
					});
				});
			}

			/* 👇 NEW: логика «повернул туда-обратно — поставить на паузу», только на мобилках */
			if (!isActive || !isMobile()) return;

			const current = portrait ? 'portrait' : 'landscape';
			const last = lastOrientationRef.current;
			const initial = initialOrientationRef.current;

			if (last !== current) {
				// зарегистрировали факт переворота
				if (initial && current !== initial) {
					rotationCountRef.current = 1; // первый отклонённый поворот
				} else if (
					initial &&
					current === initial &&
					rotationCountRef.current >= 1
				) {
					// вернулись к исходной ориентации после хотя бы одного поворота — ставим на паузу
					const v = videoRef.current;
					if (v && !v.paused) v.pause();
					// можно сбросить счётчик, чтобы не триггерилось повторно до следующего старта
					rotationCountRef.current = 0;
				}
				lastOrientationRef.current = current;
			}
			/* ▲ NEW */
		};

		handler(mql);
		mql.addEventListener('change', handler);
		return () => mql.removeEventListener('change', handler);
	}, [isActive]);

	const showRotateHint =
		isPortrait && typeof window !== 'undefined' && window.innerWidth <= 768;

	return (
		<div className={styles.root}>
			<div className={styles.previewContainer}>
				{isActive && showRotateHint && (
					<div className={styles.rotateButton}>
						<RotateIcon fill="white" />
						<Display color="secondary" size="xs">
							поверни чтобы посмотреть
						</Display>
					</div>
				)}

				{isActive ? (
					<div
						ref={wrapperRef}
						onClick={togglePlayPause}
						className={
							showRotateHint ? styles.videoWrapperMobile : styles.videoWrapper
						}
					>
						<video
							ref={videoRef}
							className={showRotateHint ? styles.videoMobile : styles.video}
							controls={false}
							disablePictureInPicture
							playsInline
							poster="/images/video-preiview.webp"
							preload="metadata"
							src="/video/promo.webm"
						/>
						{isPaused && (
							<div className={styles.pauseOverlay}>
								<PlayButton height="3rem" width="3rem" />
							</div>
						)}
						{isPlayingFlash && (
							<div className={styles.playOverlay}>
								<PauseButton height={'3rem'} width={'3rem'} />
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
						{!isActive && (
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
