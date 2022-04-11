import { Marca } from './marca';
export interface TodoListResponseModelo {
  content: Modelo[];
  totalElements: number;
}

export interface Modelo{
  id: any;
  nomeModelo: string;
  marca: Marca
}
