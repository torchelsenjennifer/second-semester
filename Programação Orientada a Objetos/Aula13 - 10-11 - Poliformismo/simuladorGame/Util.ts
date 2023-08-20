export class Util {
  public static randomizar(minimo: number, maximo: number) {
    const valorSorteado = minimo + Math.random() * (maximo - minimo);
    const valorInteiro = Math.round(valorSorteado);
    return valorInteiro;
  }
}
