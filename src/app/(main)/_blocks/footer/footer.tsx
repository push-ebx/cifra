'use client';

import { useRouter } from 'next/navigation';
import { useMetrica } from 'next-yandex-metrica';

import { CrossIcon } from '@/components/icons/cross-icon';
import {
	Button,
	Container,
	Description,
	Display,
	Image,
} from '@/components/ui';
import { Checkbox } from '@/components/ui/checkbox/checkbox';
import { Form } from '@/components/widgets';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';

import styles from './footer.module.scss';

export const Footer = () => {
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
		<Container className={styles.root} tag="footer">
			<div className={styles.content}>
				<div>
					<Image
						alt="maskot"
						className={styles.image}
						src="/images/footer.webp"
					/>
					<Display className={styles.heading} color="violete" size="l">
						запусти свой стартап
					</Display>
					{/*<Button*/}
					{/*	className={styles.button}*/}
					{/*	onClick={openModal}*/}
					{/*	size={bp === 'mobile' ? 'l' : 'l'}*/}
					{/*	variant="secondary"*/}
					{/*>*/}
					{/*	начать*/}
					{/*</Button>*/}
				</div>
				<Description className={styles.date} color="violete" size="xxs">
					Cifra {new Date().getFullYear()}
				</Description>
			</div>

			<Form />
		</Container>
	);
};

Footer.displayName = 'Footer';
