
import { ModeloService } from './../services/modelo.service';
import { Modelo,TodoListResponseModelo } from './../models/modelo';
import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';

export class ModeloDataSource implements DataSource<Modelo>{

  private todoSubject = new BehaviorSubject<Modelo[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private countSubject = new BehaviorSubject<number>(0);
  public counter$ = this.countSubject.asObservable();

constructor(private Modeloservice: ModeloService) { }

connect(collectionViewer: CollectionViewer): Observable<Modelo[]> {
  return this.todoSubject.asObservable();
}

disconnect(collectionViewer: CollectionViewer): void {
  this.todoSubject.complete();
  this.loadingSubject.complete();
  this.countSubject.complete();
}

loadTodos(pageNumber = 0, pageSize = 10, modelo= '', idMarca='') {
  this.loadingSubject.next(true);
  this.Modeloservice.listTodos({ page: pageNumber, size: pageSize,modelo: modelo, idMarca: idMarca})
      .pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((result: TodoListResponseModelo) => {
          this.todoSubject.next(result.content);
          this.countSubject.next(result.totalElements);
      }
      );
}


}
