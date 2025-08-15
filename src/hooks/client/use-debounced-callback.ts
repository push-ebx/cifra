'use client';

import { useCallback, useMemo, useRef } from 'react';

import { debounce } from '@/utils';

export const useDebounceCallback = <Params extends unknown[], Return>(
  callback: (...args: Params) => Return,
  delay: number = 500
) => {
  const callbackRef = useRef<typeof callback>(callback);
  callbackRef.current = callback;

  const debouncedCallback = useCallback((...args: Params) => {
    const callback = callbackRef.current;
    return callback(...args);
  }, []);

  return useMemo(
    () => debounce(debouncedCallback, delay),
    [debouncedCallback, delay]
  );
};
