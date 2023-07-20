interface SubLink {
  subtitle: string;
  slug: string;
}

export interface ISideLink {
  id: number;
  title: string;
  icon: string;
  slug?: string;
  subLinks?: SubLink[];
}
