import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle, Wrapper } from "./App.styles";
import Header from "../components/Header";

function App() {
  return (
    <Wrapper>
      <Router>
        <GlobalStyle />
        <Header />
      </Router>
    </Wrapper>
  );
}

export default App;
