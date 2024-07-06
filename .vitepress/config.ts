import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { version } from '../package.json'
import { meta, search } from './constants';

const ogImage = `/og.png`
const title = meta.name
const description = meta.description

// Guides

const Guides: DefaultTheme.NavItemWithLink[] = [
  { text: 'Introduction', link: '/guide/' },
  { text: 'Why Privacy Matters', link: '/guide/why' },
  { text: 'How do I start?', link: '/guide/how' },
  { text: 'Security, Privacy & Anonymity', link: '/guide/secprivanon' },
  { text: 'Social Media', link: '/guide/social-media' },
  // { text: '---', link: '/guide/---' },
]

const Understanding: DefaultTheme.NavItemWithLink[] = [
  { text: 'Yourself', link: '/understanding/yourself' },
  { text: 'Account Management', link: '/understanding/account-management' },
  { text: 'Authentication', link: '/understanding/authentication' },
  { text: 'Email Security', link: '/understanding/email-security' },
  { text: 'Operating Systems', link: '/understanding/os' },
  { text: 'Smart Devices', link: '/understanding/smart-devices' },
  { text: 'Cloud Backups/Sync Services', link: '/understanding/cloud' },
  { text: 'VPN', link: '/understanding/vpn' },
  { text: 'DNS', link: '/understanding/dns' },
  { text: 'Surveillance', link: '/understanding/surveillance' },
  { text: 'Data Breaches', link: '/understanding/data-breaches' },
  { text: 'Metadata', link: '/understanding/metadata' },
  { text: 'Encryption', link: '/understanding/encryption' },
]

const AdvancedGuides: DefaultTheme.NavItemWithLink[] = [
  { text: 'Coming Soon', link: '' },
  { text: 'Please consider supporting us', link: '/about/donate' },
  { text: 'Star our github repository', link: meta.repo, target: '_blank'}
  // { text: '---', link: '/guide/---' },
]

// Recommendations

const Internet_Browsing: DefaultTheme.NavItemWithLink[] = [
  { text: 'Tor Browser', link: '/recommendations/internet-browsing/tor' },
  { text: 'Desktop Browsers', link: '/recommendations/internet-browsing/desktop' },
  { text: 'Mobile Browsers', link: '/recommendations/internet-browsing/mobile' },
  { text: 'Search Engines', link: '/recommendations/internet-browsing/search-engines' },
  { text: 'Browser Extensions', link: '/recommendations/internet-browsing/extensions' },
  { text: 'Frontends', link: '/recommendations/internet-browsing/frontends' },
]

const Providers: DefaultTheme.NavItemWithLink[] = [
  { text: 'Email Services', link: '/recommendations/providers/email' },
  { text: 'Email Aliasing', link: '/recommendations/providers/email-aliasing' },
  { text: 'Cloud Storage', link: '/recommendations/providers/cloud-storage' },
  { text: 'VPN Services', link: '/recommendations/providers/vpn-services' },
  { text: 'Proxy', link: '/recommendations/providers/proxy' },
  { text: 'DNS Resolvers', link: '/recommendations/providers/dns-resolvers' },
  { text: 'VPS Providers', link: '/recommendations/providers/vps-providers' },
]

const Software: DefaultTheme.NavItemWithLink[] = [
  { text: 'FOSS Alternatives', link: '/recommendations/software/foss-alternatives' },
  { text: 'Email Clients', link: '/recommendations/software/email-clients' },
  { text: 'Password Managers', link: '/recommendations/software/password-managers' },
  { text: 'Multi-Factor Authentication', link: '/recommendations/software/multi-factor-authentication' },
  { text: 'Encryption Software', link: '/recommendations/software/encryption-software' },
  { text: 'File Sharing', link: '/recommendations/software/file-sharing' },
  { text: 'Productivity Tools', link: '/recommendations/software/productivity-tools' },
  { text: 'Real-Time Communication', link: '/recommendations/software/real-time-communication' },
  { text: 'Metadata Erasers', link: '/recommendations/software/metadata-erasers' },
  { text: 'News Aggregators', link: '/recommendations/software/news-aggregators' },
]

const Hardware: DefaultTheme.NavItemWithLink[] = [
  { text: 'Security Keys', link: '/recommendations/hardware/security-keys' },
]

const Operating_Systems: DefaultTheme.NavItemWithLink[] = [
  { text: 'Android', link: '/recommendations/operating-systems/android' },
  { text: 'Desktop', link: '/recommendations/operating-systems/desktop' },
]

const Miscellaneous: DefaultTheme.NavItemWithLink[] = [
  { text: 'Alternative Networks', link: '/recommendations/miscellaneous/alternative-networks' },
  { text: 'Finances', link: '/recommendations/miscellaneous/finances' },
]

const Recommendations: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Internet Browsing',
    link: '/recommendations/internet-browsing/tor',
  },
  {
    text: 'Providers',
    link: '/recommendations/providers/email-services',
  },
  {
    text: 'Software',
    link: '/recommendations/software/foss-alternatives',
  },
  {
    text: 'Hardware',
    link: '/recommendations/hardware/security-keys',
  },
  {
    text: 'Operating Systems',
    link: '/recommendations/operating-systems/android',
  },
  {
    text: 'Miscellaneous',
    link: '/recommendations/miscellaneous/alternative-networks',
  },
]

// Navbar

