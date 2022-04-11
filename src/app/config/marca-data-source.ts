import { Marca, TodoListResponse } from './../models/marca';
import { DataSource } from "@angular/cdk/collections";
import { MarcaService } from '../services/marca.service';
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';

export class MarcaDataSource implements DataSource<Marca>{

  private todoSubject = new BehaviorSubject<Marca[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private countSubject = new BehaviorSubject<number>(0);
  public counter$ = this.countSubject.asObservable();

constructor(private marcaservice: MarcaService) { }

connect(collectionViewer: CollectionViewer): Observable<Marca[]> {
  return this.todoSubject.asObservable();
}

disconnect(collectionViewer: CollectionViewer): void {
  this.todoSubject.complete();
  this.loadingSubject.complete();
  this.countSubject.complete();
}

loadTodos(pageNumber = 0, pageSize = 10, nome= '') {
  this.loadingSubject.next(true);
  this.marcaservice.listTodos({ page: pageNumber, size: pageSize,nome: nome})
      .pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((result: TodoListResponse) => {
          this.todoSubject.next(result.content);
          this.countSubject.next(result.totalElements);
      }
      );
}


}
