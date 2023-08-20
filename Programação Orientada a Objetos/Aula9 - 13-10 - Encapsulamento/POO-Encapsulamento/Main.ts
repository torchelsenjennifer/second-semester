import prompt from "prompt-sync";
import { Funcionario } from "./Funcionario";

const teclado = prompt();

const funcionario: Funcionario = new Funcionario();

while (true) {
  console.log(".".repeat(20));
  console.log("1. Trabalhar");
  console.log("2. Tomar café");
  console.log("3. Fofocar");
  console.log("4. Solicitar aumento");
  console.log("7. Status do Trabalhador");
  console.log(".".repeat(20));

  const opcao: number = +teclado("Escolha uma opção: ");
  switch (opcao) {
    case 1:
      const tempoEmHoras: number = +teclado(
        "Digite o número de horas trabalhadas: "
      );
      funcionario.trabalhar(tempoEmHoras);
      break;
    case 2:
      console.log("Energia atual: ", funcionario.tomarCafe());
      break;
    case 4:
      funcionario.solicitarAumento();
      break;
    case 7:
      console.table(funcionario);
      break;
    default:
      console.log("Opção inválida");

      break;
  }
}
