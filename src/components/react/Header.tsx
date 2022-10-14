import * as React from 'react';

import { useSpring, animated } from '@react-spring/web';

import { Switch } from '@headlessui/react';

import { useStore } from '@nanostores/react';
import { darkTheme } from '@/stores/theme';

function Header(): JSX.Element {
  const useDarkTheme = useStore(darkTheme);
  const animation = useSpring({
    opacity: useDarkTheme ? 1 : 0,
    transform: useDarkTheme ? 'translateY(0)' : 'translateY(8px)',
  });

  return (
    <div className="w-full
      px-6
      h-20
      max-w-7xl
      mx-auto
      flex justify-between items-center"
  >
    <a href="/" className="text-lg font-bold tracking-tighter">
      NAM•CHÉÉ
    </a>

    <div className="flex items-center text-content-300 text-sm">
      <p className="mr-2 overflow-y-hidden">
        {
          useDarkTheme
            ? <animated.span className="inline-block">
              Dark
            </animated.span>
            : <animated.span className="inline-block">
              Light
            </animated.span>
        }
        Theme
      </p>
      <Switch
        checked={useDarkTheme}
        onChange={() => darkTheme.set(!useDarkTheme)}
        className="relative
          inline-flex items-center
          h-6 w-11
          rounded-full bg-surface-darker"
      >
        <span className="sr-only">Switch Theme</span>
        <span className={`inline-block h-4 w-4 transform rounded-full bg-surface transition ${useDarkTheme ? 'translate-x-6' : 'translate-x-1'}`} />
      </Switch>
    </div>
  </div>
  )
}

export default Header;
