'use client';

import { useEffect, useMemo, useState } from 'react';

import { Heading, Image } from '@/components/ui';
import { Carousel } from '@/components/ui/carousel/carousel';
import { SwipeSuggestion } from '@/components/ui/swipe-suggestion/swipe-suggestion';
import { FixedButtons } from '@/components/widgets/fixed-buttons/fixed-buttons';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';
import { useCarouselControls } from '@/hooks/client/use-carousel-controls';

import styles from './running-line.module.scss';

type Props = {
	imagesDesktop: string[];
	imagesMobile: string[];
};

export const RunningLine = ({ imagesDesktop, imagesMobile }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const bp = useBreakpoint();
	const { activeSlide, setActiveSlide } = useCarouselControls(1);

	// выбираем набор изображений под устройство
	const images = useMemo(() => {
		return bp === 'mobile' ? imagesMobile : imagesDesktop;
	}, [bp, imagesDesktop, imagesMobile]);

	// сбрасываем индекс при смене набора
	useEffect(() => {
		setCurrentIndex(0);
	}, [images]);

	// автопрокрутка превью в блоке .gallery
	useEffect(() => {
		if (!images.length) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % images.length);
		}, 500);

		return () => clearInterval(interval);
	}, [images]);

	const slides = images.map((src, i) => (
		<Image key={i} alt="slide" src={src} />
	));

	return (
		<SwipeSuggestion>
			<section className={styles.root} data-theme="purple">
				<div className={styles.wrapper}>
					<Heading className={styles.line} color="violete" size="xl">
						{bp === 'mobile'
							? 'как это было'
							: 'как это было как это было как это было как это было'}
					</Heading>

					<div className={styles.gallery}>
						{images.length > 0 && (
							<Image alt="img" src={images[currentIndex]} />
						)}
					</div>

					<Carousel
						active={activeSlide}
						className={styles.carousel}
						onChangeAction={(index) => setActiveSlide(index)}
						onClick={(e) => e.stopPropagation()}
						options={{
							align: 'center',
							dragFree: false,
							containScroll: 'trimSnaps',
							skipSnaps: true,
							loop: true,
						}}
					>
						{slides}
					</Carousel>
				</div>

				<FixedButtons type="secondary" />
			</section>
		</SwipeSuggestion>
	);
};

RunningLine.displayName = 'RunningLine';
