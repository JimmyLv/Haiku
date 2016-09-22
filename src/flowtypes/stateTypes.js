// @flow
/* eslint no-undef: 0 */

declare type Music = {
  name: string;
  url: string;
  lrc_url: ?string;
  artists: string;
  provider: string;
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