import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['uk', 'en', 'ru'],
  defaultLocale: 'uk',
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
