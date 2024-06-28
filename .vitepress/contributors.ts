import type { DefaultTheme } from 'vitepress'
import { meta } from './constants';

export interface Contributor {
  name: string
  avatar: string
}

export interface Contributors extends Partial<DefaultTheme.TeamMember> {
  avatar: string
  name: string
  git?: string
  sponsor?: string
  title?: string
  org?: string
  website?: string
  desc?: string
}

function createLinks(social: Contributors): Contributors {
  social.links = [];
  if (social.git)
    social.links.push({ icon: 'github', link: `https://github.com/${social.git}` })
  if (social.website)
    social.links.push({ icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M5.049.276A7.006 7.006 0 0 0 .028 6.375h3.2a15.763 15.763 0 0 1 1.82-6.1ZM3.228 7.625h-3.2a7.006 7.006 0 0 0 5.02 6.1a15.763 15.763 0 0 1-1.82-6.1m3.424 6.367a14.477 14.477 0 0 1-2.17-6.367h5.035a14.477 14.477 0 0 1-2.17 6.367a7.163 7.163 0 0 1-.695 0m2.3-.268a7.006 7.006 0 0 0 5.02-6.099h-3.2a15.763 15.763 0 0 1-1.82 6.1Zm1.82-7.349h3.2a7.006 7.006 0 0 0-5.02-6.1a15.762 15.762 0 0 1 1.82 6.1M6.652.008a7.116 7.116 0 0 1 .696 0a14.477 14.477 0 0 1 2.169 6.367H4.483c.217-2.277.963-4.46 2.17-6.367Z" clip-rule="evenodd"/></svg>' }, link: social.website });
  return social
}

const plainContributors: Contributors[] = [
  {
    avatar: `https://github.com/yuuire.png`,
    name: meta.author,
    git: meta.author,
    website: 'https://' + meta.plainurl,
    title: 'Founder',
  }
]

const contributors = plainContributors.map(social => createLinks(social))

export { contributors }
