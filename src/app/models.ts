// API response wrappers
// API response wrappers
export interface PostsResponse {
  posts: Post[];
}

export interface UsersResponse {
  users: User[];
}

// Raw API models
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

// UI View Model
export interface PostViewModel {
  postId: number;
  title: string;
  authorName: string;
  authorEmail: string;
}
