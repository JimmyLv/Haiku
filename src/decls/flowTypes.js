// @flow
/* eslint no-undef: 0 */

declare type Music = {
  name: string;
  url: string;
  lrc_url: ?string;
  artists: string;
  provider: string;
}

// refer: https://github.com/acdlite/flux-standard-action
declare type MusicAction = {
  type: string;
  payload: {
    songs: Array<Music>
  };
  error: ?boolean;
  meta: ?any;
}

declare type Article = {
  id: string;
  meta: {
    title: string;
    layout: string;
    tags: Array<string>;
  },
  content: string;
}

declare type ArticleAction = {
  type: string;
  payload: {
    id: string,
    content: string,
    err: ?Error
  }
}

declare type Category = {
  name: string;
  posts: Array<Article>;
}

declare type Tag = {
  name: string;
  size: number;
  posts: Array<Article>;
}

declare type ArticleSummary = {
  categories: Array<Category>;
  tags: Array<Tag>;
  paginator: Array<Article>;
  err: ?Error;
}

declare type ArticlesAction = {
  type: string;
  payload: ArticleSummary;
}
