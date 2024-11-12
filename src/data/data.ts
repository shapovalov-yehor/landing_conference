import store from '../img/development/store.webp';
import academy from '../img/development/academy.webp';
import bot from '../img/development/bot.webp';
import creo from '../img/development/creo.webp';
import proxy from '../img/development/proxy.webp';

import cloaking from '../img/clients/cloaking.webp';
import digital from '../img/clients/digital.webp';
import proxyClient from '../img/clients/proxy.webp';

export const navItems = [
  { label: 'Header.about', href: '#about' },
  { label: 'Header.ecosystem', href: '#ecosystem' },
  { label: 'Header.community', href: '#community' },
  { label: 'Header.values', href: '#values' },
  { label: 'Header.achieve', href: '#achieve' },
  { label: 'Header.contacts', href: '#contacts' },
];
export const devItems = [
  {
    headerKey: 'mustageStoreHeader',
    textKey: 'mustageStoreText',
    img: store,
    link: 'https://mustage.site/',
  },
  {
    headerKey: 'mustageProxyHeader',
    textKey: 'mustageProxyText',
    img: proxy,
    link: 'https://proxy.mustage.io/',
  },
  {
    headerKey: 'mustageCreoHeader',
    textKey: 'mustageCreoText',
    img: creo,
    link: 'https://mustage.io/creo',
  },
  {
    headerKey: 'mustageAcademyHeader',
    textKey: 'mustageAcademyText',
    img: academy,
    link: 'https://mustage.io/course',
  },
  {
    headerKey: 'mustageServiceBotHeader',
    textKey: 'mustageServiceBotText',
    img: bot,
    link: 'https://t.me/mustage_service_bot',
  },
];

export const clientsItems = [
  {
    id: 'proxyClient',
    img: proxyClient,
    link: 'Clients.link',
  },
  {
    id: 'cloakingHouse',
    img: cloaking,
    link: 'Clients.link',
  },
  {
    id: 'digitalOcean',
    img: digital,
    link: 'Clients.link',
  },
];

export const futureItems = [
  'Future.products',
  'Future.development',
  'Future.position',
  'Future.tech',
];

export const contactsTexts = [
  {
    textKey: 'supportCreatives',
    name: '@mustage_creo',
    link: 'mustage_creo',
  },
  {
    textKey: 'supportAccounts',
    name: '@mustage_support',
    link: 'mustage_support',
  },
  {
    textKey: 'supportProxies',
    name: '@mustage_proxy',
    link: 'mustage_proxy',
  },
  {
    textKey: 'courseCurator',
    name: '@mustage_study',
    link: 'mustage_study',
  },
];

export const resourseItems = [
  {
    text: 'Footer.profile',
    icon: 'icon-profile',
    link: 'https://mustage.site/',
  },
  {
    text: 'Footer.proxy',
    icon: 'icon-ua-proxy',
    link: 'https://proxy.mustage.io/',
  },
  {
    text: 'Footer.graduation',
    icon: 'icon-graduation',
    link: 'https://mustage.io/course',
  },
  {
    text: 'Footer.creativity',
    icon: 'icon-creativity-order',
    link: 'https://mustage.io/creo',
  },
  {
    text: 'Footer.portfolio',
    icon: 'icon-portfolio',
    link: 'https://t.me/mustage_portfolio',
  },
  {
    text: 'Footer.youtube',
    icon: 'icon-youtube-footer',
    link: 'https://www.youtube.com/@usaffiliate',
  },
  {
    text: 'Footer.telegram',
    icon: 'icon-telegram-footer',
    link: 'https://t.me/mustage_channel',
  },
  {
    text: 'Footer.telegramChat',
    icon: 'icon-telegram-footer',
    link: 'https://t.me/+4oFlq242zzszZmQ6',
  },
  {
    text: 'Footer.instagram',
    icon: 'icon-instagram',
    link: 'https://www.instagram.com/mustage.team/',
  },
  {
    text: 'Footer.tikTok',
    icon: 'icon-tik-tok',
    link: 'https://www.tiktok.com/@mustage.io',
  },
];
