import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';

const LoginPage = () => {
  const { dispatch, state } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({ type: 'LOGIN', payload: 'username' });
    const redirectTo = state.lastVisited || '/';
    navigate(redirectTo);
  };

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
