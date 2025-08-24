import { useEffect, useRef, useState } from 'react';

type Opts = {
	/** CSS‑селектор элементов шага внутри rootRef */
	selector?: string; // по умолчанию '[data-scroll-item]'
	/** Доля высоты вьюпорта, на которой стоит «линия активации» */
	pivotRatio?: number; // 0..1, по умолчанию 0.35 (35% сверху)
	/** Сдвиг линии в пикселях (добавляется к pivotRatio*vh) */
	offsetPx?: number; // по умолчанию 0
	/** Возвращать индексы с 0 или с 1 */
	startFromZero?: boolean; // по умолчанию false
};

export const useScrollIndexV2 = (count: number, opts: Opts = {}) => {
	const {
		selector = '[data-scroll-item]',
		pivotRatio = 0.35,
		offsetPx = 0,
		startFromZero = false,
	} = opts;

	const rootRef = useRef<HTMLElement | null>(null);
	const initial = startFromZero ? 0 : 1;
	const [index, setIndex] = useState<number>(initial);

	useEffect(() => {
		const root = rootRef.current ?? document.body;
		let items = Array.from(root.querySelectorAll<HTMLElement>(selector));
		let raf = 0;

		const compute = () => {
			const pivot =
				window.innerHeight * Math.min(0.95, Math.max(0, pivotRatio)) + offsetPx;

			let active = initial;
			for (let i = 0; i < items.length; i++) {
				const rect = items[i].getBoundingClientRect();
				if (rect.top <= pivot) {
					active = i + 1; // «раннее» срабатывание
				} else {
					break;
				}
			}
			setIndex(active);
		};

		const onScroll = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(compute);
		};
		const onResize = () => {
			items = Array.from(root.querySelectorAll<HTMLElement>(selector));
			compute();
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onResize);

		// следим за изменением размеров самих элементов
		const ro = new ResizeObserver(onResize);
		items.forEach((el) => ro.observe(el));

		compute(); // первичный расчёт

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
			ro.disconnect();
		};
	}, [count, selector, pivotRatio, offsetPx, startFromZero]);

	return { index, rootRef };
};
