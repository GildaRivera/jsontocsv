import logo from "./logo.svg";
import "./App.css";
import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";

function App() {
  const [csv, setCSV] = useState([]);
  const [jsonA, setJsonA] = useState();
  const jsonInput = useRef();
  const csvInput = useRef();
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
  const handleChange = (e) => {
    try {
      setJsonA(JSON.parse(e.target.value));
    } catch (e) {}
  };
  const handleClean = () => {
    jsonInput.current.value = "";
    csvInput.current.value = "";
    setCSV();
    setJsonA();
    //setFormat();
  };
  const handleFormat = (e) => {
    //setFormat(JSON.stringify(jsonA, null, 2));
    jsonInput.current.value = JSON.stringify(jsonA, null, 2);
  };
  return (
    <>
    <h1 class="title is-size-1" style={{textAlign:"center", color:"white"}}>JSON to CSV</h1>

    <div style={{ display: "flex" }}>
      <Container maxWidth="sm" sx={{ height: "60vh", margin: "2vh" }}>
        <Box
          sx={{
            
            height: "100vh",
            position: "relative",
            height: "100%",
          }}
        >
          <textarea
            onChange={handleChange}
            ref={jsonInput}
            style={{ height: "100%", width: "100%", borderRadius:"10px", backgroundColor:"#white",color:"#1976d2", fontSize:"larger" }}
          />
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
        <Button variant="contained" onClick={handleFormat} sx={{   }}>
          Format
        </Button>
        <Button
          variant="contained"
          sx={{ margin: "2vh 0" }}
          onClick={handleClean}
        >
          Clean
        </Button>
      </div>
      <Container maxWidth="sm" sx={{ height: "60vh", margin: "2vh" }}>
        <Box
          sx={{
            
            height: "100vh",
            position: "relative",
            height: "100%",
          }}
        >
          <textarea
            value={csv}
            ref={csvInput}
            disabled
            style={{ height: "100%", width: "100%",borderRadius:"10px", backgroundColor:"rgb(0 142 255 / 7%)", color:"#1976d2", fontSize:"larger" }}
          />
        </Box>
      </Container>
    </div>    </>
  );
}

export default App;
