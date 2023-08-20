import PromptSync from "prompt-sync";
import { Funcionario } from "./Funcionario";

const teclado = PromptSync();

const funcionario: Funcionario = new Funcionario(
  "Angelo",
  "101.101.222-33",
  new Date(),
  new Date(),
  800,
  "Dev Sr"
);

while (true) {
  console.log("-".repeat(30));
  console.log("1. Trabalhar");
  console.log("2. Status");
  console.log("3. Tomar café");
  console.log("4. Solicitar aumento");
  console.log("-".repeat(30));

  const escolha = +teclado("Escolha uma opção: ");
  switch (escolha) {
    case 1:
      const quantidadeDeHoras = +teclado("Digite o número de horas: ");
      funcionario.trabalhar(quantidadeDeHoras);
      break;
    case 2:
      console.table(funcionario);
      break;
    case 3:
      console.log("Credibilidade atual: ", funcionario.daleUmCafezin());
      break;

    case 4:
      if (funcionario.solicitarAumento()) {
        console.log(`Muito bem! Seu novo salário é ${funcionario.salario}`);
      } else {
        console.log("É, não foi nessa!");
      }
      break;

    default:
      console.log("Opção inválida");
      break;
  }
}
