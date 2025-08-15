import type { ComponentProps } from 'react';

import { clsx } from 'clsx';

import styles from './spinner.module.scss';

export type SpinnerProps = ComponentProps<'div'> & {};

export const Spinner = (props: SpinnerProps) => {
  const { className, ...restProps } = props;

  return <div className={clsx(styles.root, className)} {...restProps} />;
};

Spinner.displayName = 'Spinner';
