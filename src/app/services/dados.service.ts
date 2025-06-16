import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  private cursos = [
    { id: 1, nome: 'Análise e Desenvolvimento de Sistemas' },
    { id: 2, nome: 'Ciência da Computação' },
    { id: 3, nome: 'Engenharia de Software' },
  ];

  private ramificacoes: { [key: number]: string[] } = {
    1: ['Front-End', 'Back-End', 'Banco de Dados'],
    2: ['Inteligência Artificial', 'Redes de Computadores', 'Algoritmos'],
    3: ['Testes de Software', 'Gerência de Projetos', 'Arquitetura de Software'],
  };

  getCursos() {
    return this.cursos;
  }

  getRamificacoes(id: number) {
    return this.ramificacoes[id] || [];
  }
}
