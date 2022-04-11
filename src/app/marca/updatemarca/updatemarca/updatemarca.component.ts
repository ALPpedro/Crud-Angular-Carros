import { ActivatedRoute, Router } from '@angular/router';
import { MarcaService } from './../../../services/marca.service';
import { Marca } from './../../../models/marca';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatemarca',
  templateUrl: './updatemarca.component.html',
  styleUrls: ['./updatemarca.component.css']
})
export class UpdatemarcaComponent implements OnInit {

  marca: Marca={
    id: '',
    nome: ''
  }
  constructor(
    private service: MarcaService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.marca.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.service.findById(this.marca.id).subscribe(resposta =>{
      this.marca = resposta;
    })
  }

  update(): void{
    this.service.update(this.marca, this.marca.id).subscribe(res =>{
      this.router.navigate(['marca'])
      alert('Marca Atualizada com sucesso')
    }, ex =>{
      if(ex.error.nome.match('vazio')){
        alert(ex.error.nome)
      }
    })
  }


}
