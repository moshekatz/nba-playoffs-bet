import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Container(props) {
  // const router = useRouter();
  const { children } = props;

  return (
    <div className="bg-white">
      <Head>
        <title>NBA Playoffs Bet</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='80'>🏀</text></svg>"
        />
      </Head>
      <Navigation />
      <main
        id="skip"
        className="bg-gray-50 min-h-screen px-4 py-24 md:py-32 lg:px-0"
      >
        {children}
      </main>
    </div>
  );
}

const routes = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Schedule',
    path: '/schedule',
  },
  {
    label: 'Stats',
    path: '/stats',
  },
  {
    label: 'Playground',
    path: '/playground',
  },
];

function Navigation() {
  return (
    <div className="fixed top-0 z-10 w-full py-2 bg-white border-b border-gray-400 bg-opacity-80 shadow-sm filter-blur">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <MobileNav />
      <DesktopNav />
    </div>
  );
}

function MobileNav() {
  const router = useRouter();
  const currPathName = router.pathname;
  const [isExpanded, setIsExpanded] = React.useState(false);
  const mobileTitle =
    currPathName === '/'
      ? 'Home'
      : routes
          .filter((r) => r.path !== '/')
          .find((r) => currPathName.includes(r.path))?.label;
  return (
    <div className="grid grid-cols-1 md:hidden">
      <div className="flex items-center pr-4 text-primary">
        <button
          className="p-4 pl-4 -my-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <span className="sr-only">Close navigation menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </>
          ) : (
            <>
              <span className="sr-only">Open navigation menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </>
          )}
        </button>
        <p className="font-sans text-sm font-semibold clamp-1 text-primary">
          {mobileTitle}
        </p>
      </div>
      {isExpanded && (
        <div className="w-full h-px mt-2 bg-gray-1000 bg-opacity-10" />
      )}
      {isExpanded && (
        <nav>
          {routes.map((route) => {
            const defaultClasses = `flex font-sans items-center pl-12 py-4 font-semibold text-sm text-primary text-opacity-80`;

            return (
              <Link href={route.path} key={route.path}>
                <a className={`${defaultClasses}`}>{route.label}</a>
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}

function DesktopNav() {
  const router = useRouter();

  return (
    <nav className="hidden max-w-screen-md grid-cols-4 gap-1 mx-auto md:grid">
      {routes.map((route) => {
        const isActive =
          router.pathname === '/'
            ? route.label === 'Home'
            : router.pathname.includes(route.path) && route.label !== 'Home';
        const defaultClasses =
          'font-sans font-semibold flex rounded items-center text-opacity-40 justify-center py-2 text-sm';
        {
          /* const activeClasses = 'bg-gray-900 bg-opacity-5 text-primary'; */
        }
        const activeClasses =
          'bg-gradient-to-br from-blue-300 to-blue-200 text-gray-900 text-opacity-100 opacity-75';
        const inactiveClasses =
          'hover:bg-gradient-to-br hover:from-blue-300 hover:to-blue-200 hover:text-gray-900 hover:text-opacity-100 hover:opacity-50';
        return (
          <Link href={route.path} key={route.path}>
            <a
              className={`
                ${defaultClasses} 
                ${isActive ? activeClasses : inactiveClasses}`}
            >
              {route.label}
            </a>
          </Link>
        );
      })}
    </nav>
  );
}
