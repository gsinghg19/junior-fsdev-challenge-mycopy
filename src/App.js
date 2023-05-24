import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Home } from "./pages/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import SignInSide from "./pages/LogIn";
import { Drive } from "./pages/Drive";
import { Gcs } from "./pages/GCS";
import "./App.css";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Header check={darkMode} change={() => setDarkMode(!darkMode)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/drive" element={<Drive />} />
            <Route path="/gcs" element={<Gcs />} />
            <Route path="/login" element={<SignInSide />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}
