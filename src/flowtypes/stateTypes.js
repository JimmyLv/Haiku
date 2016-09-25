// @flow

export type Article = {
  id: string;
  meta: {
    title: string;
    layout: string;
    tags: Array<string>;
  },
  content: string;
}

export type Music = {
  name: string;
  url: string;
  lrc_url?: string;
  artists: string;
  provider: string;
}

export type Category = {
  name: string;
  posts: Array<Article>;
}

export type Tag = {
  name: string;
  size: number;
  posts: Array<Article>;
}

export type ArticleSummary = {
  categories: Array<Category>;
  tags: Array<Tag>;
  paginator: Array<Article>;
  err?: Error;
}