export interface IState {
  dataPost?: IResponsePost|undefined;
  dataPosts?: IResponsePosts|undefined;
  posts?: IPost[]|[];
  error?: string;
  status?: string;
  post?: IPost|object;
}

export interface IPost {
  author: {
    username?: string;
    image?: string;
    following?: boolean;
  };
  body?: string;
  createdAt?: string;
  description?: string;
  favorited?: boolean;
  favoritesCount?: number;
  slug?: string;
  tagList?: string[];
  title?: string;
  updatedAt: string;
}

export interface IResponsePost2 {
  author?: {
    username?: string;
    image?: string;
    following?: boolean;
  };
  body?: string;
  createdAt?: string;
  description?: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
}
export interface IPostItemProps extends IResponsePost {
  showBtns?: boolean;
}
export interface IResponsePosts {
  articles: IPost[];
  articlesCount: number;
}
export interface IResponsePost {
  article: IPost;
}
