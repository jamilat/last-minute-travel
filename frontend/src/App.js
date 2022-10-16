import "./App.css";
import { useEffect, useState } from "react";
import Location from "./components/Location";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#3f51b5",
      },
    },
  });

  const [locat, setLocat] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container className="container">
          {<Location locat={locat} setLocat={setLocat} />}
        </Container>
      </div>
    </ThemeProvider>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;
