import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['zh', 'en', 'es'],
  defaultLocale: 'zh',
  localePrefix: 'always',
  pathnames: {
    '/': '/',
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
    '/que-ver-en-guatape': '/que-ver-en-guatape',
    '/zocalos-de-guatape': '/zocalos-de-guatape',
    '/calle-del-recuerdo': '/calle-del-recuerdo',
    '/piedra-del-penol': '/piedra-del-penol',
    '/como-llegar-desde-medellin': '/como-llegar-desde-medellin',
  },
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
