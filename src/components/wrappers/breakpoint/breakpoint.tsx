import type { ComponentProps, ReactElement } from 'react';
import { cloneElement } from 'react';

import { clsx } from 'clsx';

import styles from './breakpoint.module.scss';

type Breakpoint = 'mobile' | 'tablet' | 'laptop' | 'desktop';

export type BreakpointProps = {
  // eslint-disable-next-line
  children: ReactElement<ComponentProps<any>>;
  min?: Breakpoint;
  max?: Breakpoint;
};

const minCn = {
  mobile: styles.minMobile,
  tablet: styles.minTablet,
  laptop: styles.minLaptop,
  desktop: styles.minDesktop,
};

const maxCn = {
  mobile: styles.maxMobile,
  tablet: styles.maxTablet,
  laptop: styles.maxLaptop,
  desktop: styles.maxDesktop,
};

export const Breakpoint = (props: BreakpointProps) => {
  const { children, min = 'mobile', max = 'desktop' } = props;

  return cloneElement(children, {
    className: clsx(
      children.props.className,
      styles.root,
      min && minCn[min],
      max && maxCn[max]
    ),
  });
};

Breakpoint.displayName = 'Breakpoint';
