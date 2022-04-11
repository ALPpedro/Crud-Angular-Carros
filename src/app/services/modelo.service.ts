import { Modelo } from './../models/modelo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  constructor(private http: HttpClient) { }
  create(modelo: Modelo): Observable<Modelo> {
    return this.http.post<Modelo>(`http://localhost:8080/modelos`, modelo);
  }

  listTodos(request) {
    const endpoint = `http://localhost:8080/modelos/buscar`;
    const params = request;
    return this.http.get(endpoint, { params });
  }

  listarmodelos(){
    const endpoint = `http://localhost:8080/modelos`;
    return this.http.get(endpoint);
  }

  deletar(id){
    return this.http.delete(`http://localhost:8080/modelos/${id}`);
  }

  update(modelo: Modelo, id: any): Observable<Modelo> {
    return this.http.put<Modelo>(`http://localhost:8080/modelos/${id}`, modelo);
  }

  findById(id): Observable<Modelo>{
    return this.http.get<Modelo>(`http://localhost:8080/modelos/${id}`)
  }

}
