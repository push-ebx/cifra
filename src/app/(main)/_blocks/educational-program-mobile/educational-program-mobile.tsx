'use client';

import { Body, Container, Display } from '@/components/ui';
import { useScrollIndex } from '@/hooks/client/use-scroll-index';

import styles from './educational-program-mobile.module.scss';

const programs = [
	'Образовательный блок',
	'Курсы и лекции',
	'Воркшопы и мастер-классы',
	'Семинары и конференции',
	'Онлайн-курсы и вебинары',
];

export const EducationalProgramMobile = () => {
	const { index, rootRef } = useScrollIndex(programs.length);

	return (
		<Container ref={rootRef} className={styles.root} tag="section">
			<div className={styles.sticky}>
				<Body color="violete" size="m">
					образовательная программа {index}
				</Body>
				<div className={styles.programs}>
					{programs.map((program, _index) => {
						const dist = Math.abs(_index - index);

						const opacitySteps = [1, 0.3, 0.15, 0.05, 0.03];
						const opacity = opacitySteps[dist] ?? 0;

						return (
							<Display
								key={_index}
								className={styles.program}
								color="secondary"
								size="l"
								style={{ opacity }}
							>
								{program}
							</Display>
						);
					})}
				</div>
			</div>
		</Container>
	);
};

EducationalProgramMobile.displayName = 'EducationalProgramMobile';