const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'Guides',
    items: [
      {
        text: 'Guide',
        items: Guides,
      },
    ],
  },
  {
    text: 'Recommendations',
    items: [
      {
        text: 'Overview',
        link: '/recommendations/',
      },
      {
        text: 'Privacy Tools',
        items: Recommendations,
      },
      {
        text: 'Books',
        link: '/books/',
      },
    ],
  },
  // { text: 'Blog', link: 'https://blog.' + meta.plainurl, target: '_blank' },
  { text: '💚 Donate', link: '/about/donate' },
  {
    text: `${version}`,
    items: [
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Release Notes',
        link: meta.repo + '/releases',
      },
      {
        text: 'Contributing',
        link: meta.repo + '/blob/main/CONTRIBUTING.md',
      },
    ],
  },
]

const SidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: 'Guides',
    items: Guides,
  },
  {
    text: 'Understanding',
    items: Understanding,
  },
  {
    text: 'Part Two',
    collapsed: false,
    items: AdvancedGuides,
  },
  {
    text: 'About',
    link: '/about/',
  },
  {
    text: 'Donate',
    link: '/about/donate/',
  }
]

const SidebarPresets: DefaultTheme.SidebarItem[] = [
  {
    text: 'Overview',
    link: '/recommendations/',
  },
  {
    text: 'Internet Browsing',
    collapsed: false,
    items: Internet_Browsing,
  },
  {
    text: 'Providers',
    collapsed: false,
    items: Providers,
  },
  {
    text: 'Software',
    collapsed: false,
    items: Software,
  },
  {
    text: 'Hardware',
    collapsed: false,
    items: Hardware,
  },
  {
    text: 'Operating Systems',
    collapsed: false,
    items: Operating_Systems,
  },
  {
    text: 'Miscellaneous',
    collapsed: false,
    items: Miscellaneous,
  },
  {
    text: 'Books',
    link: '/books/',
  },
]

// Config

export default defineConfig({
  lang: 'en-US',
  title,
  titleTemplate: `:title | ${title}`,
  description,
  outDir: './dist',
  head: [
    // ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'temporary icon', href: 'https://github.com/yuuire.png', type: 'image/png', sizes: '32x32' }],
    ['meta', { name: 'author', content: meta.author }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: title }],
    ['meta', { name: 'og:description', content: meta.description }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:url', content: meta.hostname }],
  ],
  sitemap: {
    hostname: meta.hostname
  },
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },

  themeConfig: {
    logo: 'https://github.com/yuuire.png',
    nav: Nav,
    search,
    sidebar: {
      '/guide/': SidebarGuide,
      '/understanding/': SidebarGuide,
      '/about/': SidebarGuide,
      '/donate': SidebarGuide,
      
      '/tools/': SidebarPresets,
      '/recommendations/': SidebarPresets,
      '/internet-browsing': SidebarPresets,
    },
    editLink: {
      pattern: meta.repo + '/edit/main/:path',
      text: 'Suggest changes to this page',
    },
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: meta.repo },
      // not yet - /* MATRIX */ { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M.844.735v30.531h2.197v.735H0v-32h3.041v.735zm9.391 9.677v1.547h.041a4.445 4.445 0 0 1 1.489-1.371c.579-.323 1.251-.484 2-.484c.719 0 1.38.141 1.975.417c.599.281 1.047.776 1.359 1.479c.339-.5.803-.943 1.38-1.323c.579-.38 1.267-.573 2.063-.573a5.94 5.94 0 0 1 1.677.224c.521.145.959.38 1.328.703c.365.329.651.751.86 1.272c.203.52.307 1.151.307 1.891v7.635h-3.129v-6.468a11.6 11.6 0 0 0-.048-1.084a2.26 2.26 0 0 0-.239-.88a1.41 1.41 0 0 0-.584-.593c-.255-.152-.609-.224-1.047-.224c-.443 0-.797.083-1.068.249a1.875 1.875 0 0 0-.64.667a2.602 2.602 0 0 0-.308.927a8.042 8.042 0 0 0-.083 1.048v6.359h-3.131v-6.401c0-.339-.005-.672-.025-1a2.633 2.633 0 0 0-.193-.916a1.343 1.343 0 0 0-.552-.672c-.255-.167-.636-.255-1.136-.255c-.151 0-.348.031-.588.099c-.24.067-.479.192-.703.375a2.24 2.24 0 0 0-.589.797c-.161.343-.239.796-.239 1.359v6.62H7.281V10.415zm20.921 20.853V.734h-2.197v-.735H32v32h-3.041v-.735z"/></svg>' }, link: 'https://chat.antfu.me' },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.82v-1.46A8.36 8.36 0 0 0 20.36 12 8.36 8.36 0 0 0 12 3.64V2.18A9.83 9.83 0 0 1 21.82 12 9.83 9.83 0 0 1 12 21.82zm0-5.09A4.74 4.74 0 0 0 16.73 12 4.74 4.74 0 0 0 12 7.27V5.82A6.17 6.17 0 0 1 18.18 12 6.17 6.17 0 0 1 12 18.18zm0-7.27A2.54 2.54 0 0 1 14.55 12 2.54 2.54 0 0 1 12 14.54zM0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0 12 12 0 0 0 0 12z"></path></svg>' }, link: '/about/donate#current-project-donations-goals' },
    ],
  },
})
