import { Marca } from './../models/marca';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {


  constructor(private http: HttpClient) { }

  create(marca: Marca): Observable<Marca> {
    return this.http.post<Marca>(`http://localhost:8080/marcas`, marca);
  }

  update(marca: Marca, id: any): Observable<Marca> {
    return this.http.put<Marca>(`http://localhost:8080/marcas/${id}`, marca);
  }

  listarmarcas(){
    const endpoint = `http://localhost:8080/marcas`;
    return this.http.get(endpoint);
  }
  listTodos(request) {
    const endpoint = `http://localhost:8080/marcas/buscar`;
    const params = request;
    return this.http.get(endpoint, { params });
  }
  findById(id): Observable<Marca>{
    return this.http.get<Marca>(`http://localhost:8080/marcas/${id}`)
  }
  deletar(id){
    return this.http.delete(`http://localhost:8080/marcas/${id}`);
  }
}
