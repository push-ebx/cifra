import type { WebPage, WithContext } from 'schema-dts';

import { AcceleratorIs } from '@/app/(main)/_blocks/accelerator-is/accelerator-is';
import { CifraFroU } from '@/app/(main)/_blocks/cifra-fro-u/cifra-fro-u';
import { EducationalProgram } from '@/app/(main)/_blocks/educational-program/educational-program';
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
import { Button } from '@/components/ui';
import { JsonLd } from '@/components/utils';

const webPageSchema: WithContext<WebPage> = {
	'@context': 'https://schema.org',
	'@type': 'WebPage',
	url: 'https://my-site.com',
	name: 'Site Name',
};

export const revalidate = 60;

const Home = async () => {
	return (
		<>
			<Hero />
			{/*<div style={{ position: 'relative' }}>*/}
			{/*	<AcceleratorIs />*/}
			{/*	<PrizeFund />*/}
			{/*</div>*/}
			{/*<div style={{ position: 'relative' }}>*/}
			{/*	<Tracks />*/}
			{/*	<EducationalProgram />*/}
			{/*</div>*/}
			{/*<VideoSection />*/}
			{/*<WhatDoUGet />*/}
			{/*<CifraFroU />*/}
			<Slider />
			<Timeline />
			<div style={{ position: 'relative' }}>
				<Graduates />
			</div>
			<RunningLine />
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
