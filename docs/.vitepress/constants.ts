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