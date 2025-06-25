import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  private cursos = [
    {
      id: 1,
      nome: 'Análise e Desenvolvimento de Sistemas',
      descricao: 'Curso focado em projetar, implementar e gerenciar sistemas computacionais, com ênfase em desenvolvimento de software e soluções para empresas.'
    },
    {
      id: 2,
      nome: 'Ciência da Computação',
      descricao: 'Curso voltado para fundamentos teóricos e práticos da computação, incluindo algoritmos, estruturas de dados, inteligência artificial e pesquisa científica.'
    },
    {
      id: 3,
      nome: 'Engenharia de Software',
      descricao: 'Curso especializado em métodos, processos e ferramentas para o desenvolvimento, manutenção e gestão de projetos de software em larga escala.'
    },
    {
      id: 4,
      nome: 'Sistemas de Informação',
      descricao: 'Curso que integra tecnologia e gestão, preparando profissionais para analisar, projetar e gerenciar sistemas de informação em organizações.'
    },
    {
      id: 5,
      nome: 'Redes de Computadores',
      descricao: 'Curso dedicado ao estudo, implementação e gerenciamento de redes de computadores, segurança da informação e infraestrutura de TI.'
    },
    {
      id: 6,
      nome: 'Engenharia da Computação',
      descricao: 'Curso que une conhecimentos de hardware e software, formando profissionais aptos a projetar sistemas embarcados, automação e eletrônica aplicada.'
    }
  ];

  private ramificacoes: { [key: number]: string[] } = {
    1: [
      'Front-End', 'Back-End', 'Banco de Dados', 'DevOps', 'Cloud Computing', 'Mobile Development',
      'Testes e QA', 'UX/UI Design', 'Segurança de Software', 'Automação de Processos'
    ],
    2: [
      'Inteligência Artificial', 'Redes de Computadores', 'Algoritmos e Estruturas de Dados', 'Computação Gráfica',
      'Machine Learning', 'Big Data', 'Robótica', 'Biocomputação', 'Teoria da Computação', 'Pesquisa Operacional'
    ],
    3: [
      'Testes de Software', 'Gerência de Projetos', 'Arquitetura de Software', 'Engenharia de Requisitos',
      'Desenvolvimento Ágil', 'DevOps', 'Engenharia de Usabilidade', 'Segurança de Software', 'Sistemas Embarcados'
    ],
    4: [
      'Gestão de TI', 'Análise de Negócios', 'Governança de Dados', 'BI (Business Intelligence)', 'ERP/CRM',
      'Consultoria em TI', 'Gestão de Projetos de TI', 'Auditoria de Sistemas', 'E-commerce'
    ],
    5: [
      'Segurança de Redes', 'Administração de Redes', 'Protocolos de Comunicação', 'Cloud Networking',
      'Infraestrutura de Redes', 'Redes Wireless', 'Redes de Data Center', 'Internet das Coisas (IoT)', 'SDN'
    ],
    6: [
      'Sistemas Embarcados', 'Robótica', 'Automação Industrial', 'IoT', 'Desenvolvimento de Hardware',
      'Computação de Alto Desempenho', 'Sistemas Ciberfísicos', 'Design de Circuitos Integrados'
    ]
  };

  getCursos() {
    return this.cursos;
  }

  getRamificacoes(id: number) {
    return this.ramificacoes[id] || [];
  }
}
