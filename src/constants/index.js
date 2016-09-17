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

async function getConfig() {
  try {
    const config = await (await fetch(`${BASE_URL}/_config.yml`)).text()
    console.info(jsyaml.load(config))
  } catch (err) {
    console.warn('Failed to fetch config: ', err)
  }
}

getConfig()