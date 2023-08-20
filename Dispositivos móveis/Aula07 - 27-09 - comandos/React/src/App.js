import { useState } from "react";
import "./styles.css";

export default function App() {
  const [pacientes, setPacientes] = useState([]);
  const [atendido, setAtendido] = useState("");
  const [nome, setNome] = useState("");

  function novoPaciente(e) {
    e.preventDefault();
    setPacientes([...pacientes, nome]);
    setNome("");
  }
  function novoUrgente() {
    setPacientes([nome, ...pacientes]);
    setNome("");
  }
  function atenderPaciente() {
    if (pacientes.length === 0) {
      alert("Não ha pacientes");
      setAtendido("");
      return;
    }
    setAtendido(pacientes[0]);
    setPacientes(pacientes.slice(1));
  }

  return (
    <>
      <h1>Consultório Odontológico</h1>
      <form onSubmit={novoPaciente}>
        <p>
          Paciente:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input type="submit" value="Adicionar" />
          <input type="button" value="Urgência" onClick={novoUrgente} />
          <input type="button" value="Atender" onClick={atenderPaciente} />
        </p>
      </form>
      <h3>
        Em Atendimento:
        <span className="fonteAzul">{atendido}</span>
      </h3>
      <pre>{pacientes.join("\n")}</pre>
    </>
  );
}