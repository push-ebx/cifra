import { useEffect, useRef, useState } from 'react';

export const useScrollIndex = (count: number, stepVh = 50) => {
	const rootRef = useRef<HTMLDivElement>(null);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) return;

		const handleScroll = () => {
			const rect = root.getBoundingClientRect();
			const vh = window.innerHeight;

			// сколько пикселей соответствует 1 шагу (например, 50vh)
			const stepPx = (vh * stepVh) / 100;

			// сколько уже проскроллили от момента, когда root коснулся верха экрана
			const scrolled = Math.max(0, -rect.top);

			// вычисляем индекс
			const newIndex = Math.min(count - 1, Math.floor(scrolled / stepPx));

			setIndex(newIndex);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, [count, stepVh]);

	return { index, rootRef };
};
