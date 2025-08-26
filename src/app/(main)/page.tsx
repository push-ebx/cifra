import fs from 'fs';
import path from 'path';
import type { WebPage, WithContext } from 'schema-dts';

import { AcceleratorIs } from '@/app/(main)/_blocks/accelerator-is/accelerator-is';
import { AcceleratorIsMobile } from '@/app/(main)/_blocks/accelerator-is-mobile/accelerator-is-mobile';
import { CifraFroU } from '@/app/(main)/_blocks/cifra-fro-u/cifra-fro-u';
import { EducationalProgramV2 } from '@/app/(main)/_blocks/educational-program-v2/educational-program-v2';
import { Faq } from '@/app/(main)/_blocks/faq/faq';
import { Footer } from '@/app/(main)/_blocks/footer/footer';
import { Graduates } from '@/app/(main)/_blocks/graduates/graduates';
import { Hero } from '@/app/(main)/_blocks/hero/hero';
import { MobileSlider } from '@/app/(main)/_blocks/mobile-slider/mobile-slider';
import { Partners } from '@/app/(main)/_blocks/partners/partners';
import { PrizeFund } from '@/app/(main)/_blocks/prize-fund/prize-fund';
import { RunningLine } from '@/app/(main)/_blocks/running-line/running-line';
import { Slider } from '@/app/(main)/_blocks/slider/slider';
import { Timeline } from '@/app/(main)/_blocks/timeline/timeline';
import { Tracks } from '@/app/(main)/_blocks/tracks/tracks';
import { VideoSection } from '@/app/(main)/_blocks/video-section/video-section';
import { WhatDoUGet } from '@/app/(main)/_blocks/what-do-u-get/what-do-u-get';
import { JsonLd } from '@/components/utils';

const webPageSchema: WithContext<WebPage> = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	url: 'https://my-site.com',
	name: 'Site Name',
};

export const revalidate = 60;

const readImages = (dirAbs: string, publicPrefix: string): string[] => {
	try {
		return fs
			.readdirSync(dirAbs)
			.filter((f) => /\.(png|jpe?g|webp|gif|avif)$/i.test(f))
			.map((f) => `${publicPrefix}/${f}`);
	} catch {
		return [];
	}
};

const Home = async () => {
	const desktopDir = path.join(
		process.cwd(),
		'public',
		'images',
		'gallery',
		'desktop'
	);
	const mobileDir = path.join(
		process.cwd(),
		'public',
		'images',
		'gallery',
		'mobile'
	);

	const imagesDesktop = readImages(desktopDir, '/images/gallery/desktop');
	const imagesMobile = readImages(mobileDir, '/images/gallery/mobile');

	// общий фолбэк, если вдруг обе папки пустые/недоступны
	const fallback = [
		'/images/gallery/1.webp',
		'/images/gallery/2.webp',
		'/images/gallery/3.webp',
	];

	return (
		<>
			<Hero />
			<AcceleratorIsMobile />
			<div style={{ position: 'relative' }}>
				<AcceleratorIs />
				<PrizeFund />
			</div>
			<div style={{ position: 'relative' }}>
				<Tracks />
				<EducationalProgramV2 />
				<VideoSection />
			</div>
			<CifraFroU />
			<div style={{ position: 'relative' }}>
				<WhatDoUGet />
				<>
					<MobileSlider />
					<Slider />
				</>
			</div>
			<Timeline />
			<div style={{ position: 'relative' }}>
				<Graduates />
			</div>
			<RunningLine
				imagesDesktop={imagesDesktop.length ? imagesDesktop : fallback}
				imagesMobile={
					imagesMobile.length
						? imagesMobile
						: imagesDesktop.length
							? imagesDesktop
							: fallback
				}
			/>
			<Partners />
			<div style={{ position: 'relative' }}>
				<Faq />
				<Footer />
			</div>
			<JsonLd schema={webPageSchema} />
		</>
	);
};

Home.displayName = 'Home';
export default Home;
