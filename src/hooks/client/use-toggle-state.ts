'use client';

import { useState } from 'react';

type ToggleStateReturn = [boolean, () => void] & {
  state: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
};

export const useToggleState = (initialState = false): ToggleStateReturn => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState((prev) => !prev);
  };

  const open = () => {
    setState(true);
  };

  const close = () => {
    setState(false);
  };

  const returnData = [state, toggle] as ToggleStateReturn;

  Object.assign(returnData, {
    state,
    toggle,
    open,
    close,
  });

  return returnData;
};
