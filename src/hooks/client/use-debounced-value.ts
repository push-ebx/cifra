'use client';

import { useEffect, useRef, useState } from 'react';

import { useDebounceCallback } from './use-debounced-callback';

export const useDebouncedValue = <T>(value: T, timeout = 500) => {
  const previousValueRef = useRef(value);
  const [debouncedValue, setDebounceValue] = useState(value);

  const debouncedSetState = useDebounceCallback(setDebounceValue, timeout);

  useEffect(() => {
    if (previousValueRef.current === value) return;
    debouncedSetState(value);
    previousValueRef.current = value;
  }, [debouncedSetState, value]);

  return debouncedValue;
};
