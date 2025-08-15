'use client';

import { Button } from '@/components/ui';
import { useToggleState } from '@/hooks/client';

export const ThemeSwitcher = () => {
  const [isDark, toggle] = useToggleState();

  const handleClick = () => {
    Object.assign(document.documentElement.style, {
      colorScheme: isDark ? 'light' : 'dark',
    });
    toggle();
  };

  return (
    <Button onClick={handleClick} size={'s'} variant={'outline'}>
      Switch to {isDark ? 'light' : 'dark'}
    </Button>
  );
};

ThemeSwitcher.displayName = 'ThemeSwitcher';
