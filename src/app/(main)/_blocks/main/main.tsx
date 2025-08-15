import { Container, Link } from '@/components/ui';

import styles from './main.module.scss';

export const Main = () => {
	return (
		<section className={styles.root}>
			<Container>
				<Link href="/ui">ui-kit</Link>
			</Container>
		</section>
	);
};

Main.displayName = 'Main';
