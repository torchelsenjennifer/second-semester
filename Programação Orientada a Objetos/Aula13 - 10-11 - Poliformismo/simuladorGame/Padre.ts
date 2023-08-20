import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Priest extends Personagem {
  constructor(nome: string) {
    super(nome + " Priest", 0, 0, 0, 0, 0, 0, Util.randomizar(1, 8_000));
    this._vidaAtual = this._vidaMaxima;
  }

  public atacar(oponente: Personagem): void {
    console.log(`${this._nome} tentou converter ${oponente.nome}`);
    this.ataque(oponente);
    oponente.contraAtacar(this);
  }

  public contraAtacar(oponente: Personagem): void {
    console.log(`${this._nome} tentou converter ${oponente.nome}`);
    this.ataque(oponente);
  }

  public aprimorarHabilidadePrincipal(): void {
    throw new Error("Este personagem não pode executar esta ação");
  }
  public regenerarVida(): void {
    this._vidaAtual += this._vidaAtual * 1.1;
    if (this._vidaAtual > this._vidaMaxima) {
      this.vidaAtual = this._vidaMaxima;
    }
  }

  private ataque(oponente: Personagem) {
    const acertou: boolean = Util.randomizar(0, 100) < 40;
    if (acertou) {
      throw new Error(`${oponente.nome} foi convertido`);
    }
  }
}
