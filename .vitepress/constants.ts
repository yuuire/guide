import type { DefaultTheme } from 'vitepress'
export const plainurl = 'yuuire.com'

export const meta = {
    author: 'yuuire',
    name: 'yuuire',
    description: 'Your guide to securing your digital life and protecting your privacy',
    hostname: 'https://guide.' + plainurl,
    plainurl: plainurl,
    sponsor: 'https://not-yet.sobbing',
    repo: 'https://github.com/yuuire/guide',
    keywords: ['privacy', 'advice', 'more tags']
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
  { name: 'Privacy Guides', icon: 'https://www.privacyguides.org/en/assets/brand/logos/png/square/pg-yellow.png', link: 'https://privacyguides.org/'},
  { name: 'FMHY', icon: 'https://github.com/fmhy.png', link: 'https://fmhy.net/adblockvpnguide#privacy' },
  { name: 'StellarSand', icon: 'https://github.com/StellarSand.png', link: 'https://github.com/StellarSand/privacy-settings' },
  { name: 'JDM', icon: 'https://justdeleteme.xyz/assets/icons/apple-touch-icon-144x144-precomposed.png', link: 'https://justdeleteme.xyz' },
  { name: 'The New Oil', icon: 'https://mastodon.thenewoil.org/system/accounts/avatars/111/434/133/959/257/514/original/cf89c8940d9d3bd2.jpg', link: 'https://thenewoil.org/'},
  { name: 'Ken Harris', icon: 'https://cyber.kenharris.io/assets/logo.png', link: 'https://cyber.kenharris.io' },
  { name: 'Anonymous Planet ', icon: 'https://files.mastodon.social/accounts/avatars/108/168/594/170/662/445/original/c374849d273da60e.jpg', link: 'https://anonymousplanet.org' },
  { name: 'Pluja', icon: 'https://github.com/pluja.png', link: 'https://pluja.github.io/awesome-privacy' },
  { name: 'Privacy Tools', icon: 'https://www.privacytools.io/img/favicons/apple-touch-icon.png', link: 'https://www.privacytools.io/' },
  { name: 'EFF', secondary: "& SSD", icon: 'https://www.eff.org/sites/all/themes/phoenix/apple-touch-icon-precomposed.png', link: 'https://www.eff.org/' }, 
]