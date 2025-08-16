'use client';

import { AnimatedCounter, Body, Container, Display } from '@/components/ui';
import { useScrollIndex } from '@/hooks/client/use-scroll-index';

import styles from './educational-program.module.scss';

const programs = [
	'Образовательный блок',
	'Курсы и лекции',
	'Воркшопы и мастер-классы',
	'Семинары и конференции',
	'Онлайн-курсы и вебинары',
];

export const EducationalProgram = () => {
	const { index, rootRef } = useScrollIndex(programs.length);

	return (
		<Container ref={rootRef} className={styles.root} tag="section">
			{/*{Array.from({ length: programs.length }, (_, i) => (*/}
			{/*	<div key={i} className={styles.debugMark} />*/}
			{/*))}*/}
			<div className={styles.sticky}>
				<Body color="violete" size="m">
					образовательная программа
				</Body>
				<Display className={styles.program} color="secondary" size="l">
					<AnimatedCounter value={programs[index]} />
				</Display>
			</div>
		</Container>
	);
};

EducationalProgram.displayName = 'EducationalProgram';
