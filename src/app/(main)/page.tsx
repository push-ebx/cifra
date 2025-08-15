import type { WebPage, WithContext } from 'schema-dts';

import { Main } from '@/app/(main)/_blocks/main/main';
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
			<Main />
			<JsonLd schema={webPageSchema} />
		</>
	);
};

Home.displayName = 'Home';

export default Home;
