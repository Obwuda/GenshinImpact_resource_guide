import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";
import DropdownSearch from "./dropdown";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3">Genshin Impact</Header>
    <DropdownSearch />

    {children}
  </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default App;
