import type { DefaultTheme } from 'vitepress'
export const plainurl = 'yuuire.com'

export const meta = {
    author: 'yuuire',
    name: 'yuuire',
    description: 'A Complete Guide To Privacy, Security & Anonymity',
    hostname: 'https://guide.' + plainurl,
    plainurl: plainurl,
    sponsor: 'https://github.com/sponsors/yuuire',
    repo: 'https://github.com/yuuire/guide',
    keywords: ['privacy', 'windows', 'advice', 'macos', 'linux', 'markdown', 'security', 'website', 'anonymity', 'guide', 'privacy-online', 'opsec', 'anonymization', 'privacy protection', 'privacy tools', 'privacy guides', 'tor', 'security guides', 'data breach', 'metadata', 'smart devices']
}

// credits to fmhy.net
export const search: DefaultTheme.Config['search'] = {
    options: {
        miniSearch: {
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