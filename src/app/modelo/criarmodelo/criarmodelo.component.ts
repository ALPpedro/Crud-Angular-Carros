import { MarcaDataSource } from './../../config/marca-data-source';
import { MarcaService } from './../../services/marca.service';
import { Marca } from './../../models/marca';
import { Modelo } from './../../models/modelo';
import { Router } from '@angular/router';
import { ModeloService } from './../../services/modelo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criarmodelo',
  templateUrl: './criarmodelo.component.html',
  styleUrls: ['./criarmodelo.component.css']
})
export class CriarmodeloComponent implements OnInit {

  marcateste: Marca={
    id: '',
    nome:''}


  modelo: Modelo={
    id: '',
    nomeModelo: '',
    marca: this.marcateste
  }
  marcas: any;


  constructor(
    private service: ModeloService,
    private servicemarca: MarcaService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listarmarcas();
  }

  listarmarcas(){
    this.servicemarca.listarmarcas().subscribe(data=>{
      this.marcas = data;
      console.log(data)
    })
  }

  create(): void{

    if(this.modelo.marca.id==''){
      alert('Selecione Uma Marca')
    }else{

    this.service.create(this.modelo).subscribe(()=>{
        alert('Modelo cadastrado com sucesso');
        this.router.navigate(['modelo'])
    },ex =>{
        if(ex.error.nomeModelo.match('vazio')){
          alert(ex.error.nomeModelo)
        };
      })
    }
  }
}
