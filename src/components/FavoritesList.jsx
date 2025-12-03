import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineFavorite } from 'react-icons/md';

const FavoritesList = () => {
  const favoritesArray = useSelector((currentState) => {
    return currentState.favorites.content;
  });
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Your favorites companies: </h1>
          {favoritesArray.map((company) => (
            <>
              <ListGroup.Item
                style={{ border: '1px solid #00000033', borderRadius: 4 }}
                type="button"
                className="m-2 text-info p-3"
                onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: company })
                }
              >
                <MdOutlineFavorite />
                <Link className="m-2">{company}</Link>
              </ListGroup.Item>
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritesList;
