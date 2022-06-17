import { IProduct } from './IProduct';

export interface ICategory {
  id: number;
  category: string;
  Products: IProduct[];
}
