import { Body, Container, Heading } from '@/components/ui';

import styles from './tracks.module.scss';

export const Tracks = () => {
	return (
		<Container className={styles.root} tag="section">
			<Heading className={styles.heading} color="violete" size="xl">
				треки
			</Heading>
			<Body color="secondary" size="l">
				Бесплатная программа для студентов всех вузов
			</Body>
		</Container>
	);
};

Tracks.displayName = 'Tracks';
