import type { WebPage, WithContext } from 'schema-dts';

import { AcceleratorIs } from '@/app/(main)/_blocks/accelerator-is/accelerator-is';
import { EducationalProgram } from '@/app/(main)/_blocks/educational-program/educational-program';
import { Hero } from '@/app/(main)/_blocks/hero/hero';
import { PrizeFund } from '@/app/(main)/_blocks/prize-fund/prize-fund';
import { Tracks } from '@/app/(main)/_blocks/tracks/tracks';
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
			<AcceleratorIs />
			<PrizeFund />
			<Tracks />
			<EducationalProgram />
			<Tracks />
			<JsonLd schema={webPageSchema} />
		</>
	);
};

Home.displayName = 'Home';

export default Home;
