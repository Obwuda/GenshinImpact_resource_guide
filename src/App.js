import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";
import DropdownSearch from "./dropdown";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h3">Genshin Impact1</Header>
    <List bulleted></List>

    {children}
  </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <DropdownSearch />
  </App>,
  document.getElementById("root")
);

export default App;
