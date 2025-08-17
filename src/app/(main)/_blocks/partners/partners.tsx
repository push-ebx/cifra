import { Container, Heading, Image } from '@/components/ui';

import styles from './partners.module.scss';

export const Partners = () => {
	return (
		<Container className={styles.root} tag="section">
			<div className={styles.headingWrapper}>
				<Heading className={styles.heading} color="violete" size="xl">
					Наши партнеры
				</Heading>
			</div>
			<div className={styles.partners}>
				{partners.map((partner, index) => (
					<Image key={index} alt={'partner'} src={partner} />
				))}
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
	'/images/partners/struktura.webp',
];
