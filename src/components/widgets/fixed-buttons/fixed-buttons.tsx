'use client';

import { useRouter } from 'next/navigation';
import { useMetrica } from 'next-yandex-metrica';

import { clsx } from 'clsx';

import { Button, Container, Heading } from '@/components/ui';
import { IconButton } from '@/components/ui/icon-button/icon-button';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';

import styles from './fixed-buttons.module.scss';

type FixedButtonsProps = {
	type?: 'primary' | 'secondary';
	className?: string;
};

export const FixedButtons = ({
	type = 'primary',
	className,
}: FixedButtonsProps) => {
	const bp = useBreakpoint();

	const router = useRouter();
	const { reachGoal } = useMetrica();

	const openModal = () => {
		const params = new URLSearchParams(window.location.search);
		params.set('modal', 'true');
		router.replace(`?${params.toString()}`, { scroll: false });
		reachGoal('open_form');
	};

	return (
		<Container className={clsx(styles.root, className)}>
			{/*<Button*/}
			{/*	className={styles.button}*/}
			{/*	onClick={openModal}*/}
			{/*	size={bp === 'mobile' ? 's' : 'l'}*/}
			{/*	variant={type === 'primary' ? 'primary' : 'secondary'}*/}
			{/*>*/}
			{/*	участвовать*/}
			{/*</Button>*/}

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
