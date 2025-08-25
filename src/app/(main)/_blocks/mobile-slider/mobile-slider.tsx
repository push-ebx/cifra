'use client';

import { Body, Container, Heading, Image } from '@/components/ui';
import { Carousel } from '@/components/ui/carousel/carousel';
import { SwipeSuggestion } from '@/components/ui/swipe-suggestion/swipe-suggestion';
import { FixedButtons } from '@/components/widgets/fixed-buttons/fixed-buttons';
import { useCarouselControls } from '@/hooks/client/use-carousel-controls';

import styles from './mobile-slider.module.scss';

export const MobileSlider = () => {
	const visibleSlides = 1;

	const { activeSlide, setActiveSlide } = useCarouselControls(visibleSlides);

	return (
		<div className={styles.wrapper}>
			<SwipeSuggestion className={styles.swipeSuggestion}>
				<Container className={styles.root} id="teams" tag="section">
					<Heading className={styles.heading} color="secondary" size="xl">
						состав команд
					</Heading>

					<Carousel
						active={activeSlide}
						className={styles.carousel}
						onChangeAction={(index) => setActiveSlide(index)}
						onClick={(e) => e.stopPropagation()}
						options={{
							align: 'center',
							dragFree: false,
							containScroll: 'trimSnaps',
							skipSnaps: true,
							loop: true,
						}}
					>
						{slides.map((slide, index) => (
							<div key={index} className={styles.card}>
								<Image
									alt={slide.title}
									className={styles.image}
									src={slide.imageSrc}
								/>
								<div key={activeSlide} className={styles.position}>
									<Heading color="secondary" size="1">
										{slide.title}
									</Heading>
									<Body color="secondary" size="s">
										{slide.subtitle}
									</Body>
								</div>
							</div>
						))}
					</Carousel>

					<FixedButtons className={styles.fixedButtons} type="secondary" />
				</Container>
			</SwipeSuggestion>
		</div>
	);
};

MobileSlider.displayName = 'MobileSlider';

const slides = [
	{
		title: 'дизайнер',
		subtitle:
			'Креативный гений, который создает эффективные пользовательские интерфейсы, разрабатывает эстетически привлекательные дизайны и уделяет особое внимание пользовательскому опыту',
		imageSrc: '/images/slides/pic-1.webp',
		icon: '/images/slides/icons/designer.webp',
	},
	{
		title: 'маркетолог',
		subtitle:
			'Эксперт в области цифрового\nмаркетинга, который помогает команде успешно продвигать продукты и привлекать новых клиентов',
		imageSrc: '/images/slides/pic-2.webp',
		icon: '/images/slides/icons/marketing.webp',
	},
	{
		title: 'менеджер',
		subtitle:
			'Он планирует и контролирует\nпроцессы разработки, управляет ресурсами и распределяет задачи между участниками команды',
		imageSrc: '/images/slides/pic-3.webp',
		icon: '/images/slides/icons/manager.webp',
	},
	{
		title: 'программист',
		subtitle:
			'Он занимается программированием \n на различных языках и технологиях, разрабатывает архитектуру системы и обеспечивает надежность \n и безопасность программного продукта',
		imageSrc: '/images/slides/pic-4.webp',
		icon: '/images/slides/icons/coder.webp',
	},
];
