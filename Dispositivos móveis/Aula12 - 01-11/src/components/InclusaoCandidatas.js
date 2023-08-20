import { useState } from "react";
import { inAxios } from "../config_axios";

const InclusaoCandidatas = () => {
  const [nome, setNome] = useState("");
  const [clube, setClube] = useState("");
  const [idade, setIdade] = useState("");
  const [hobby, setHobby] = useState("");
  const [foto, setFoto] = useState(null);

  const enviarDados = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("clube", clube);
    formData.append("idade", idade);
    formData.append("foto", foto);
    formData.append("admin_id", 1);
    try {
      const dados = await inAxios.post("candidatas", formData);
      alert(`ok! Candidata cadastrada (${dados.data.id})`);
    } catch (erro) {
      alert(`Erro:${erro}`);
    }
    //limpa campos
    setNome("");
    setClube("");
    setIdade("");
    setHobby("");
    setFoto(null);

    inAxios
      .post("candidatas", formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((error) => alert("File Upload Error"));
    alert(nome);
  };

  return (
    <form className="container" onSubmit={enviarDados}>
      <h2> Inclusao de Candidatas </h2>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Nome da candidata
        </label>
        <input
          type="text"
          class="form-control"
          id="nome"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Clube que representa
        </label>
        <input
          type="text"
          class="form-control"
          id="nome"
          placeholder="Nome do clube"
          value={clube}
          onChange={(e) => setClube(e.target.value)}
          required
        />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Hobby
        </label>
        <input
          type="text"
          class="form-control"
          id="hobby"
          placeholder="Hobby da candidata"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
          required
        />
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label for="idade" class="form-label">
            Idade
          </label>
          <input
            type="text"
            class="form-control"
            id="nome"
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
        </div>
        <div className="col-md-8">
          <label for="foto" class="form-label">
            Foto da candidata
          </label>
          <input
            type="file"
            class="form-control"
            id="foto"
            placeholder="Foto da candidata"
            value={""}
            onChange={(e) => setFoto(e.target.files[0])}
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-lg">
        Enviar
      </button>
      <button type="submit" class="btn btn-danger btn-lg ms-3">
        Limpar
      </button>
    </form>
  );
};

export default InclusaoCandidatas;
