import { Veiculo, TodoListResponseVeiculo } from './../models/veiculo';
import { VeiculoService } from './../services/veiculo.service';
import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, catchError, finalize, Observable, of } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';

export class VeiculoDataSource implements DataSource<Veiculo>{

  private todoSubject = new BehaviorSubject<Veiculo[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private countSubject = new BehaviorSubject<number>(0);
  public counter$ = this.countSubject.asObservable();

constructor(private veiculoService: VeiculoService) { }

connect(collectionViewer: CollectionViewer): Observable<Veiculo[]> {
  return this.todoSubject.asObservable();
}

disconnect(collectionViewer: CollectionViewer): void {
  this.todoSubject.complete();
  this.loadingSubject.complete();
  this.countSubject.complete();
}

loadTodos(pageNumber = 0, pageSize = 10, idModelo= '', idMarca='',valorMenor=0,valorMaior=0) {
  this.loadingSubject.next(true);
  this.veiculoService.listTodos({ page: pageNumber, size: pageSize,idModelo: idModelo, idMarca: idMarca, valorMenor: valorMenor, valorMaior: valorMaior})
      .pipe(
          catchError(() => of([])),
          finalize(() => this.loadingSubject.next(false))
      )
      .subscribe((result: TodoListResponseVeiculo) => {
          this.todoSubject.next(result.content);
          this.countSubject.next(result.totalElements);
      }
      );
}


}
