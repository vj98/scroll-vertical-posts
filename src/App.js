import React from "react";
import Container from "@mui/material/Container";
import ScrollViewComponent from "./components/ScrollViewComponent";

function App() {
  return (
    <div style={{ background: "#F9F9F9" }}>
      <Container maxWidth="sm">
        <ScrollViewComponent />
      </Container>
    </div>
  );
}

export default App;
