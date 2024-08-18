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
    { text: 'VoIP Providers', link: '/recommendations/providers/voip-providers' },
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
    { text: 'Health & Fitness', link: '/recommendations/software/health-and-fitness' },
    { text: 'Productivity Tools', link: '/recommendations/software/productivity-tools' },
    { text: 'Real-Time Communication', link: '/recommendations/software/real-time-communication' },
    { text: 'Metadata Erasers', link: '/recommendations/software/metadata-erasers' },
    { text: 'News Aggregators', link: '/recommendations/software/news-aggregators' },
]

const Hardware: DefaultTheme.NavItemWithLink[] = [
    { text: 'Security Keys', link: '/recommendations/hardware/security-keys' },
    { text: 'Mobile Phones', link: '/recommendations/hardware/mobile-phones' },
    // { text: 'Data carriers', link: '/recommendations/hardware/data-carriers' }
]

const Operating_Systems: DefaultTheme.NavItemWithLink[] = [
    { text: 'Android', link: '/recommendations/operating-systems/android' },
    { text: 'iOS', link: '/recommendations/operating-systems/ios' },
    { text: 'Linux', link: '/recommendations/operating-systems/linux' },
    { text: 'Windows', link: '/recommendations/operating-systems/windows' },
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
  
const DeviceSettings: DefaultTheme.SidebarItem[] = [
  { text: 'Android', link: '/privacy-settings/devices/android.md' },
  { text: 'Windows', link: '/privacy-settings/devices/windows', collapsed: false, items: [
    {
      text: "11",
      link: "/privacy-settings/devices/windows/11"
    },
    {
      text: "10",
      link: "/privacy-settings/devices/windows/10"
    }
  ] },
  { text: 'iOS', link: '/privacy-settings/devices/ios.md' },
]
  
const ExtensionsSettings: DefaultTheme.NavItemWithLink[] = [
  { text: 'uBlock Origin', link: '/privacy-settings/extensions/ublock-origin' },
]

const SoftwareSettings: DefaultTheme.SidebarItem[] = [
  { text: 'Browsers', collapsed: false, items: [
    { text: 'Firefox', link: '/privacy-settings/software/browsers/firefox', collapsed: true, items: [
      {
        text: "Desktop",
        link: "/privacy-settings/software/browsers/firefox/desktop"
      },
      {
        text: "Mobile",
        link: "/privacy-settings/software/browsers/firefox/mobile"
      },
      {
        text: "Focus",
        link: "/privacy-settings/software/browsers/firefox/focus"
      },
    ] },
    { text: 'Chrome', link: '/privacy-settings/software/browsers/chrome', collapsed: true, items: [
      {
        text: "Desktop",
        link: "/privacy-settings/software/browsers/chrome/desktop"
      },
      {
        text: "Mobile",
        link: "/privacy-settings/software/browsers/chrome/mobile"
      }
    ] },
    { text: 'Brave', link: '/privacy-settings/software/browsers/brave', collapsed: true, items: [
      {
        text: "Desktop",
        link: "/privacy-settings/software/browsers/brave/desktop"
      },
      {
        text: "Mobile",
        link: "/privacy-settings/software/browsers/brave/mobile"
      }
    ] },
    { text: 'DuckDuckGo', link: '/privacy-settings/software/browsers/duckduckgo', collapsed: true, items: [
      {
        text: "Desktop",
        link: "/privacy-settings/software/browsers/duckduckgo/desktop"
      },
      {
        text: "Mobile",
        link: "/privacy-settings/software/browsers/duckduckgo/mobile"
      }
    ] },
    { text: 'Microsoft Edge', link: '/privacy-settings/software/browsers/microsoft-edge', collapsed: true, items: [
      {
        text: "Desktop",
        link: "/privacy-settings/software/browsers/microsoft-edge/desktop"
      },
      {
        text: "Mobile",
        link: "/privacy-settings/software/browsers/microsoft-edge/mobile"
      }
    ] },
    { text: 'Mullvad', link: '/privacy-settings/software/browsers/mullvad/desktop', },
    { text: 'Cromite', link: '/privacy-settings/software/browsers/cromite', },
    { text: 'Safari', link: '/privacy-settings/software/browsers/safari', },
    { text: 'jQuarks', link: '/privacy-settings/software/browsers/jquarks', },
  ] },
  { text: 'Search Engines', collapsed: false, items: [
    {
      text: "DuckDuckGo",
      link: "/privacy-settings/software/search-engines/duckduckgo"
    },
    {
      text: "Brave Search",
      link: "/privacy-settings/software/search-engines/brave-search"
    },
    {
      text: "Google Search",
      link: "/privacy-settings/software/search-engines/google-search"
    },
    {
      text: "Startpage",
      link: "/privacy-settings/software/search-engines/startpage"
    },
    {
      text: "SearXNG",
      link: "/privacy-settings/software/search-engines/searxng"
    }
  ] },
  { text: 'Password Managers', collapsed: false, items: [
    {
      text: "Bitwarden",
      link: "/privacy-settings/software/password-managers/bitwarden"
    },
    {
      text: "1Password",
      link: "/privacy-settings/software/password-managers/1password"
    }
  ] },
  { text: 'Social', collapsed: false, items: [
    {
      text: "Telegram",
      link: "/privacy-settings/social/telegram"
    },
    {
      text: "Discord",
      link: "/privacy-settings/social/discord"
    },
    {
      text: "Proton",
      link: "/privacy-settings/social/proton"
    },
    {
      text: "Snapchat",
      link: "/privacy-settings/social/snapchat"
    },
    {
      text: "Reddit",
      link: "/privacy-settings/social/reddit"
    },
    // {
    //   text: "Steam",
    //   link: "/privacy-settings/social/steam"
    // },
    {
      text: "Signal",
      link: "/privacy-settings/social/signal"
    },
    {
      text: "TikTok",
      link: "/privacy-settings/social/tiktok"
    },
    {
      text: "X",
      link: "/privacy-settings/social/x"
    },
    {
      text: "LinkedIn",
      link: "/privacy-settings/social/linkedin"
    },
    { text: 'Google', link: '/privacy-settings/social/google', collapsed: true, items: [
      {
        text: "Google Account",
        link: "/privacy-settings/social/google/account"
      },
      {
        text: "YouTube",
        link: "/privacy-settings/social/google/youtube"
      },
      {
        text: "Gmail",
        link: "/privacy-settings/social/google/gmail"
      }
    ] },
    { text: 'Meta', link: '/privacy-settings/social/meta', collapsed: true, items: [
      {
        text: "Facebook",
        link: "/privacy-settings/social/meta/facebook"
      },
      {
        text: "Messenger",
        link: "/privacy-settings/social/meta/messenger"
      },
      {
        text: "Instagram",
        link: "/privacy-settings/social/meta/instagram"
      },
      {
        text: "WhatsApp",
        link: "/privacy-settings/social/meta/whatsapp"
      }
    ] },
  ] },
  { text: 'Uncategorized', collapsed: false, items: [
    {
      text: "Amazon",
      link: "/privacy-settings/uncategorized/amazon"
    },
    {
      text: "ChatGPT",
      link: "/privacy-settings/uncategorized/chatgpt"
    },
    {
      text: "Visual Studio Code",
      link: "/privacy-settings/uncategorized/visualstudiocode"
    },
    {
      text: "Spotify",
      link: "/privacy-settings/uncategorized/spotify"
    },
    {
      text: "Zoom",
      link: "/privacy-settings/uncategorized/zoom"
    },
  ] },
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
        ['meta', { name: 'keywords', content: meta.keywords.join(', ') }],
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
              text: '💙 Donate',
              link: meta.sponsor
            },
        ],
        sidebar: {
            '/guides/': SidebarGuide,
            '/understanding/': SidebarGuide,
            // '/donate/': SidebarGuide,
            
            '/tools/': SidebarRecommendations,
            '/recommendations/': SidebarRecommendations,
            '/internet-browsing': SidebarRecommendations,
      
            '/privacy-settings/': [
              {
                text: 'Information',
                link: '/privacy-settings/',
              },
              {
                text: 'Contributing',
                link: meta.repo + '#Contributing',
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
                text: 'Devices',
                items: DeviceSettings,
              }
            ],
          },
        editLink: {
            pattern: meta.repo + '/edit/main/:path',
            text: 'Edit this page on GitHub',
        },
        outline: 'deep',
        socialLinks: [
            { icon: 'github', link: meta.repo },
        ],
    }
})
