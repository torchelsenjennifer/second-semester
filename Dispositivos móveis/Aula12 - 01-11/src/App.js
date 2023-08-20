import MenuSuperior from "./components/MenuSuperior";
import ListaCandidatas from "./components/ListaCandidatas";
import InclusaoCandidatas from "./components/InclusaoCandidatas";
import GerenteCandidatas from "./components/GerenteCandidatas";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <MenuSuperior />
      <Routes>
        <Route path="/" element={<ListaCandidatas />} />
        <Route path="inclusao" element={<InclusaoCandidatas />} />
        <Route path="gerencia" element={<GerenteCandidatas />} />
      </Routes>
    </>
  );
};

export default App;
