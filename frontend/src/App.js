import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./style.css"

function App() {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  )
}

export default App;