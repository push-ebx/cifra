import {
	Button,
	Container,
	Description,
	Display,
	Image,
} from '@/components/ui';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';
import { Checkbox } from '@/components/ui/checkbox/checkbox';
import { Form } from '@/components/widgets';

import styles from './footer.module.scss';

export const Footer = () => {
	const bp = useBreakpoint();

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
						size={bp === 'mobile' ? 'l' : 'l'}
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
