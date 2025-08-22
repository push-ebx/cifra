import { Container, Description, Image } from '@/components/ui';

import styles from './header.module.scss';

export const Header = () => {
	return (
		<Container className={styles.root} tag={'header'}>
			<Image alt="logo" src="/images/Logo-header.svg" />
			<Description size="xl">меню</Description>
		</Container>
	);
};

Header.displayName = 'Header';
