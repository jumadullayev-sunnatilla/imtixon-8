export interface ClothingItem {
  id: string;
  title: string;
  desc: string;
  price: number;
  star: number;
  urls: string[];
}
export interface CommentInterface {
  createdAt: string;
  text: string;
  author: string;
  rating: number;
  id: string;
  clotheId: string;
}
