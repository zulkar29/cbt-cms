export interface BlogData {
  id?: number | string;
  title: string;
  description?: string;
  image: File | null;
  is_visible: boolean;
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  slug: string;
}
export interface ResponseBlogData {
  data: {
    count: number;
    rows: BlogData[];
  };
}

export interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: number) => void; // Callback when a page is changed
}
