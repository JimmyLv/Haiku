// @flow

import type { Music, ArticleSummary } from './stateTypes'

// refer: https://github.com/acdlite/flux-standard-action
export type MusicAction = {
  type: string;
  payload: {
    songs: Array<Music>
  };
  error?: boolean;
  meta?: any;
}

export type ArticleAction = {
  type: string;
  payload: {
    id: string,
    content: string,
    err?: Error
  }
}

export type ArticlesAction = {
  type: string;
  payload: ArticleSummary;
}
