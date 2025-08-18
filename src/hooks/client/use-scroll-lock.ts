import { useId, useLayoutEffect, useRef } from 'react';

export const useScrollLock = (
	lock: boolean,
	unlockDelay = 0,
	scrollMode = 'hidden'
) => {
	const lockIdRef = useRef<string>(null);
	const uid = useId();

	useLayoutEffect(() => {
		let timeoutId: NodeJS.Timeout;
		let scrollPosition = { top: 0, left: 0 };

		const disableScroll = () => {
			lockIdRef.current = uid;

			if (scrollMode === 'fixed') {
				scrollPosition = { top: window.scrollY, left: window.scrollX };
				Object.assign(document.body.style, {
					position: 'fixed',
					top: `-${scrollPosition.top}px`,
					left: `-${scrollPosition.left}px`,
					width: '100%',
				});
			} else {
				Object.assign(document.body.style, {
					overflow: 'hidden',
				});
			}
		};

		const enableScroll = () => {
			if (lockIdRef.current !== uid) return;
			lockIdRef.current = null;
			if (scrollMode === 'fixed') {
				Object.assign(document.body.style, {
					position: '',
					top: '',
					left: '',
					width: '',
				});
				window.scrollTo(scrollPosition.left, scrollPosition.top);
			} else {
				Object.assign(document.body.style, {
					overflow: '',
				});
			}
		};

		if (lock) {
			disableScroll();
		} else {
			timeoutId = setTimeout(enableScroll, unlockDelay);
		}

		return () => {
			clearTimeout(timeoutId);
			enableScroll();
		};
	}, [lock, unlockDelay, scrollMode, uid]);
};
