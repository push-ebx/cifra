import { Body, Container, Link } from '@/components/ui';
import { Breakpoint } from '@/components/wrappers';

import { ThemeSwitcher } from '../theme-switcher/theme-switcher';

import styles from './header.module.scss';

export const Header = () => {
  return (
    <Container className={styles.root} tag={'header'}>
      <Body
        className={styles.logo}
        href={'https://www.cursor.agency'}
        size={'l'}
        tag={Link}
        target={'_blank'}
        weight={'semiBold'}
      >
        Cursor Агенси
      </Body>
      <Breakpoint min={'laptop'}>
        <div className={styles.content}>
          <ThemeSwitcher />
        </div>
      </Breakpoint>
      <Breakpoint max={'tablet'} min={'tablet'}>
        <div className={styles.actions}>Tablet Actions</div>
      </Breakpoint>
      <Breakpoint max={'mobile'}>
        <div className={styles.mobileActions}>Mobile Actions</div>
      </Breakpoint>
    </Container>
  );
};

Header.displayName = 'Header';
