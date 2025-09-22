'use client';

import { Container, Heading, Image } from '@/components/ui';
import { useBreakpoint } from '@/hooks/client/use-breakpoint';

import styles from './partners.module.scss';

export const Partners = () => {
	const bp = useBreakpoint();

	return (
		<Container className={styles.root} data-theme="white" tag="section">
			<div className={styles.headingWrapper}>
				<Heading className={styles.heading} color="violete" size="xl">
					Наши партнеры
				</Heading>
			</div>
			<div className={styles.partners}>
				{(bp === 'mobile' ? mobilePartners : partners).map((partner, index) => (
					<a
						key={index}
						href={partner.url}
						rel="noopener noreferrer"
						target="_blank"
					>
						<Image
							alt={'partner'}
							src={partner.src}
							className={
								partner.src === '/images/partners/mobile/geek-battle.webp'
									? styles.geekBattle
									: ''
							}
						/>
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

				{bp !== 'laptop' && (
					<a
						href="https://merkatorgroup.ru/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Image
							alt="partner"
							className={styles.merkator}
							src={'/images/partners/merkator.webp'}
						/>
					</a>
				)}
			</div>
		</Container>
	);
};

Partners.displayName = 'Partners';

const partners = [
	{ src: '/images/partners/demidovsky.webp', url: 'https://www.uniyar.ac.ru/' },
	{ src: '/images/partners/tochka.webp', url: 'https://vk.com/demidpoint76' },
	{
		src: '/images/partners/platform-nti.webp',
		url: 'https://platform.nti.work/',
	},
	{
		src: '/images/partners/digital-growth.webp',
		url: 'https://vk.com/digitaldevelopment76',
	},
	{
		src: '/images/partners/struktura.webp',
		url: 'https://startup-studia.ru/',
	},
	{
		src: '/images/partners/geek-battle.webp',
		url: 'https://vk.com/geekbattle/',
	},
	{
		src: '/images/partners/rybe.webp',
		url: 'https://rybe.store/',
	},
	{
		src: '/images/partners/rzd.webp',
		url: 'https://www.rzd.ru/',
	},
	{
		src: '/images/partners/merkator.webp',
		url: 'https://merkatorgroup.ru/',
	},
	{
		src: '/images/partners/fsp.webp',
		url: 'https://fsp-russia.ru/',
	},
	{
		src: '/images/partners/hh.webp',
		url: 'https://hh.ru/',
	},
];

const mobilePartners = [
	{
		src: '/images/partners/mobile/demidovsky.webp',
		url: 'https://www.uniyar.ac.ru/',
	},
	{
		src: '/images/partners/mobile/tochka.webp',
		url: 'https://vk.com/demidpoint76',
	},
	{
		src: '/images/partners/mobile/digital-growth.webp',
		url: 'https://vk.com/digitaldevelopment76',
	},
	{
		src: '/images/partners/struktura.webp',
		url: 'https://startup-studia.ru/',
	},
	{
		src: '/images/partners/mobile/geek-battle.webp',
		url: 'https://vk.com/geekbattle',
	},
	{ src: '/images/partners/mobile/fsp.webp', url: 'https://fsp-russia.ru/' },
	{
		src: '/images/partners/platform-nti.webp',
		url: 'https://platform.nti.work/',
	},
	{
		src: '/images/partners/hh.webp',
		url: 'https://hh.ru/',
	},
	{
		src: '/images/partners/rybe.webp',
		url: 'https://rybe.store/',
	},
	{
		src: '/images/partners/rzd.webp',
		url: 'https://www.rzd.ru/',
	},
];
