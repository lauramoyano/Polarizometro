
import { Container } from "./styled";
import About from "./../../components/landing/about"
import Contact from "../../components/landing/contact";
import Features from "../../components/landing/features";

import Questions from "../../components/landing/questions";
export default function Home() {
  return (
    <Container>
     <About/>
     <Features/>
    
     <Questions/>
     <Contact/>
    </Container>
  );
}
