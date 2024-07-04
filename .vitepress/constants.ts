import type { DefaultTheme } from 'vitepress'
export const plainurl = 'yuuire.com'

export const meta = {
    author: 'yuuire',
    name: 'yuuire',
    description: 'Your guide to securing your digital life and protecting your privacy',
    hostname: 'https://guide.' + plainurl,
    plainurl: plainurl,
    sponsor: 'https://liberapay.com/yuuire/donate',
    repo: 'https://github.com/yuuire/guide',
    keywords: ['privacy', 'windows', 'advice', 'macos', 'linux', 'markdown', 'security', 'website', 'anonymity', 'guide', 'privacy-online', 'opsec', 'anonymization', 'privacy protection', 'privacy tools', 'privacy guides', 'tor', 'security guides', 'data breach', 'metadata', 'smart devices']
}

// credits to fmhy.net
export const search: DefaultTheme.Config['search'] = {
    options: {
        miniSearch: {
        options: {
            tokenize: (text) => text.split(/[\n\r #%*,=/:;?[\]{}()&]+/u),
            processTerm: (term, fieldName) => {
            term = term
                .trim()
                .toLowerCase()
                .replace(/^\.+/, '')
                .replace(/\.+$/, '')
            const stopWords = [
                'frontmatter',
                '$frontmatter.synopsis',
                'and',
                'about',
                'but',
                'now',
                'the',
                'with',
                'you'
            ]
            if (term.length < 2 || stopWords.includes(term)) return false

            if (fieldName === 'text') {
                const parts = term.split('.')
                if (parts.length > 1) {
                const newTerms = [term, ...parts]
                    .filter((t) => t.length >= 2)
                    .filter((t) => !stopWords.includes(t))
                return newTerms
                }
            }
            return term
            }
        },
        searchOptions: {
            combineWith: 'AND',
            fuzzy: true,
            // @ts-ignore
            boostDocument: (
            documentId,
            term,
            storedFields: Record<string, string | string[]>
            ) => {
            const titles = (storedFields?.titles as string[])
                .filter((t) => Boolean(t))
                .map((t) => t.toLowerCase())
            if (documentId.match(/\/posts/)) return -5

            const titleIndex =
                titles
                .map((t, i) => (t?.includes(term) ? i : -1))
                .find((i) => i >= 0) ?? -1
            if (titleIndex >= 0) return 10000 - titleIndex

            return 1
            }
        }
        },
        detailedView: true
    },
    provider: 'local'
}

export interface Inspirations {
  icon: string
  name: string
  link?: string
  target?: string
  secondary?: string
}

export const inspirations: Inspirations[] = [
    { name: 'vnlvcky', icon: '../assets/avatars/vnlvcky.png', secondary: 'Contributor'},
    { name: 'Privacy Guides', icon: '../assets/avatars/privacy-guides.png', link: 'https://privacyguides.org/'},
    { name: 'FMHY', icon: '../assets/avatars/fmhy.png', link: 'https://fmhy.net/adblockvpnguide#privacy' },
    { name: 'StellarSand', icon: '../assets/avatars/stellarsand.png', link: 'https://github.com/StellarSand/privacy-settings' },
    { name: 'JDM', icon: '../assets/avatars/jdm.png', link: 'https://justdeleteme.xyz' },
    { name: 'The New Oil', icon: '../assets/avatars/thenewoil.png', link: 'https://thenewoil.org/'},
    { name: 'Ken Harris', icon: '../assets/avatars/kenharris.png', link: 'https://cyber.kenharris.io' },
    { name: 'Anonymous Planet ', icon: '../assets/avatars/anonymous-planet.png', link: 'https://anonymousplanet.org' },
    { name: 'Pluja', icon: '../assets/avatars/pluja.png', link: 'https://pluja.github.io/awesome-privacy' },
    { name: 'Privacy Tools', icon: '../assets/avatars/privacy-tools.png', link: 'https://www.privacytools.io/' },
    { name: 'EFF & SSD', icon: '../assets/avatars/eff.png', link: 'https://www.eff.org/' },
]