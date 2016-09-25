export type ArticleType = {
    id: string;
    meta: {
        title: string;
        layout: string;
        tags: Array<string>;
    },
    content: string;
}