import type { ComponentProps, PropsWithChildren } from 'react';
import React, { Children, useEffect, useState } from 'react';

import { clsx } from 'clsx';
import type { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import styles from './carousel.module.scss';

type CarouselProps = ComponentProps<'div'> &
	PropsWithChildren & {
		options: EmblaOptionsType;
		onChangeAction: (value: number) => void;
		active: number;
		className?: string;
	};

export const Carousel = (props: CarouselProps) => {
	const { children, options, onChangeAction, active, className, ...restProps } =
		props;
	const [emblaRef, embla] = useEmblaCarousel(options, [WheelGesturesPlugin()]);
	const [currentIndex, setCurrentIndex] = useState(active || 0);

	const selectHandler = () => {
		if (!embla) return;

		const index = embla.selectedScrollSnap();
		setCurrentIndex(index);
		onChangeAction?.(index);
	};

	useEffect(() => {
		if (!embla) return;

		const handler = () => selectHandler();
		embla.on('select', handler);

		return () => {
			embla.off('select', handler);
		};
	}, [embla, onChangeAction]);

	useEffect(() => {
		if (active !== undefined && active !== currentIndex) {
			embla?.scrollTo(active);
			setCurrentIndex(active);
		}
	}, [active, currentIndex, embla]);

	return (
		<section
			className={clsx(styles.embla, styles.Carousel, className)}
			{...restProps}
		>
			<div ref={emblaRef} className={styles.embla__viewport}>
				<div className={styles.embla__container}>
					{Children.map(children, (child, index) => (
						<div key={index} className={styles.embla__slide}>
							{child}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

Carousel.displayName = 'Carousel';
