import { tap } from 'rxjs';
import { VeiculoDataSource } from './../config/veiculo-data-source';
import { VeiculoService } from './../services/veiculo.service';
import { MarcaService } from './../services/marca.service';
import { ModeloService } from './../services/modelo.service';
import { Veiculo } from './../models/veiculo';
import { ModeloDataSource } from './../config/modelo-data-source';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  displayedColumns: string[] = ['nome','marca', 'valor', 'acoes'];
   dataSource: VeiculoDataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  valor: any;
  valorMaior: any;
  valorMenor: any;
  idModelo: any;
  idMarca: any;
  marcas: any;
  modelos: any;
  Veiculo: Veiculo[];
  constructor(
    private servicemodelo: ModeloService,
    private servicemarca: MarcaService,
    private service: VeiculoService) { }

  ngOnInit(): void {
    this.dataSource = new VeiculoDataSource(this.service);
    this.dataSource.loadTodos();
    this.listarmarcas();
    this.listarmodelos();
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


  listarmodelos(){
    this.servicemodelo.listarmodelos().subscribe(data=>{
      this.modelos = data;
      console.log(data)
    })
  }

  loadTodos() {
    this.dataSource.loadTodos(this.paginator.pageIndex, this.paginator.pageSize, this.idModelo, this.idMarca, this.valorMenor, this.valorMaior)
  }

  voltar(){
    this.valorMaior = '',
    this.valorMenor = '',
    this.loadTodos()
  }

  deletarveiculo(id: any){
    this.service.deletar(id).subscribe(res=>{
      this.paginator.pageIndex= 0;
        this.loadTodos();
        alert('Excluido')
    }, ex=>{
      this.paginator.pageIndex= 0;
      this.loadTodos()
      if(ex.error.match("Não")){
        alert(ex.error)
      }

    })
  }


}
