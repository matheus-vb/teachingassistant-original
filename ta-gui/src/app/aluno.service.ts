import { Aluno } from './aluno';

export class AlunoService {
  alunos: Aluno[] = [];
  
  gravar(aluno: Aluno): Aluno {
    const alunoWithSameCPF = this.alunos.find(item => item.cpf === aluno.cpf);

    if(alunoWithSameCPF) {
      return null;
    }

    this.alunos.push(aluno);
    return aluno;
  }
}
