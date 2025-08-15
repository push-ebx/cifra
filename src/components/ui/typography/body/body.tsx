import type { ComponentProps } from 'react';

import { clsx } from 'clsx';

import type { ComponentOrTag } from '@/types';

import type { TypographyProps } from '../typography';
import { Typography } from '../typography';

import styles from './body.module.scss';

export type BodyProps<Element extends ComponentOrTag<ComponentProps<Element>>> =
  TypographyProps<Element> & {
    size?: 'l' | 'm' | 's';
  };

const sizeCn = {
  l: styles.sizeL,
  m: styles.sizeM,
  s: styles.sizeS,
};

export const Body = <Element extends ComponentOrTag<ComponentProps<Element>>>(
  props: BodyProps<Element>
) => {
  const {
    className,
    children,
    size = 'm',
    weight = 'regular',
    ...restProps
  } = props as BodyProps<'span'>;

  return (
    <Typography
      className={clsx(styles.root, sizeCn[size], className)}
      weight={weight}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

Body.displayName = 'Heading';
