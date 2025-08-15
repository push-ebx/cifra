'use client';

import { useState } from 'react';

import { Button } from '@/components/ui';
import { useDebouncedValue } from '@/hooks/client';

export const Counter = ({ debounced }: { debounced?: boolean }) => {
  const [value, setValue] = useState(0);
  const debouncedValue = useDebouncedValue(value);

  const handleClick = () => {
    setValue((prev) => prev + 1);
  };

  const renderText = () => {
    if (debounced) return `Debounced value is: ${debouncedValue}`;
    return `Value is: ${value}`;
  };

  return (
    <Button onClick={handleClick} variant={debounced ? 'outline' : 'primary'}>
      {renderText()}
    </Button>
  );
};

Counter.displayName = 'Counter';
