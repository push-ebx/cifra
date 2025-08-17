import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

export const useInView = (elementRef: RefObject<HTMLElement>): boolean => {
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!elementRef.current) return;

			const { bottom } = elementRef.current.getBoundingClientRect();
			const viewportHeight = window.innerHeight;

			setIsInView(bottom <= viewportHeight);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [elementRef]);

	return isInView;
};
