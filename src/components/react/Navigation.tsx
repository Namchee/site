import * as React from 'react';

interface NavigationProps {
  currentPath: string;
}

function Navigation(
  { currentPath }: React.PropsWithoutRef<NavigationProps>,
): JSX.Element {
  const links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
  ];

  const Link = (
    name: string,
    href: string,
  ): JSX.Element => {
    let base = 'w-24 h-12 grid place-items-center rounded-full';
    if (href === currentPath) {
      base = `${base} bg-surface-darker text-content-dark`;
    }

    return (
      <a
        key={href}
        href={href}
        className={base}
        rel="noreferrer noopener"
      >
        {name}
      </a>
    )
  };

  return (
    <nav
      className="fixed bottom-[96px] md:bottom-[56px] left-[50%] -translate-x-[50%]
        z-10
        text-content-light
        p-1
        shadow
        border border-surface-darker
        bg-surface bg-opacity-80
        backdrop-blur
        grid grid-cols-3
        rounded-full"
    >
      {links.map(({ name, href }) => Link(name, href))}
  </nav>
  )
}

export default Navigation;
