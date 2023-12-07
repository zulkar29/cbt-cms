export interface Attribute {
  id: number;
  name: string;
  value: string;
  created_at: string;
  updated_at: string;
}

export interface IAttributeResponse {
  data: {
    count: number;
    rows: Attribute[];
  };
}
