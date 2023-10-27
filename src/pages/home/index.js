
import { Container } from "./styled";
import About from "./../../components/landing/about"
import Contact from "../../components/landing/contact";
import Features from "../../components/landing/features";
import Header from "../../components/landing/header";


export default function Home() {
  return (
    <Container>
     <Header />
     <About/>
     <Features/>
     <Contact/>
    </Container>
  );
}
