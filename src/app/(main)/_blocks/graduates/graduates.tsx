'use client';

import { useRef, useState } from 'react';

import { Body, Container, Heading, Image } from '@/components/ui';
import { Carousel } from '@/components/ui/carousel/carousel';
import { CarouselDots } from '@/components/ui/carousel-dots/carousel-dots';
import { PauseButton, PlayButton } from '@/components/widgets';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';
import { useCarouselControls } from '@/hooks/client/use-carousel-controls';

import styles from './graduates.module.scss';

export const Graduates = () => {
	const { activeSlide, setActiveSlide } = useCarouselControls(1);

	const [activeVideos, setActiveVideos] = useState<Set<number>>(new Set());
	const [pausedVideos, setPausedVideos] = useState<Set<number>>(new Set());
	const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());

	const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

	const bp = useBreakpoint();

	const toggleVideo = (index: number) => {
		setActiveVideos((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(index)) {
				newSet.delete(index);
			} else {
				newSet.add(index);
			}
			return newSet;
		});
	};

	const togglePlayPause = (index: number) => {
		const video = videoRefs.current[index];
		if (!video) return;

		if (video.paused) {
			video.play();
			setPlayingVideos((prev) => new Set(prev).add(index));
			setTimeout(() => {
				setPlayingVideos((prev) => {
					const newSet = new Set(prev);
					newSet.delete(index);
					return newSet;
				});
			}, 1000);

			setPausedVideos((prev) => {
				const newSet = new Set(prev);
				newSet.delete(index);
				return newSet;
			});
		} else {
			video.pause();
			setPausedVideos((prev) => new Set(prev).add(index));
			setTimeout(() => {
				setPausedVideos((prev) => {
					const newSet = new Set(prev);
					newSet.delete(index);
					return newSet;
				});
			}, 1000);
		}
	};

	const _cards = cards.map((card, index) => (
		<div key={index} className={styles.card}>
			<div className={styles.videoContainer}>
				{activeVideos.has(index) ? (
					<div
						className={styles.videoWrapper}
						onClick={() => togglePlayPause(index)}
					>
						<video
							// @ts-expect-error ...
							ref={(el) => (videoRefs.current[index] = el)}
							autoPlay
							className={styles.video}
							controls={false}
							src={card.srcVideo}
						/>
						{pausedVideos.has(index) && (
							<div className={styles.pauseOverlay}>
								<PauseButton height={'3rem'} width={'3rem'} />
							</div>
						)}
						{playingVideos.has(index) && (
							<div className={styles.playOverlay}>
								<PlayButton
									className={styles.playButton}
									height={'3rem'}
									width={'3rem'}
								/>
							</div>
						)}
					</div>
				) : (
					<div className={styles.preview} onClick={() => toggleVideo(index)}>
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
	));

	return (
		<Container className={styles.root} data-theme="white" tag="section">
			<Heading className={styles.heading} color="violete" size="xl">
				Выпускники
			</Heading>

			{bp === 'tablet' ? (
				<div className={styles.cards}>{_cards}</div>
			) : (
				<>
					<Carousel
						active={activeSlide}
						className={styles.carousel}
						onChangeAction={setActiveSlide}
						onClick={(e) => e.stopPropagation()}
						options={{
							align: 'center',
							dragFree: false,
							containScroll: 'trimSnaps',
							skipSnaps: true,
						}}
					>
						{_cards}
					</Carousel>
					<div className={styles.carouselDots}>
						<CarouselDots
							activeColor="#752CE8"
							activeSlide={activeSlide}
							onDotClick={setActiveSlide}
							totalSlides={cards.length}
						/>
					</div>
				</>
			)}
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
