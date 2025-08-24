'use client';

import { clsx } from 'clsx';

import { Container, Heading, Image } from '@/components/ui';
import { useScrollIndexV2 } from '@/hooks/client/use-scroll-index-v2';

import styles from './educational-program-v2.module.scss';

const programs = [
	'образовательный блок',
	'мастер-классы\nот экспертов',
	'сертификат\nгосударственного\nобразца',
	'база знаний',
];

const steps = [
	styles.step1,
	styles.step2,
	styles.step3,
	styles.step4,
	styles.step5,
];

export const EducationalProgramV2 = () => {
	const { index: activeStep, rootRef } = useScrollIndexV2(programs.length, {
		pivotRatio: 0.5,
		startFromZero: true,
	});

	return (
		<Container ref={rootRef} className={styles.root} tag="section">
			<Heading className={styles.title} color="secondary" size="xl">
				образовательная программа
			</Heading>
			<div className={styles.line}>
				<Image
					alt="head"
					className={clsx(styles.head, steps[activeStep])}
					src="/images/head.webp"
				/>
				<svg
					fill="none"
					height="46.375rem"
					viewBox="0 0 24 742"
					width="1.5rem"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.0017 17.0001L12.0032 730.5"
						stroke="#BB97F3"
						stroke-width="8"
					/>
					<circle cx="12.5" cy="11.5" fill="#BB97F3" r="11.5" />
					<circle cx="12.5" cy="730.5" fill="#BB97F3" r="11.5" />
					<circle cx="11.5" cy="483.5" fill="#BB97F3" r="11.5" />
					<circle cx="11.5" cy="325.5" fill="#BB97F3" r="11.5" />
					<circle cx="12.5" cy="167.5" fill="#BB97F3" r="11.5" />
				</svg>

				<div className={styles.programs}>
					{programs.map((program, idx) => (
						<div
							key={idx}
							className={styles.program}
							data-index={idx + 1}
							data-scroll-item={true}
						>
							<Heading
								color={idx + 1 <= activeStep ? 'secondary' : 'violete'}
								size="1"
							>
								/0{idx + 1}
							</Heading>
							<Heading
								color={idx + 1 <= activeStep ? 'secondary' : 'violete'}
								size="1"
							>
								{program}
							</Heading>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
};

EducationalProgramV2.displayName = 'EducationalProgramV2';
