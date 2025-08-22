'use client';

import { Button, Container, Description, Image } from '@/components/ui';
import { IconButton } from '@/components/ui/icon-button/icon-button';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';

import styles from './fixed-buttons.module.scss';

export const FixedButtons = () => {
	const bp = useBreakpoint();

	return (
		<Container className={styles.root}>
			<Button size={bp === 'mobile' ? 's' : 'l'}>участвовать</Button>
			<IconButton className={styles.vk} />
			<IconButton className={styles.tg} />
		</Container>
	);
};

FixedButtons.displayName = 'FixedButtons';
