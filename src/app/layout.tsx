import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

import ReactLenis from 'lenis/react';

import '@/styles/global.scss';
import '@/styles/reset.scss';

const PPMachina = localFont({
	src: [
		{
			path: './_fonts/PPNeueMachina-Light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './_fonts/PPNeueMachina-InktrapRegular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './_fonts/PPNeueMachina-InktrapUltrabold.otf',
			weight: '800',
			style: 'normal',
		},
	],
	variable: '--font-ppmachina',
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
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<html className={PPMachina.variable} lang="en">
			<body>
				<ReactLenis root>
					<div id={'app-root'}>
						{/*<Header />*/}
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
