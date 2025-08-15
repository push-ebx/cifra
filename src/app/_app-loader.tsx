'use client';

import { useEffect, useRef, useState } from 'react';

import { Body, Spinner } from '@/components/ui';

export const AppLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animation = element.animate(
      { opacity: 0 },
      { duration: 300, easing: 'ease-out', fill: 'forwards' }
    );

    animation.onfinish = () => {
      setIsVisible(false);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={ref} className={'appLoader'}>
      <style>{`
.appLoader {
  position: fixed;
  inset: 0;
  opacity: 0;
  background: var(--background-page);
  color: var(--text-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  animation-name: show;

  animation-delay: 250ms;
  animation-duration: var(--animation-duration-m);
  animation-fill-mode: forwards;
}

html {
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
}

@keyframes show {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
      `}</style>
      <Body size={'l'} weight={'medium'}>
        Loading <Spinner />
      </Body>
    </div>
  );
};

AppLoader.displayName = 'AppLoader';
