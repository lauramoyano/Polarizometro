
import {
  Container,
  Enviar,
  Email,
  Formulario,
  Titulo,
} from "./style";
import { i18n } from "./../../../translate/i18n";
export default function Contact() {
  return (
    <Container>
     
      <Titulo>{i18n.t("contact.titulo")}</Titulo>

      <Formulario action="/sucessoEmail">
        <Email
          type="text"
          required
          placeholder={i18n.t("contact.textoBotao")}
          id="email"
          className="input"
        />
        <Enviar type="submit">{i18n.t("contact.botao")}</Enviar>
      </Formulario>
    </Container>
  );
}
