import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
})
export class CursosComponent {
  cursos: any[] = [];

  constructor(private router: Router, private dadosService: DadosService) {
    this.cursos = this.dadosService.getCursos();
  }

  verRamificacoes(id: number) {
    this.router.navigate(['/ramificacoes', id]);
  }
}
