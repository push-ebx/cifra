import { useCallback, useState } from 'react';

export const useCarouselControls = (length: number, visibleSlides = 1) => {
	const [activeSlide, setActiveSlide] = useState(0);

	const handleNext = useCallback(() => {
		setActiveSlide((prev) => (prev + 1) % length);
	}, [length]);

	const handlePrev = useCallback(() => {
		setActiveSlide((prev) => (prev - 1 + length) % length);
	}, [length]);

	return { activeSlide, handleNext, handlePrev, setActiveSlide };
};
