'use client';

import { Container, Heading, Image } from '@/components/ui';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';

import styles from './partners.module.scss';

export const Partners = () => {
	const bp = useBreakpoint();

	return (
		<Container className={styles.root} data-theme="white" tag="section">
			<div className={styles.headingWrapper}>
				<Heading className={styles.heading} color="violete" size="xl">
					Наши партнеры
				</Heading>
			</div>
			<div className={styles.partners}>
				{(bp === 'mobile' ? mobilePartners : partners).map((partner, index) => (
					<Image
						key={index}
						alt={'partner'}
						src={partner}
						className={
							partner === '/images/partners/mobile/geek-battle.webp'
								? styles.geekBattle
								: ''
						}
					/>
				))}
				<a
					href="https://startup-studia.ru/"
					rel="noopener noreferrer"
					target="_blank"
				>
					<Image
						alt="partner"
						className={styles.struktura}
						src={
							bp === 'mobile'
								? '/images/partners/mobile/struktura.webp'
								: '/images/partners/struktura.webp'
						}
					/>
				</a>
			</div>
		</Container>
	);
};

Partners.displayName = 'Partners';

const partners = [
	'/images/partners/demidovsky.webp',
	'/images/partners/tochka.webp',
	'/images/partners/platform-nti.webp',
	'/images/partners/digital-growth.webp',
];

const mobilePartners = [
	'/images/partners/mobile/demidovsky.webp',
	'/images/partners/mobile/tochka.webp',
	// '/images/partners/mobile/platform-nti.webp',
	'/images/partners/mobile/digital-growth.webp',
	'/images/partners/mobile/geek-battle.webp',
	'/images/partners/mobile/fsp.webp',
];
