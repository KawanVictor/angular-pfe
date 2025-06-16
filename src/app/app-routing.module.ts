import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { RamificacoesComponent } from './ramificacoes/ramificacoes.component';

const routes: Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'ramificacoes/:id', component: RamificacoesComponent },
  { path: '', redirectTo: '/cursos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
