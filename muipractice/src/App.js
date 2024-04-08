import { Container } from "@mui/material";
import "./App.css";

import Navbardemo from "./Components/Navbardemo";
import Drawerdemo from "./Components/Drawerdemo";
import Muitooltio from "./Components/Muitooltio";

function App() {
  return (
    <Container>
      <Navbardemo />
      <Drawerdemo />
      <Muitooltio/>
    </Container>
  );
}

export default App;
