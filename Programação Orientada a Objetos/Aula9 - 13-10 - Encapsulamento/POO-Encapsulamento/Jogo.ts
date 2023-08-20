import { Util } from "./Util";

export class Jogo {
  private _energia: number;
  private _credibilidade: number;

  public trabalhar(tempoEmHoras: number): void {
    this._energia -= Util.randomizar(4, 10) * tempoEmHoras;
    this._credibilidade += Util.randomizar(1, 3) * tempoEmHoras;
    this.validaEnergia();
    this.validarCredibilidade();
  }

  public tomarCafe(): number {
    this._energia += Util.randomizar(5, 15);
    this._credibilidade -= Util.randomizar(1, 3);
    this.validaEnergia();
    this.validarCredibilidade();
    return this._energia;
  }

  public solicitarAumento(): boolean {
    const azar = Util.randomizar(0, 100);

    if (azar < this._credibilidade) {
      return true;
    } else {
      this._credibilidade = 0;
      return false;
    }
  }

  private validaEnergia(): void {
    if (this._energia < 0) {
      throw new Error("Putz! Morreu.");
    } else if (this._energia > 100) {
      this._energia = 100;
    }
  }
  private validarCredibilidade(): void {
    if (this._credibilidade < 0) {
      throw new Error("Demitido por justa causa");
    } else if (this._credibilidade > 100) {
      this._credibilidade = 100;
    }
  }
}
