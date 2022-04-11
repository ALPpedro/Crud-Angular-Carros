import { Router } from '@angular/router';
import { MarcaService } from './../services/marca.service';
import { Modelo } from './../models/modelo';
import { tap } from 'rxjs';
import { ModeloDataSource } from './../config/modelo-data-source';
import { ModeloService } from './../services/modelo.service';
import { MatPaginator } from '@angular/material/paginator';
import { MarcaDataSource } from './../config/marca-data-source';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css']
})
export class ModeloComponent implements OnInit {

  displayedColumns: string[] = ['nome','marca', 'acoes'];
  dataSource: ModeloDataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  nomeModelo:any;
  idMarca:any;

  marcas: any;
  Modelo: Modelo[];
  modelo: Modelo;
  constructor(
    private service: ModeloService,
    private servicemarca: MarcaService,
    private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new ModeloDataSource(this.service);
    this.dataSource.loadTodos();
    this.listarmarcas();
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

  listarmarcas(){
    this.servicemarca.listarmarcas().subscribe(data=>{
      this.marcas = data;
      console.log(data)
    })
  }

  loadTodos() {
    this.dataSource.loadTodos(this.paginator.pageIndex, this.paginator.pageSize, this.nomeModelo, this.idMarca)
  }

  voltar(){
    this.nomeModelo = ''
    this.loadTodos()
  }



  deletarmodelo(id: any){
    this.service.deletar(id).subscribe(res=>{
      alert(res)
        this.paginator.pageIndex= 0;
        this.loadTodos();
        alert("Excluido");
    }, ex=>{
      this.paginator.pageIndex= 0;
      this.loadTodos();
      if(ex.error.match("Não")){
        alert(ex.error)
      }

    })
  }

}
