import { Marca } from './../../models/marca';
import { MarcaService } from './../../services/marca.service';
import { MarcaDataSource } from './../../config/marca-data-source';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  ELEMENT_DATA: Marca[] = [];

  nome: ''
  marcas: any;

  displayedColumns: string[] = ['nome', 'acoes'];


  dataSource: MarcaDataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: MarcaService) { }

  ngOnInit(): void {
    this.dataSource = new MarcaDataSource(this.service);
    this.dataSource.loadTodos();
  }

  ngAfterViewInit() {
    this.dataSource.counter$
    .pipe(
      tap((count) => {
        this.paginator.length = count;
      })
    )
    .subscribe();

  this.paginator.page
    .pipe(
      tap(() => this.loadTodos())
    )
    .subscribe();
  }

  loadTodos() {
    this.dataSource.loadTodos(this.paginator.pageIndex, this.paginator.pageSize, this.nome)
  }

  voltar(){
    this.nome = ''
    this.loadTodos()
  }

  deletarmarca(id: any){
    this.service.deletar(id).subscribe(res=>{
      alert(res)
    }, ex=>{
      this.paginator.pageIndex= 0;
      this.loadTodos()
      if(ex.error.match("Não")){
        alert(ex.error)
      }

    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const dataSour = new MatTableDataSource<Marca>(this.ELEMENT_DATA).filter = filterValue.trim().toLowerCase();

   }


}
