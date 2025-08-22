'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { CrossIcon } from '@/components/icons/cross-icon';
import {
	Button,
	Container,
	Description,
	Display,
	Image,
	Input,
	Modal,
	Tab,
} from '@/components/ui';
import { Checkbox } from '@/components/ui/checkbox/checkbox';
import { Form } from '@/components/widgets';

import styles from './footer.module.scss';

export const Footer = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const openModal = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('modal', 'true');

		const qs = params.toString();
		const hash = typeof window !== 'undefined' ? window.location.hash : '';

		const href = qs ? `${pathname}?${qs}${hash}` : `${pathname}${hash}`;
		router.replace(href, { scroll: false });
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
					<Button
						className={styles.button}
						onClick={openModal}
						size="l"
						variant="secondary"
					>
						начать
					</Button>
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
