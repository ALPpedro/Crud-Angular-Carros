import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarcaComponent } from './marca/marca/marca.component';
import { ModeloComponent } from './modelo/modelo.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { CriarmarcaComponent } from './marca/criarmarca/criarmarca.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CriarmodeloComponent } from './modelo/criarmodelo/criarmodelo.component';
import { UpdatemarcaComponent } from './marca/updatemarca/updatemarca/updatemarca.component';
import { UpdatemodeloComponent } from './modelo/updatemodelo/updatemodelo.component';
import { UpdateveiculoComponent } from './veiculo/updateveiculo/updateveiculo.component';
import { CriarveiculoComponent } from './veiculo/criarveiculo/criarveiculo.component';


@NgModule({
  declarations: [
    AppComponent,
    MarcaComponent,
    ModeloComponent,
    VeiculoComponent,
    CriarmarcaComponent,
    CriarmodeloComponent,
    UpdatemarcaComponent,
    UpdatemodeloComponent,
    UpdateveiculoComponent,
    CriarveiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
