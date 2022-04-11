import { VeiculoService } from './../../services/veiculo.service';
import { Veiculo } from './../../models/veiculo';
import { Router } from '@angular/router';
import { MarcaService } from './../../services/marca.service';
import { ModeloService } from './../../services/modelo.service';
import { VeiculoDataSource } from './../../config/veiculo-data-source';
import { Modelo } from './../../models/modelo';
import { Marca } from './../../models/marca';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criarveiculo',
  templateUrl: './criarveiculo.component.html',
  styleUrls: ['./criarveiculo.component.css']
})
export class CriarveiculoComponent implements OnInit {

  modeloteste: Modelo={
    id: '',
    nomeModelo: '',
    marca: {id: '',nome:''}
  }

veiculo: Veiculo={
  id: '',
  valor: '',
  modelo: this.modeloteste
}

  modelos: any;


  constructor(
    private service: VeiculoService,
    private servicemodelo: ModeloService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listarmodelos();
  }


  listarmodelos(){
    this.servicemodelo.listarmodelos().subscribe(data=>{
      this.modelos = data;
      console.log(data)
    })
  }

  create(): void{

    if(this.veiculo.modelo.id==''){
      alert('Selecione Um Modelo')
    }else{

    this.service.create(this.veiculo).subscribe(()=>{
        alert('Veiculo cadastrado com sucesso');
        this.router.navigate(['veiculo'])
    },ex =>{
        if(ex.error.valor.match('valor')){
          alert(ex.error.valor)
        }
        else{alert("oii")}
      })
    }
  }
}
