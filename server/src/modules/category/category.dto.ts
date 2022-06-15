export type CategoryDTO<T> = {
  id?: number;
  category: string;
  Products?: [T];
};
