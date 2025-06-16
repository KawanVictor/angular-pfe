import { Injectable } from '@angular/core';

export interface Curso {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  private cursos: Curso[] = [
    { id: 1, nome: 'PROGRAMAÇÃO' },
    { id: 2, nome: 'FRONT-END' },
    { id: 3, nome: 'DATA SCIENCE' },
    { id: 4, nome: 'INTELIGÊNCIA ARTIFICIAL' },
    { id: 5, nome: 'DEVOPS' },
    { id: 6, nome: 'UX & DESIGN' },
    { id: 7, nome: 'MOBILE' },
    { id: 8, nome: 'INOVAÇÃO & GESTÃO' },
  ];

  private ramificacoes: { [key: number]: string[] } = {
    1: ['Lógica', 'Algoritmos', 'Estruturas de Dados'],
    2: ['Angular', 'React', 'Vue.js'],
    3: ['Python', 'Machine Learning', 'Estatística'],
    4: ['Redes Neurais', 'NLP', 'Visão Computacional'],
    5: ['Docker', 'Kubernetes', 'CI/CD'],
    6: ['UX Research', 'UI Design', 'Prototipagem'],
    7: ['Flutter', 'React Native', 'Kotlin'],
    8: ['Metodologias Ágeis', 'Gestão de Projetos', 'Scrum'],
  };

  getCursos() {
    return this.cursos;
  }

  getRamificacoes(id: number): string[] {
    return this.ramificacoes[id] || [];
  }
}
