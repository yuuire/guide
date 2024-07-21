import { defineConfig } from 'vitepress'
import { meta, search } from './constants'
import type { DefaultTheme } from 'vitepress'

const ogImage = `/og.png`
const title = meta.name
const description = meta.description

// Guides

const Guides: DefaultTheme.NavItemWithLink[] = [
    { text: 'Introduction', link: '/guides/introduction' },
    { text: 'Why Privacy Matters', link: '/guides/why' },
    { text: 'How do I start?', link: '/guides/how' },
    { text: 'Security, Privacy & Anonymity', link: '/guides/secprivanon' },
    { text: 'Social Media', link: '/guides/social-media' },
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

// Recommendations

const Internet_Browsing: DefaultTheme.NavItemWithLink[] = [
    { text: 'Tor Browser', link: '/recommendations/internet-browsing/tor-browser' },
    { text: 'Desktop Browsers', link: '/recommendations/internet-browsing/desktop-browsers' },
    { text: 'Mobile Browsers', link: '/recommendations/internet-browsing/mobile-browsers' },
    { text: 'Search Engines', link: '/recommendations/internet-browsing/search-engines' },
    { text: 'Browser Extensions', link: '/recommendations/internet-browsing/browser-extensions' },
    { text: 'Alternative Frontends', link: '/recommendations/internet-browsing/alternative-frontends' },
]

const Providers: DefaultTheme.NavItemWithLink[] = [
    { text: 'Email Services', link: '/recommendations/providers/email-services' },
    { text: 'Email Aliasing', link: '/recommendations/providers/email-aliasing' },
    { text: 'Cloud Storage', link: '/recommendations/providers/cloud-storage' },
    { text: 'VPN Services', link: '/recommendations/providers/vpn-services' },
    { text: 'Proxy Services', link: '/recommendations/providers/proxy-services' },
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
    // { text: 'Data carriers', link: '/recommendations/hardware/data-carriers' }
]

const Operating_Systems: DefaultTheme.NavItemWithLink[] = [
    { text: 'Android', link: '/recommendations/operating-systems/android' },
    // { text: 'iOS', link: '/recommendations/operating-systems/ios' },
    { text: 'Linux', link: '/recommendations/operating-systems/linux' },
    // { text: 'Windows', link: '/recommendations/operating-systems/windows' },
]

const Miscellaneous: DefaultTheme.NavItemWithLink[] = [
    { text: 'Alternative Networks', link: '/recommendations/miscellaneous/alternative-networks' },
    { text: 'Finances', link: '/recommendations/miscellaneous/finances' },
    { text: 'Books', link: '/recommendations/miscellaneous/books' },
]

const SidebarGuide: DefaultTheme.SidebarItem[] = [
    {
      text: 'Guides',
      items: Guides,
    },
    {
      text: 'Understanding',
      items: Understanding,
    }
  ]
  
  const SidebarRecommendations: DefaultTheme.SidebarItem[] = [
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
  ]
  
  const MobileSettings: DefaultTheme.NavItemWithLink[] = [
    { text: 'Android', link: '/privacy-settings/mobile/android.md' },
    { text: 'iOS', link: '/privacy-settings/mobile/ios.md' },
  ]
  
  const ExtensionsSettings: DefaultTheme.NavItemWithLink[] = [
    { text: 'uBlock Origin', link: '/privacy-settings/extensions/ublock-origin' },
  ]

  const SoftwareSettings: DefaultTheme.NavItemWithLink[] = [
    { text: 'DuckDuckGo', link: '/privacy-settings/software/duckduckgo' },
    { text: 'Firefox', link: '/privacy-settings/software/firefox' },
  ]
  
  const SidebarSettings: DefaultTheme.SidebarItem[] = [
    {
      text: 'Information',
      link: '/privacy-settings/',
    },
    {
      text: 'Contributing',
      link: meta.repo + '/blob/main/CONTRIBUTING.md',
    },
    {
      text: 'Extensions',
      items: ExtensionsSettings,
    },
    {
      text: 'Software',
      items: SoftwareSettings,
    },
    {
      text: 'Mobile',
      items: MobileSettings,
    }
  ]
  

export default defineConfig({
    lang: 'en-US',
    titleTemplate: `:title | ${title}`,
    title,
    description,
    outDir: './dist',
    lastUpdated: true,
    cleanUrls: true,
    ignoreDeadLinks: true,
    sitemap: {
        hostname: meta.hostname
    },
    markdown: {
        theme: {
            light: 'github-light',
            dark: 'github-dark'
        },
    },
    head: [
        ['link', { rel: 'icon', href: '/assets/logo.png', type: 'image/png', sizes: '32x32' }],
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
    themeConfig: {
        search,
        logo: '/assets/logo.png',
        nav: [
            {
              text: 'Guides',
              link: '/guides/introduction'
            },
            {
              text: 'Recommendations',
              link: '/recommendations/'
            },
            {
              text: 'Privacy Settings',
              link: '/privacy-settings/'
            },
            {
              text: 'About',
              link: '/about/'
            },
            {
              text: '🩵 Donate',
              link: '/donate/'
            },
        ],
        sidebar: {
            '/guides/': SidebarGuide,
            '/understanding/': SidebarGuide,
            '/donate/': SidebarGuide,
            
            '/tools/': SidebarRecommendations,
            '/recommendations/': SidebarRecommendations,
            '/internet-browsing': SidebarRecommendations,
      
            '/privacy-settings/': SidebarSettings,
          },
        editLink: {
            pattern: meta.repo + '/edit/main/:path',
            text: 'Edit this page on GitHub',
        },
        outline: 'deep',
        socialLinks: [
            { icon: 'github', link: meta.repo },
            { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.82v-1.46A8.36 8.36 0 0 0 20.36 12 8.36 8.36 0 0 0 12 3.64V2.18A9.83 9.83 0 0 1 21.82 12 9.83 9.83 0 0 1 12 21.82zm0-5.09A4.74 4.74 0 0 0 16.73 12 4.74 4.74 0 0 0 12 7.27V5.82A6.17 6.17 0 0 1 18.18 12 6.17 6.17 0 0 1 12 18.18zm0-7.27A2.54 2.54 0 0 1 14.55 12 2.54 2.54 0 0 1 12 14.54zM0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0 12 12 0 0 0 0 12z"></path></svg>' }, link: '/donate#current-project-donations-goals' },
        ],
    }
})
