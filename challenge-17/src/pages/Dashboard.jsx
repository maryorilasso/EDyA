import React from 'react';
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="mt-5">
      <h1>Dashboard</h1>
      <p>This is a protected page.</p>
    </Container>
  );
};

export default Dashboard;
