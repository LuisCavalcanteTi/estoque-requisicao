import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EstoquePedidosPendentesComponent } from './estoque/pedidos-pendentes/estoque-pedidos-pendentes.component';
import { EstoquePedidosImpressosComponent } from './estoque/pedidos-impressos/estoque-pedidos-impressos.component';
import { EstoquePedidosFinalizadosComponent } from './estoque/pedidos-finalizados/estoque-pedidos-finalizados.component';
import { UsuarioRequisicaoComponent } from './usuario/requisicao/usuario-requisicao.component';
import { UsuarioPedidosPendentesComponent } from './usuario/pedidos-pendentes/usuario-pedidos-pendentes.component';
import { UsuarioPedidosFinalizadosComponent } from './usuario/pedidos-finalizados/usuario-pedidos-finalizados.component';
import { LoginComponent } from './login/login.component';
import { EntrarComponent } from './entrar/entrar.component';

@NgModule({
  declarations: [
    AppComponent,
    EstoquePedidosPendentesComponent,
    EstoquePedidosImpressosComponent,
    EstoquePedidosFinalizadosComponent,
    UsuarioRequisicaoComponent,
    UsuarioPedidosPendentesComponent,
    UsuarioPedidosFinalizadosComponent,
    LoginComponent,
    EntrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
