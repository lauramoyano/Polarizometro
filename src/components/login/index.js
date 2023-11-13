import { useState } from 'react';
import cover from './../../assets/images/illustration-features-tab-3.svg';
import Header from '../landing/header';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../../api/user.api';

import {
  Field,
  Navigation,
  StyledBox,
  SignInButton,
  Container,
  Button,
  Title,
} from './style';

function Login() {
  const [option, setOption] = useState('');
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

    if (option === 'create') {
      // Perform user registration
      try {
        const response = await registerUser({ name, email, password, phone });
        if (response.status === 201) {
          // User registered successfully, you can redirect to a success page or show a message.
          navigate('/successEmail');
        }
      } catch (error) {
        console.error('Error registering user:', error);
      }
    } else {
      // Perform authentication
      try {
        const response = await loginUser({ email, password });
        console.log(response.status);
        if (response != null) {
          // Successful login, store the token if needed and redirect.
          navigate('/successEmail');
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  };

  return (
    <Container>
      <Header />
      <Field>
        <img src={cover} alt="logo" />
        <Navigation>
          <Button onClick={() => setOption('create')}>Create an account</Button>
          <Button onClick={() => setOption('login')}>Login</Button>
        </Navigation>
        <StyledBox onSubmit={handleSubmit}>
          {option === 'create' ? (
            <div className="create-field">
              <Title> Create your account and enjoy </Title>
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
              <Title> Login to your account </Title>
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
          <SignInButton type="submit">Login</SignInButton>
        </StyledBox>
      </Field>
    </Container>
  );
}

export default Login;
