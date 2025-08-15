import type { ComponentProps } from 'react';

import clsx from 'clsx';

import type { ComponentOrTag, DynamicProps } from '@/types';

import styles from './typography.module.scss';

export type TypographyProps<
  Element extends ComponentOrTag<ComponentProps<Element>>,
> = DynamicProps<Element> & {
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold';
  color?: 'primary' | 'secondary' | 'inherit';
};

const weightCn = {
  regular: styles.weightRegular,
  medium: styles.weightMedium,
  semiBold: styles.weightSemiBold,
  bold: styles.weightBold,
  extraBold: styles.extraBold,
};

const colorCn = {
  inherit: styles.colorInherit,
  primary: styles.colorPrimary,
  secondary: styles.colorSecondary,
};

export const Typography = <
  Element extends ComponentOrTag<ComponentProps<Element>>,
>(
  props: TypographyProps<Element>
) => {
  const {
    children,
    className,
    tag: Component = 'span',
    weight = 'regular',
    color = 'primary',
    ...restProps
  } = props as TypographyProps<'span'>;

  return (
    <Component
      className={clsx(className, styles.root, weightCn[weight], colorCn[color])}
      {...restProps}
    >
      {children}
    </Component>
  );
};

Typography.displayName = 'Typography';
