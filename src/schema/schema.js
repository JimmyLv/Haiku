import { schema } from 'normalizr'

const postSchema = new schema.Entity('posts')

const categorySchema = new schema.Entity('categories', {
  posts: [postSchema],
}, { idAttribute: 'name' })

const tagSchema = new schema.Entity('tags', {
  posts: [postSchema],
}, { idAttribute: 'name' })

export const articles = {
  categories: [categorySchema],
  tags: [tagSchema],
  paginator: [postSchema],
}

export const article = {
  meta: {
    categories: [categorySchema],
    tags: [tagSchema],
  },
}
