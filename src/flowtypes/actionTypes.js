// @flow
/* eslint no-undef: 0 */

// refer: https://github.com/acdlite/flux-standard-action
declare type MusicAction = {
  type: string;
  payload: {
    songs: Array<Music>
  };
  error: ?boolean;
  meta: ?any;
}

declare type ArticleAction = {
  type: string;
  payload: {
    id: string,
    content: string,
    err: ?Error
  }
}

declare type ArticlesAction = {
  type: string;
  payload: ArticleSummary;
}
