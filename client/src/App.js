import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import CreateScreen from "./Screens/CreateScreen";
import Header from "./Components/Header";

import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import UpdateScreen from "./Screens/UpdateScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/create" component={CreateScreen} />
        <Route path="/update/:id" component={UpdateScreen} />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
