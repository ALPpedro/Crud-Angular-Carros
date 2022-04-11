import { Modelo } from './modelo';

export interface TodoListResponseVeiculo {
  content: Veiculo[];
  totalElements: number;
}
export interface Veiculo{
  id: any;
  valor: any;
  modelo: Modelo;
}
