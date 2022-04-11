import { Observable } from 'rxjs';
import { Veiculo } from './../models/veiculo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private http: HttpClient) { }

  create(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(`http://localhost:8080/veiculos`, veiculo);
  }

  listTodos(request) {
    const endpoint = `http://localhost:8080/veiculos/buscar`;
    const params = request;
    return this.http.get(endpoint, { params });
  }

  deletar(id){
    return this.http.delete(`http://localhost:8080/veiculos/${id}`);
  }

  update(veiculo: Veiculo, id: any): Observable<Veiculo> {
    return this.http.put<Veiculo>(`http://localhost:8080/veiculos/${id}`, veiculo);
  }

  findById(id): Observable<Veiculo>{
    return this.http.get<Veiculo>(`http://localhost:8080/veiculos/${id}`)
  }

}
