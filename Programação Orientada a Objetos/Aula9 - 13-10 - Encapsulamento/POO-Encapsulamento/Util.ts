export class Util {
  static randomizar(minimo: number, maximo: number): number {
    return minimo + Math.random() * (maximo - minimo);
  }
}
