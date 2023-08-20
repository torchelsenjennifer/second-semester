
//Criação de uma classe
export class Animal {
  tipo: string;
  nome: string;
  energia: number;
  diversao: number;
  saciedade: number;
  higiene: number;

  constructor(
    tipo: string,
    nome: string,
    energia: number,
    diversao: number,
    saciedade: number,
    higiene: number
  ) {
    this.tipo = tipo;
    this.nome = nome;
    this.energia = energia;
    this.diversao = diversao;
    this.saciedade = saciedade;
    this.higiene = higiene;
  }

  status(): string {
    return (
      "\nTipo de Animal: " +
      this.tipo +
      "\nNome: " +
      this.nome +
      ("\nEnergia: " + this.energia) +
      ("\nDiversão: " + this.diversao) +
      ("\nSaciedade: " + this.saciedade) +
      ("\nHigiene: " + this.higiene)
    );
  }

  comer(): void {
    if (this.saciedade > 45) {
      console.log("\nTo cheio!!!");
      return;
    }
    this.saciedade += this.geraInteiroAleatorio(10, 15);
    this.higiene -= this.geraInteiroAleatorio(10, 15);
  }

  dormir(): void {
    if (this.energia >= 30) {
      console.log("\nSem sono!!!");
      return;
    }
    this.energia += this.geraInteiroAleatorio(25, 30);
    this.saciedade -= this.geraInteiroAleatorio(20, 35);
    if (this.energia > 50) {
      this.energia = 50;
    } else if (this.energia < 0) {
      this.energia = 0;
    }
  }

  banho(): void {
    this.higiene += this.geraInteiroAleatorio(10, 15);
    this.diversao -= this.geraInteiroAleatorio(20, 25);

  }

  brincar(): void {
    if (this.energia < 20) {
      console.log("\nTo cansadão!");
      return;
    }
    this.diversao += this.geraInteiroAleatorio(20, 25);
    this.energia -= this.geraInteiroAleatorio(20, 25);
    if (this.energia < 0) {
      this.energia = 0;
    }
  }

  isAngry(): boolean {
    return this.diversao < 0;
  }

  geraInteiroAleatorio(minimo: number, maximo: number): number {
    return Math.floor(Math.random() * (maximo - minimo)) + minimo;
  }
}


