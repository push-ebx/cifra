import { Container } from '@/components/ui';

import styles from './main.module.scss';

export const Main = () => {
	return (
		<section className={styles.root}>
			<Container>тест</Container>
		</section>
	);
};

Main.displayName = 'Main';
