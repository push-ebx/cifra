import type { WebPage, WithContext } from 'schema-dts';

import { usersApi } from '@/api';
import { JsonLd } from '@/components/utils';

import { Hero } from './_blocks/hero/hero';
import { Team } from './_blocks/team/team';

const webPageSchema: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://my-site.com',
  name: 'Site Name',
};

export const revalidate = 60;

const Home = async () => {
  const users = await usersApi.getAll();

  return (
    <>
      <Hero />
      <Team members={users} />
      <JsonLd schema={webPageSchema} />
    </>
  );
};

Home.displayName = 'Home';

export default Home;
