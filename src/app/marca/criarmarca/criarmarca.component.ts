import { MarcaService } from './../../services/marca.service';
import { Marca } from './../../models/marca';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criarmarca',
  templateUrl: './criarmarca.component.html',
  styleUrls: ['./criarmarca.component.css']
})
export class CriarmarcaComponent implements OnInit {

  marca: Marca={
    id: '',
    nome: ''
  }

  constructor(
    private service: MarcaService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  create(): void{
    this.service.create(this.marca).subscribe(()=>{
      alert('Marca cadastrada com sucesso');
      this.router.navigate(['marca'])
    },ex =>{
      if(ex.error.nome.match('vazio')){
        alert(ex.error.nome)
      }
    })
  }


}
