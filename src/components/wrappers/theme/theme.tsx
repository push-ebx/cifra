import type { ComponentProps, ReactElement } from 'react';
import { cloneElement } from 'react';

import { clsx } from 'clsx';

import styles from './theme.module.scss';

export type ThemeProps = {
  // eslint-disable-next-line
  children: ReactElement<ComponentProps<any>>;
  appearance?: 'system' | 'light' | 'dark';
};

const schemeCn = {
  light: styles.light,
  dark: styles.dark,
  system: styles.system,
};

export const Theme = (props: ThemeProps) => {
  const { children, appearance = 'system' } = props;

  return cloneElement(children, {
    className: clsx(children.props.className, schemeCn[appearance]),
  });
};

Theme.displayName = 'Theme';
