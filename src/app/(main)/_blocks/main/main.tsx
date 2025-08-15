import { Body, Container, Heading, Image } from '@/components/ui';
import { Counter } from '@/components/widgets';
import { Theme } from '@/components/wrappers';

import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.root}>
      <Container>
        <Heading className={styles.title} tag={'h1'}>
          Шаблон для проекта на Next.js
        </Heading>
        <Body color={'secondary'} tag={'h2'}>
          Даже самая обычная картошка может стать вкуснейшим френч-фрайсом, если
          ее правильно приготовить
        </Body>
        <Image
          alt={'Cat'}
          className={styles.image}
          fetchPriority={'high'}
          height={'50vh'}
          loading={'eager'}
          src={`https://cataas.com/cat?u=${Date.now()}`}
          width={'100%'}
        />
        <div className={styles.actions}>
          <Counter />
          <Counter debounced />
        </div>
      </Container>
      <Container>
        <Theme appearance={'dark'}>
          <div className={styles.inverted}>
            <Heading>Always dark block</Heading>
          </div>
        </Theme>
      </Container>
    </section>
  );
};

Hero.displayName = 'Hero';
