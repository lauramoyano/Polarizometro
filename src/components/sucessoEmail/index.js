import { Container, Sucesso, PerguntasCard } from "./style";
import arrow from "./../../assets/images/icon-arrow.svg";
import { ParagrafoPrincipal } from "./../landing/features/style";
import { Link } from "react-router-dom";
import PolarizationForm from '../polarizometroMeasures/e&r';
import Sidebar from "../sidebar"
import Topbar from "../topbar";


export default function SucessoEmail() {
  return (
    <Container>
      <Topbar />
      <Sidebar />
      <PolarizationForm/>
    </Container>
  );
}

