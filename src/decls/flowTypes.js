// refer: https://github.com/acdlite/flux-standard-action

declare type Action = {
  type: string
  payload: ?any
  error: ?boolean
  meta: ?any
}

declare type Music = {
  name: string
  url: string
  lrc_url: string
  artists: string
  provider: string
}