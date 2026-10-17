export type CommentAuthorRole = "guest" | "owner";

export type CommentAvatar = {
  src: string;
  alt?: string;
};

export type HomeComment = {
  id: string;
  description: string;
  title?: string;
  author: {
    firstName: string;
    lastName: string;
    role: CommentAuthorRole;
    avatar: CommentAvatar;
  };
};
