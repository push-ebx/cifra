import type { ComponentProps } from 'react';

import { clsx } from 'clsx';

import type { ComponentOrTag } from '@/types';

import type { TypographyProps } from '../typography';
import { Typography } from '../typography';

import styles from './heading.module.scss';

export type HeadingProps<
  Element extends ComponentOrTag<ComponentProps<Element>>,
> = TypographyProps<Element> & {
  level?: '1' | '2';
};

const levelCn = {
  '1': styles.level1,
  '2': styles.level2,
};

export const Heading = <
  Element extends ComponentOrTag<ComponentProps<Element>>,
>(
  props: HeadingProps<Element>
) => {
  const {
    className,
    children,
    level = '1',
    weight = 'semiBold',
    ...restProps
  } = props as HeadingProps<'span'>;

  return (
    <Typography
      className={clsx(styles.root, levelCn[level], className)}
      weight={weight}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

Heading.displayName = 'Heading';
