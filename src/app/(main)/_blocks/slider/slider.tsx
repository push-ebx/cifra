import {
	Body,
	Container,
	Display,
	GlassCard,
	Heading,
	Image,
} from '@/components/ui';

import styles from './slider.module.scss';

export const Slider = () => {
	return (
		<Container className={styles.root} tag="section">
			<Heading className={styles.heading} color="secondary" size="xl">
				состав команд
			</Heading>
			<div className={styles.slider}>
				<div className={styles.cards}>
					<Image
						alt="cards"
						className={styles.imageCards}
						src="/images/cards/cards.png"
					/>
					<GlassCard
						cardClassName={styles.card}
						contentClassName={styles.contentCard}
					>
						<Image
							alt={slides[0].title}
							className={styles.image}
							src={slides[0].imageSrc}
						/>
					</GlassCard>
					<GlassCard
						cardClassName={styles.card}
						contentClassName={styles.contentCard}
					>
						<Image
							alt={slides[1].title}
							className={styles.image}
							src={slides[1].imageSrc}
						/>
					</GlassCard>
					<GlassCard
						cardClassName={styles.card}
						contentClassName={styles.contentCard}
					>
						<Image
							alt={slides[2].title}
							className={styles.image}
							src={slides[2].imageSrc}
						/>
					</GlassCard>
					<GlassCard
						cardClassName={styles.card}
						contentClassName={styles.contentCard}
					>
						<Image
							alt={slides[3].title}
							className={styles.image}
							src={slides[3].imageSrc}
						/>
					</GlassCard>
				</div>
			</div>
		</Container>
	);
};

Slider.displayName = 'Slider';

const slides = [
	{
		title: 'Дизайнер',
		subtitle:
			'Креативный гений, который создает эффективные пользовательские интерфейсы, разрабатывает эстетически привлекательные дизайны и уделяет особое внимание пользовательскому опыту',
		imageSrc: '/images/slides/slide-1.webp',
	},
	{
		title: 'маркетолог',
		subtitle:
			'Эксперт в области цифрового\nмаркетинга, который помогает команде успешно продвигать продукты и привлекать новых клиентов',
		imageSrc: '/images/slides/slide-2.webp',
	},
	{
		title: 'менеджер',
		subtitle:
			'Он планирует и контролирует\nпроцессы разработки, управляет ресурсами и распределяет задачи\nмежду участниками команды',
		imageSrc: '/images/slides/slide-3.webp',
	},
	{
		title: 'программист',
		subtitle:
			'Он занимается программированием\nна различных языках и технологиях, разрабатывает архитектуру системы\nи обеспечивает надежность\nи безопасность программного продукта',
		imageSrc: '/images/slides/slide-4.webp',
	},
];
