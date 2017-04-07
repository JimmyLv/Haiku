import jsyaml from 'js-yaml'

export const SUB_TITLE = '最美博客'

export const GITHUB = {
  host: 'https://raw.githubusercontent.com',
  user: 'JimmyLv',
  repo: 'jimmylv.github.io',
  folder: '_posts',
  branch: 'master'
}

export const BASE_URL = `${GITHUB.host}/${GITHUB.user}/${GITHUB.repo}/${GITHUB.branch}`

export const API_URL = `https://raw.githubusercontent.com/${GITHUB.user}/_posts/${GITHUB.branch}`

export async function getConfig() {
  try {
    const yaml = await (await fetch(`${BASE_URL}/_config.yml`)).text()
    const config = jsyaml.load(yaml)
    console.info('Application Configuration: ', config)
    return config
  } catch (err) {
    console.warn('Failed to fetch config: ', err)
  }
}

getConfig()