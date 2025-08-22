import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
	const [activeSection, setActiveSection] = useState<string | null>(
		sectionIds[0] ?? null
	);

	useEffect(() => {
		const observers: IntersectionObserver[] = [];
		const options = { root: null, rootMargin: '0px', threshold: 0.5 };

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(id);
					}
				});
			}, options);

			observer.observe(el);
			observers.push(observer);
		});

		return () => {
			observers.forEach((o) => o.disconnect());
		};
	}, [sectionIds]);

	return activeSection;
}
