import { Container, Display, Heading, Image } from '@/components/ui';

import styles from './hero.module.scss';

export const Hero = () => {
	return (
		<>
			<Image
				alt="grdient"
				className={styles.gradient}
				fetchPriority="high"
				src="/images/gradient-1.webp"
			/>
			<Container className={styles.root} tag="section">
				<div className={styles.headings}>
					<Display color="secondary" size="xl">
						IT-акселератор
					</Display>
					<Heading color="secondary" size="m">
						Бесплатная программа для студентов всех вузов
					</Heading>
				</div>
				<Image
					alt="maskot"
					className={styles.maskot}
					src="/images/maskot-hero.webp"
				/>
			</Container>
		</>
	);
};

Hero.displayName = 'Hero';
