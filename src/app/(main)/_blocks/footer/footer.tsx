import {
	Button,
	Container,
	Description,
	Display,
	Image,
} from '@/components/ui';

import styles from './footer.module.scss';

export const Footer = () => {
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
					<Button className={styles.button} size="l" variant="secondary">
						начать
					</Button>
				</div>
				<Description className={styles.date} color="violete" size="xxs">
					Cifra {new Date().getFullYear()}
				</Description>
			</div>
		</Container>
	);
};

Footer.displayName = 'Footer';
