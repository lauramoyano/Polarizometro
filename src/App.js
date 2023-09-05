import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import Features from "./components/landing/features";
import Contact from "./components/landing/contact";
import { tema } from "./theme/theme";
import Header from "./components/landing/header";
import Footer from "./components/landing/footer";
import SucessoEmail from "./components/sucessoEmail";
import Login from "./components/login";

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
     
        <Route path="/sucessoEmail" element={<SucessoEmail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;