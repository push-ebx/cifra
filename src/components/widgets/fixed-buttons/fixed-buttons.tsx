'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Button, Container } from '@/components/ui';
import { IconButton } from '@/components/ui/icon-button/icon-button';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';

import styles from './fixed-buttons.module.scss';

export const FixedButtons = () => {
	const bp = useBreakpoint();

	const searchParams = useSearchParams();
	const router = useRouter();

	const openModal = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('modal', 'true');
		router.replace(`?${params.toString()}`, { scroll: false });
	};

	return (
		<Container className={styles.root}>
			<Button onClick={openModal} size={bp === 'mobile' ? 's' : 'l'}>
				участвовать
			</Button>
			<IconButton className={styles.vk} />
			<IconButton className={styles.tg} />
		</Container>
	);
};

FixedButtons.displayName = 'FixedButtons';
