import { UpdateveiculoComponent } from './veiculo/updateveiculo/updateveiculo.component';
import { UpdatemodeloComponent } from './modelo/updatemodelo/updatemodelo.component';
import { CriarmodeloComponent } from './modelo/criarmodelo/criarmodelo.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaComponent } from './marca/marca/marca.component';
import { ModeloComponent } from './modelo/modelo.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { CriarmarcaComponent } from './marca/criarmarca/criarmarca.component';
import { UpdatemarcaComponent } from './marca/updatemarca/updatemarca/updatemarca.component';
import { CriarveiculoComponent } from './veiculo/criarveiculo/criarveiculo.component';

const routes: Routes = [
  {path: 'marca', component: MarcaComponent},
  {path: 'modelo', component: ModeloComponent },
  {path: 'veiculo', component: VeiculoComponent},
  {path: 'marca/criarmarca', component: CriarmarcaComponent },
  {path: 'marca/update/:id', component: UpdatemarcaComponent },
  {path: 'modelo/criarmodelo', component: CriarmodeloComponent },
  {path: 'modelo/update/:id', component: UpdatemodeloComponent },
  {path: 'veiculo/criarveiculo', component: CriarveiculoComponent },
  {path: 'veiculo/update/:id', component: UpdateveiculoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
