'use client';

import { Container, Heading, Image } from '@/components/ui';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';

import styles from './inform-partners.module.scss';

export const InformPartners = () => {
	const bp = useBreakpoint();

	return (
		<Container className={styles.root} data-theme="white" tag="section">
			<div className={styles.headingWrapper}>
				<Heading className={styles.heading} color="violete" size="xl">
					информ партнеры
				</Heading>
			</div>
			<div className={styles.partners}>
				{partners.map((partner, index) => (
					<a
						key={index}
						href={partner.url}
						rel="noopener noreferrer"
						target="_blank"
					>
						<Image alt={'partner'} src={partner.src} />
					</a>
				))}
				{/*<a*/}
				{/*	href="https://startup-studia.ru/"*/}
				{/*	rel="noopener noreferrer"*/}
				{/*	target="_blank"*/}
				{/*>*/}
				{/*	<Image*/}
				{/*		alt="partner"*/}
				{/*		className={styles.struktura}*/}
				{/*		src={*/}
				{/*			bp === 'mobile'*/}
				{/*				? '/images/partners/mobile/struktura.webp'*/}
				{/*				: '/images/partners/struktura.webp'*/}
				{/*		}*/}
				{/*	/>*/}
				{/*</a>*/}
				{/*{bp !== 'mobile' && (*/}
				{/*	<a*/}
				{/*		href="https://vk.com/geekbattle"*/}
				{/*		rel="noopener noreferrer"*/}
				{/*		target="_blank"*/}
				{/*	>*/}
				{/*		<Image alt="partner" src={'/images/partners/geek-battle.webp'} />*/}
				{/*	</a>*/}
				{/*)}*/}

				{/*{bp !== 'mobile' && (*/}
				{/*	<a*/}
				{/*		href="https://fsp-russia.ru/"*/}
				{/*		rel="noopener noreferrer"*/}
				{/*		target="_blank"*/}
				{/*	>*/}
				{/*		<Image*/}
				{/*			alt="partner"*/}
				{/*			className={styles.sportProg}*/}
				{/*			src={'/images/partners/sport-prog.webp'}*/}
				{/*		/>*/}
				{/*	</a>*/}
				{/*)}*/}
			</div>
		</Container>
	);
};

InformPartners.displayName = 'InformPartners';

const partners = [
	{
		src: '/images/inform-partners/souz.webp',
		url: 'https://vk.com/rsmofficial',
	},
	{
		src: '/images/inform-partners/softline.webp',
		url: 'https://t.me/volotovskayaelena',
	},
];

// const mobilePartners = [
// 	{
// 		src: '/images/partners/mobile/demidovsky.webp',
// 		url: 'https://www.uniyar.ac.ru/',
// 	},
// 	{
// 		src: '/images/partners/mobile/tochka.webp',
// 		url: 'https://vk.com/demidpoint76',
// 	},
// 	{
// 		src: '/images/partners/mobile/digital-growth.webp',
// 		url: 'https://vk.com/digitaldevelopment76',
// 	},
// 	{
// 		src: '/images/partners/mobile/geek-battle.webp',
// 		url: 'https://vk.com/geekbattle',
// 	},
// 	{ src: '/images/partners/mobile/fsp.webp', url: 'https://fsp-russia.ru/' },
// ];
