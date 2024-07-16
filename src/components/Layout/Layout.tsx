import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container className="mt-5">
      <AppBar />
      {children}
    </Container>
  );
};

export default Layout;
