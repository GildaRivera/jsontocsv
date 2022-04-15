import logo from "./logo.svg";
import "./App.css";
import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function App() {
  const [csv, setCSV] = useState([]);
  const [jsonA, setJsonA] = useState()
  const handleConvet = (arr) => {
    const array = [Object.keys(arr[0])].concat(arr);

    return array
      .map((it) => {
        return Object.values(it).toString();
      })
      .join("\n");
  };
  const convert = () => {
    setCSV(handleConvet(jsonA));
  };
  const handleChange = (e)=>{
 console.log( JSON.parse(e.target.value), )
    //  Array.from(e.target.value)
setJsonA(JSON.parse(e.target.value))
  }
  return (
    <div style={{ display: "flex" }}>
      <Container maxWidth="sm" sx={{ height: "90vh", margin: "2vh" }}>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "100vh",
            position: "relative",
            height: "100%",
          }}
        >
          <textarea onChange={handleChange} style={{"height":"100%", "width":"100%"}}/>
        </Box>
      </Container>
      <div
        style={{
          display: "flex",
          flexwrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" sx={{ margin: "2vh 0" }} onClick={convert}>
          Tranform
        </Button>
        <Button variant="contained">Format</Button>
        <Button variant="contained" sx={{ margin: "2vh 0" }}>
          Clean
        </Button>
      </div>
      <Container maxWidth="sm" sx={{ height: "90vh", margin: "2vh" }}>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "100vh",
            position: "relative",
            height: "100%",
          }}
        >
          <textarea value={csv} disabled style={{"height":"100%", "width":"100%"}}/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
