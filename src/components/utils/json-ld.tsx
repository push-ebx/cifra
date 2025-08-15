import { useId } from 'react';
import Script from 'next/script';

import type { Thing, WithContext } from 'schema-dts';

export const JsonLd = <T extends Thing>(props: {
  schema: WithContext<T> | WithContext<T>[];
}) => {
  const id = useId();

  return (
    <Script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(props.schema) }}
      id={id}
      type="application/ld+json"
    />
  );
};

JsonLd.displayName = 'JsonLd';
