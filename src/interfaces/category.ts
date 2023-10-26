export type ICategory = {
  is_feature: boolean;
  id?: number;
  title: string;
  slug: string;
  parent_category?: string;
  image?: string;
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  meta_image?: File | null;
  updated_at?: string;
  created_at?: string;
};

export interface ICategoryResponse {
  data: {
    count: number;
    rows: ICategory[];
  };
}
