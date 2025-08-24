'use client';

import { useRouter } from 'next/navigation';

import { clsx } from 'clsx';

import { Button, Container } from '@/components/ui';
import { IconButton } from '@/components/ui/icon-button/icon-button';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';

import styles from './fixed-buttons.module.scss';

type FixedButtonsProps = {
	type?: 'primary' | 'secondary';
};

export const FixedButtons = ({ type = 'primary' }: FixedButtonsProps) => {
	const bp = useBreakpoint();

	const router = useRouter();

	const openModal = () => {
		const params = new URLSearchParams(window.location.search);
		params.set('modal', 'true');
		router.replace(`?${params.toString()}`, { scroll: false });
	};

	return (
		<Container className={styles.root}>
			<Button
				onClick={openModal}
				size={bp === 'mobile' ? 's' : 'l'}
				variant={type === 'primary' ? 'primary' : 'secondary'}
			>
				участвовать
			</Button>

			<div
				className={clsx(
					type === 'primary' ? styles.linkBtnsPrimary : styles.linkBtnsSecondary
				)}
			>
				<a href="https://vk.com/cifra.startup" rel="nofollow" target="_blank">
					<IconButton className={styles.vk} />
				</a>
				<a href="https://t.me/cifra_startup" rel="nofollow" target="_blank">
					<IconButton className={styles.tg} />
				</a>
			</div>
		</Container>
	);
};

FixedButtons.displayName = 'FixedButtons';
