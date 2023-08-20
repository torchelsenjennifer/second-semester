import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Guerreiro extends Personagem {
  constructor(nome: string) {
    super(
      nome + " Warrior",
      Util.randomizar(1, 1000),
      0,
      0,
      Util.randomizar(0, 50),
      Util.randomizar(0, 90),
      0,
      Util.randomizar(1, 40_000)
    );
    this._poderDeAtaque = this._forca * 10;
    this._vidaAtual = this._vidaMaxima;
  }

  public atacar(oponente: Personagem): void {
    console.log(`${this._nome} atacou ${oponente.nome}`);
    this.ataque(oponente);
    oponente.contraAtacar(this);
  }

  public contraAtacar(oponente: Personagem): void {
    console.log(`${this._nome} contra-atacou ${oponente.nome}`);

    this.ataque(oponente);
  }

  public aprimorarHabilidadePrincipal(): void {
    this._forca *= this._forca * 1.1;
    this.atualizarPoderDeAtaque();
  }
  private atualizarPoderDeAtaque(): void {
    this._poderDeAtaque = this._forca * 10;
  }
  public regenerarVida(): void {
    this._vidaAtual += this._vidaAtual * 1.05;
    if (this._vidaAtual > this._vidaMaxima) {
      this.vidaAtual = this._vidaMaxima;
    }
  }

  private ataque(oponente: Personagem): void {
    const acertou: boolean = Util.randomizar(0, 100) > oponente.esquiva;
    if (acertou) {
      const danoCausado: number =
        (1 - oponente.resistencia / 100) * this._poderDeAtaque;
      oponente.vidaAtual = oponente.vidaAtual - danoCausado;

      const oponenteMorreu: boolean = oponente.vidaAtual <= 0;
      if (oponenteMorreu) {
        throw new Error(`${oponente.nome} foi derrotado.`);
      }
    } else {
      console.log(`${oponente.nome} esquivou o ataque de ${this._nome}`);
    }
  }
}
