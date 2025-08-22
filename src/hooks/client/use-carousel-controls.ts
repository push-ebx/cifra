import { useCallback, useState } from 'react';

export const useCarouselControls = (length: number, visibleSlides = 3) => {
	const [activeSlide, setActiveSlide] = useState(0);

	const handleNext = useCallback(() => {
		setActiveSlide((prev) => Math.min(prev + 1, length - visibleSlides));
	}, [length, visibleSlides]);

	const handlePrev = useCallback(() => {
		setActiveSlide((prev) => Math.max(prev - 1, 0));
	}, []);

	return { activeSlide, handleNext, handlePrev, setActiveSlide };
};
