import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFolhaComponent } from './components/pages/folha/cadastrar-folha/cadastrar-folha.component';
import { CadastrarFuncionarioComponent } from './components/pages/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFuncionarioComponent } from './components/pages/funcionario/listar-funcionario/listar-funcionario.component';

const routes: Routes = [
  {
    path: "pages/funcionario/cadastrar",
    component: CadastrarFuncionarioComponent
  },
  {
    path: "pages/funcionario/cadastrar/:id", //configurando pra receber um parametro
    component: CadastrarFuncionarioComponent
  },
  {
    path: "pages/funcionario/listar",
    component: ListarFuncionarioComponent
  },
  {
    path: "pages/folha/cadastrar",
    component: CadastrarFolhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }