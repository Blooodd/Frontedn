import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from './components/homepage';
import ContactForm from './components/contactform';
import AboutSection from './components/about';
import ProductsPage from './components/products'
import theme from './theme';
import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider} from "@mui/material/styles";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ContactForm" element={<ContactForm />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;