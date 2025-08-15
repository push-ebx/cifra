import type { PropsWithChildren, ReactNode } from 'react';

import { Spinner } from '@/components/ui';

type LoaderProps = PropsWithChildren & {
  isLoading?: boolean;
  loader?: ReactNode;
  error?: ReactNode;
};

export const Loader = (props: LoaderProps) => {
  const { loader = <Spinner />, isLoading, error, children } = props;

  if (isLoading) return <div>{loader}</div>;
  if (error) return <div>{error}</div>;
  return children;
};

Loader.displayName = 'Loader';
