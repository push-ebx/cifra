import { useCallback, useLayoutEffect, useMemo, useState } from 'react';

const DEFAULT_BREAKPOINTS = { laptop: 1280, tablet: 768, mobile: 0 } as const;

export const useBreakpoint = <
	T extends Record<string, number> = typeof DEFAULT_BREAKPOINTS,
>(
	breakpoints?: T
): keyof T | undefined => {
	const effectiveBreakpoints = breakpoints ?? DEFAULT_BREAKPOINTS;

	const sortedBreakpoints = useMemo(
		() => Object.entries(effectiveBreakpoints).sort((a, b) => b[1] - a[1]),
		[effectiveBreakpoints]
	);

	const [breakpoint, setBreakpoint] = useState<keyof T | undefined>(undefined);

	const handleResize = useCallback(() => {
		const windowWidth = window.innerWidth;
		const matchedBreakpoint = sortedBreakpoints.find(
			([, value]) => windowWidth >= value
		);

		setBreakpoint(
			matchedBreakpoint ? (matchedBreakpoint[0] as keyof T) : undefined
		);
	}, [sortedBreakpoints]);

	useLayoutEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);

	return breakpoint;
};
