import { Router, ActivatedRoute } from '@angular/router';
import { VeiculoService } from './../../services/veiculo.service';
import { ModeloService } from './../../services/modelo.service';
import { Veiculo } from './../../models/veiculo';
import { Modelo } from './../../models/modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateveiculo',
  templateUrl: './updateveiculo.component.html',
  styleUrls: ['./updateveiculo.component.css']
})
export class UpdateveiculoComponent implements OnInit {

  modelo: Modelo={
    id: '',
    nomeModelo: '',
    marca:{
      id: '',
      nome:''}
  }

  veiculo: Veiculo={
    id:'',
    valor:'',
    modelo: this.modelo
  }
  modelos: any;


  constructor(
    private service: VeiculoService,
    private servicemodelo: ModeloService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.listarmodelos();
    this.veiculo.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.veiculo.id).subscribe(resposta =>{
      this.veiculo = resposta;
    })
  }

  update(): void{
    this.service.update(this.veiculo, this.veiculo.id).subscribe(res =>{
      alert("Veiculo Atualizado com sucesso");
      this.router.navigate(['veiculo'])

    },ex =>{
      if(ex.error.valor.match('valor')){
        alert(ex.error.valor)
      };
    }
    )
  }

  listarmodelos(){
    this.servicemodelo.listarmodelos().subscribe(data=>{
      this.modelos = data;
      console.log(data)
    })
  }

}
