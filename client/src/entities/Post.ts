export interface Post {
  id: string;
  body: string;
  createdAt: string;
}

export interface Posts {
  currentPage: number;
  nextPage?: number;
  items: Array<Post>;
}
