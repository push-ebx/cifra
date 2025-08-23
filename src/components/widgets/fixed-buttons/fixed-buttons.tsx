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
			<a href="https://vk.com/cifra.startup" rel="nofollow" target="_blank">
				<IconButton className={styles.vk} />
			</a>
			<a href="https://t.me/cifra_startup" rel="nofollow" target="_blank">
				<IconButton className={styles.tg} />
			</a>
		</Container>
	);
};

FixedButtons.displayName = 'FixedButtons';
