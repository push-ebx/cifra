import type { ComponentProps } from 'react';
import NextLink from 'next/link';

import { clsx } from 'clsx';

import styles from './link.module.scss';

export type LinkProps = ComponentProps<typeof NextLink> & {};

export const Link = (props: LinkProps) => {
  const { className, children, ...restProps } = props;

  return (
    <NextLink className={clsx(styles.root, className)} {...restProps}>
      {children}
    </NextLink>
  );
};

Link.displayName = 'Link';
