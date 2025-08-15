import type { ComponentProps, JSX } from 'react';

import { clsx } from 'clsx';

import styles from './container.module.scss';

export type ContainerProps<T extends keyof JSX.IntrinsicElements> =
  ComponentProps<T> & {
    tag?: T;
  };

export const Container = <T extends keyof JSX.IntrinsicElements>(
  props: ContainerProps<T>
) => {
  const { className, children, tag: Component = 'div', ...restProps } = props;

  return (
    // @ts-expect-error Не сработало сужение типов
    <Component className={clsx(styles.root, className)} {...restProps}>
      {children}
    </Component>
  );
};

Container.displayName = 'Container';
