import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import ReactLenis from 'lenis/react';

import { AppLoader } from '@/app/_app-loader';
import { Button } from '@/components/ui';
import { Header, Menu } from '@/components/widgets';
import { FixedButtons } from '@/components/widgets/fixed-buttons/fixed-buttons';
import { YandexMetric } from '@/components/widgets/ym/_ym';

import '@/styles/global.scss';
import '@/styles/reset.scss';

const PPMachinaPlain = localFont({
	src: [
		{ path: './_fonts/PPNeueMachina-PlainLight.otf', weight: '300' },
		{ path: './_fonts/PPNeueMachina-PlainRegular.otf', weight: '400' },
		{ path: './_fonts/PPNeueMachina-PlainUltrabold.otf', weight: '800' },
	],
	variable: '--font-ppmachina-plain',
	display: 'swap',
	fallback: ['sans-serif'],
});

const PPMachinaInktrap = localFont({
	src: [
		{ path: './_fonts/PPNeueMachina-InktrapLight.otf', weight: '300' },
		{ path: './_fonts/PPNeueMachina-InktrapRegular.otf', weight: '400' },
		{ path: './_fonts/PPNeueMachina-InktrapUltrabold.otf', weight: '800' },
	],
	variable: '--font-ppmachina-inktrap',
	display: 'swap',
	fallback: ['sans-serif'],
});

export const metadata: Metadata = {
	title: 'Цифра 2025',
	description:
		'Цифра — это бесплатный акселератор для студентов всех вузов. Участники обретут навыки, поддержку, менторство и готовую сеть профессиональных контактов.',
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	viewportFit: 'cover',
	userScalable: false,
	maximumScale: 1,
	minimumScale: 1,
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html
			className={`${PPMachinaPlain.variable} ${PPMachinaInktrap.variable}`}
			lang="ru"
		>
			<YandexMetric id={103878591} />
			<body>
				<div id={'modal-root'}></div>
				<ReactLenis root>
					<div id={'app-root'}>
						<Menu />
						{/*<FixedButtons />*/}
						{/*<AppLoader />*/}
						<Header />
						<main className={'main'}>{children}</main>
						{/*<Footer />*/}
					</div>
				</ReactLenis>
				{/*<AppLoader />*/}
			</body>
		</html>
	);
};

RootLayout.displayName = 'RootLayout';

export default RootLayout;
