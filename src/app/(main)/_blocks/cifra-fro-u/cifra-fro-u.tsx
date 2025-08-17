import {
	Body,
	Button,
	Container,
	Description,
	Display,
	Heading,
} from '@/components/ui';

import styles from './cifra-fro-u.module.scss';

export const CifraFroU = () => {
	return (
		<Container className={styles.root} tag="section">
			<Heading className={styles.heading} color="violete" size="xl">
				Как понять, что Цифра для тебя?
			</Heading>
			<div className={styles.cards}>
				{cards.map((card, index) => (
					<div key={index} className={styles.card}>
						<Display color="violete" size="xs">
							0{index + 1}
						</Display>
						<Body size="s">{card.title}</Body>
					</div>
				))}
				<Button variant="circle">
					<Description color="secondary" size="m">
						Воу...Это же я Участвовать!
					</Description>
				</Button>
			</div>
		</Container>
	);
};

CifraFroU.displayName = 'CifraFroU';

const cards = [
	{
		title: 'Ты действующий студент любого вуза ',
	},
	{
		title: 'Хочешь пополнить портфолио',
	},
	{
		title: 'Мечтаешь работать с крупным заказчиком',
	},
	{
		title: 'Хочешь зарабатывать на своих идеях',
	},
	{
		title: 'Целишься в IT тусовку',
	},
];
