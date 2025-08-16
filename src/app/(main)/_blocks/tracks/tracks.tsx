import { Body, Container, Heading, Image } from '@/components/ui';

import styles from './tracks.module.scss';

const tracksData = [
	{
		title: 'Образование',
		description:
			'Используй цифровые технологии в образовании. Улучши процесс обучения в школе, вузе или компании',
	},
	{
		title: 'Креативные индустрии',
		description:
			'Представь в цифровом формате современное творчество и внедри его в реальность',
	},
	{
		title: 'Промышленность',
		description:
			'Оптимизируй процессы с искусственным интеллектом в промышленной индустрии',
	},
];

export const Tracks = () => {
	return (
		<Container className={styles.root} tag="section">
			<div className={styles.content}>
				<div>
					<Heading className={styles.heading} color="violete" size="xl">
						треки
					</Heading>
					<Body size="l">
						Вы сами с командой определяете направление: можно прийти со своим
						проектом или выбрать кейс от партнеров
					</Body>
					<div className={styles.tracks}>
						{tracksData.map((track, index) => (
							<div key={index}>
								<Heading size="m">{track.title}</Heading>
								<Body color={'darkGray'} size="s">
									{track.description}
								</Body>
							</div>
						))}
					</div>
				</div>
				<Image alt="girl" className={styles.image} src="/images/girl.webp" />
			</div>
		</Container>
	);
};

Tracks.displayName = 'Tracks';
