import { Router, ActivatedRoute } from '@angular/router';
import { MarcaService } from './../../services/marca.service';
import { ModeloService } from './../../services/modelo.service';
import { MarcaDataSource } from './../../config/marca-data-source';
import { Modelo } from './../../models/modelo';
import { Marca } from './../../models/marca';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatemodelo',
  templateUrl: './updatemodelo.component.html',
  styleUrls: ['./updatemodelo.component.css']
})
export class UpdatemodeloComponent implements OnInit {
  idmarca: number;
  marcateste: Marca={
    id: '',
    nome:''}


  modelo: Modelo={
    id: '',
    nomeModelo: '',
    marca: this.marcateste
  }
  dataSource: MarcaDataSource;
  marcas: any;


  constructor(
    private service: ModeloService,
    private servicemarca: MarcaService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.listarmarcas();
    this.modelo.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.modelo.id).subscribe(resposta =>{
      this.modelo = resposta;
    })
  }

  update(): void{
    this.service.update(this.modelo, this.modelo.id).subscribe(res =>{
      alert("Modelo Atualizado com sucesso");
      this.router.navigate(['modelo'])

    },ex =>{
      if(ex.error.nomeModelo.match('vazio')){
        alert(ex.error.nomeModelo)
      };
    }
    )
  }

  listarmarcas(){
    this.servicemarca.listarmarcas().subscribe(data=>{
      this.marcas = data;
      console.log(data)
    })
  }
}
