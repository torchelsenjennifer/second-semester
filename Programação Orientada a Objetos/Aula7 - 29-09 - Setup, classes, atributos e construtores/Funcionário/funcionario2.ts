//TODO: https://abre.ai/poon
//TODO: Para quem tiver problemas no windows:  npm config set strict-ssl false
//TODO: npm init -y
//TODO: npm i ts-node
//TODO: npm i prompt-sync
//TODO: npm i @types/prompt-sync

//Criação de uma classe
export class Funcionario {
    nome: string;
    cpf: string;
    dataNascimento: Date;
    salario: number;
    dataAdmissao: Date;
    cargo: string;
    private energia: number;
    private credibilidade: number;
  
    constructor(
      nome: string,
      cpf: string,
      dataNascimento: Date,
      dataAdmissao: Date,
      salario: number,
      cargo: string
    ) {
      this.nome = nome;
      this.cpf = cpf;
      this.dataNascimento = dataNascimento;
      this.salario = salario;
      this.dataAdmissao = dataAdmissao;
      this.cargo = cargo;
      this.energia = this.randomizar(30, 100);
      this.credibilidade = 0;
    }
  
    private randomizar(minimo: number, maximo: number) {
      return Math.round(minimo + Math.random() * (maximo - minimo));
    }
    /**
     * Limita a energia do funcionario em 100,
     * e retorna um erro caso seja menor ou igual a 0
     */
    private validaEnergia() {
      if (this.energia > 100) this.energia = 100;
      if (this.energia <= 0) throw new Error("Foi pra banha :P");
    }
  
    /**
     * Limita a credibilidade do funcionario em 100,
     * e retorna um erro caso seja menor ou igual a 0
     */
    private validaCredibilidade() {
      if (this.credibilidade > 100) this.credibilidade = 100;
      if (this.credibilidade <= 0) throw new Error("Você está demitido >:(");
    }
    //Criação de um método
    // Toda vez que pensar em ler um dado no método, troque por um parâmetro
    /**
     * ,
     * Método que simula o trabalho de um Funcionário
     * @param numeroDeHoras número de horas trabalhadas no dia
     */
    trabalhar(numeroDeHoras: number): void {
      this.energia -= this.randomizar(10, 8) * numeroDeHoras;
      this.credibilidade += this.randomizar(1, 2) * numeroDeHoras;
      this.validaEnergia();
      this.validaCredibilidade();
    }
  
    daleUmCafezin(): number {
      this.energia += Math.round(10 + Math.random() * 20);
      this.credibilidade -= Math.round(2 + Math.random() * 10);
      this.validaEnergia();
      this.validaCredibilidade();
      return this.credibilidade;
    }
  }
  