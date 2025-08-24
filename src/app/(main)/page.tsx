import fs from 'fs';
import path from 'path';
import type { WebPage, WithContext } from 'schema-dts';

import { AcceleratorIs } from '@/app/(main)/_blocks/accelerator-is/accelerator-is';
import { CifraFroU } from '@/app/(main)/_blocks/cifra-fro-u/cifra-fro-u';
import { EducationalProgram } from '@/app/(main)/_blocks/educational-program/educational-program';
import { EducationalProgramMobile } from '@/app/(main)/_blocks/educational-program-mobile/educational-program-mobile';
import { EducationalProgramV2 } from '@/app/(main)/_blocks/educational-program-v2/educational-program-v2';
import { Faq } from '@/app/(main)/_blocks/faq/faq';
import { Footer } from '@/app/(main)/_blocks/footer/footer';
import { Graduates } from '@/app/(main)/_blocks/graduates/graduates';
import { Hero } from '@/app/(main)/_blocks/hero/hero';
import { Partners } from '@/app/(main)/_blocks/partners/partners';
import { PrizeFund } from '@/app/(main)/_blocks/prize-fund/prize-fund';
import { RunningLine } from '@/app/(main)/_blocks/running-line/running-line';
import { Slider } from '@/app/(main)/_blocks/slider/slider';
import { Timeline } from '@/app/(main)/_blocks/timeline/timeline';
import { Tracks } from '@/app/(main)/_blocks/tracks/tracks';
import { VideoSection } from '@/app/(main)/_blocks/video-section/video-section';
import { WhatDoUGet } from '@/app/(main)/_blocks/what-do-u-get/what-do-u-get';
import { JsonLd } from '@/components/utils';
import { Menu } from '@/components/widgets';
import { FixedButtons } from '@/components/widgets/fixed-buttons/fixed-buttons';

const webPageSchema: WithContext<WebPage> = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	url: 'https://my-site.com',
	name: 'Site Name',
};

export const revalidate = 60;

const Home = async () => {
	const imagesDir = path.join(process.cwd(), 'public', 'images', 'gallery');
	let images: string[] = [];

	try {
		images = fs
			.readdirSync(imagesDir)
			.filter((f) => /\.(png|jpe?g|webp|gif|avif)$/i.test(f))
			.map((f) => `/images/gallery/${f}`);
	} catch (e) {
		// опционально: лог/фоллбек
		images = [
			'/images/gallery/1.webp',
			'/images/gallery/2.webp',
			'/images/gallery/3.webp',
		];
	}

	return (
		<>
			<Hero />
			<div style={{ position: 'relative' }}>
				{/*<AcceleratorIs />*/}
				{/*<PrizeFund />*/}
			</div>
			<div style={{ position: 'relative' }}>
				<Tracks />
				{/*<EducationalProgram />*/}
				<EducationalProgramV2 />
				<EducationalProgramMobile />
			</div>
			<VideoSection />
			<WhatDoUGet />
			<CifraFroU />
			<Slider />
			<Timeline />
			<div style={{ position: 'relative' }}>
				<Graduates />
			</div>
			<RunningLine images={images} />
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
