export type IBlog = {
  id: string;
  title: string;
  author: string;
  content: string;
  tags: string[];
  views: number;
  createdAt: string; // ISO date string
};
