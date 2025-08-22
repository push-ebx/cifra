import { Button, Container, Description, Image } from '@/components/ui';
import { IconButton } from '@/components/ui/icon-button/icon-button';

import styles from './fixed-buttons.module.scss';

export const FixedButtons = () => {
	return (
		<Container className={styles.root}>
			<Button size="l">участвовать</Button>
			<IconButton className={styles.vk} />
			<IconButton className={styles.tg} />
		</Container>
	);
};

FixedButtons.displayName = 'FixedButtons';
