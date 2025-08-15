import type { ComponentProps, ComponentType, JSX } from 'react';

// eslint-disable-next-line
export type ComponentOrTag<Props = any> =
  | keyof JSX.IntrinsicElements
  | ComponentType<Props>;

export type DynamicProps<Element extends ComponentOrTag> = {
  tag?: Element;
} & (Element extends ComponentType<infer Props>
  ? Props
  : Element extends keyof JSX.IntrinsicElements
    ? ComponentProps<Element>
    : never);
