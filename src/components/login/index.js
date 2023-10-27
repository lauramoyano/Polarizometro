import { useState } from 'react';
import capa from './../../assets/images/illustration-features-tab-3.svg';
import Header from '../landing/header';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../../api/user.api'; // Importa las funciones de tu API

import {
  Campo,
  Navegacao,
  EstiloCaixa,
  Entrar,
  Container,
  Botao,
  Titulo,
} from './style';

function Login() {
  const [opcao, setOpcao] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (opcao === 'criar') {
      // Realiza el registro de usuario
      try {
        const response = await registerUser({name, email, password, phone });
        if (response.status === 201) {
          // Usuario registrado con éxito, puedes redirigirlo a una página de éxito o mostrar un mensaje.
          navigate('/sucessoEmail');
        }
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
      }
    } else {
      // Realiza la autenticación
      try {
        const response = await loginUser({ email, password });
        console.log(response.status)
        if (response != null) {
          // Inicio de sesión exitoso, almacena el token si es necesario y redirige.
          navigate('/sucessoEmail');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    }
  };

  return (
    <Container>
      <Header />
      <Campo>
        <img src={capa} alt="logo" />
        <Navegacao>
          <Botao onClick={() => setOpcao('criar')}>Create an account</Botao>
          <Botao onClick={() => setOpcao('login')}>Login</Botao>
        </Navegacao>
        <EstiloCaixa onSubmit={handleSubmit}>
          {opcao === 'criar' ? (
            <div className="criar-campo">
              <Titulo> Create your account and enjoy </Titulo>
              <input
                type="name"
                required
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="phone"
                required
                placeholder="Enter your phone"
                value={phone}
                onChange={handlePhoneChange}
              />
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              <input
                type="password"
                required
                placeholder="Confirm your password"
              />
            </div>
          ) : (
            <div>
              <Titulo> Login to your account </Titulo>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="password"
                required
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          )}
          <Entrar type="submit">Login</Entrar>
        </EstiloCaixa>
      </Campo>
    </Container>
  );
}

export default Login;
