import type { ComponentProps } from 'react';

import { clsx } from 'clsx';

import type { ComponentOrTag, DynamicProps } from '@/types';

import styles from './tappable.module.scss';

export type TappableProps<
  Element extends ComponentOrTag<ComponentProps<Element>>,
> = DynamicProps<Element> & {
  hasHover?: boolean;
  hasActive?: boolean;
};

export const Tappable = <
  Element extends ComponentOrTag<ComponentProps<Element>>,
>(
  props: TappableProps<Element>
) => {
  const {
    children,
    tag: Component = 'span',
    hasActive = true,
    hasHover = true,
    className,
    ...restProps
  } = props as TappableProps<'span'>;

  return (
    <Component
      className={clsx(styles.root, className)}
      data-has-active={hasActive}
      data-has-hover={hasHover}
      {...restProps}
    >
      <span className={styles.main}>{children}</span>
    </Component>
  );
};

Tappable.displayName = 'Tappable';
