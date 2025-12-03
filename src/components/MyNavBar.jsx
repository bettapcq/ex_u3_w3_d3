import { Container, Row, Navbar, Col } from 'react-bootstrap';
import { RiHome2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { GrFavorite } from 'react-icons/gr';

const MyNavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <Row>
          <Col>
          <Link to="/" className=" fs-1 p-2 text-black">
            <RiHome2Line />
          </Link>
          <Link to="/favorites" className="fs-1 p-2 text-info">
            <GrFavorite />
          </Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
