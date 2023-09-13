export interface BlogData {
  title: string;
  description: string;
  image: File | null;
  is_visible: boolean;
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  slug: string;
}
export interface ResponseBlogData extends BlogData {
  id: number;
}
