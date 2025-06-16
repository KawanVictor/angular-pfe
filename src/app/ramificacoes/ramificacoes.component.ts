import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-ramificacoes',
  templateUrl: './ramificacoes.component.html',
})
export class RamificacoesComponent implements OnInit {
  ramificacoes: string[] = [];

  constructor(private route: ActivatedRoute, private dadosService: DadosService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ramificacoes = this.dadosService.getRamificacoes(id);
  }
}
