import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import "tabler-react/dist/Tabler.css";

import { Card, Button } from "tabler-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card>
          <Card.Header>
            <Card.Title>CryptoDashboard</Card.Title>
          </Card.Header>
          <Card.Body>
            <Button color="primary">Welcome</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
