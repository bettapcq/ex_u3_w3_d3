import { Container, Row, Col } from 'react-bootstrap';
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
              <div
                type="button"
                className="me-2"
                onClick={() =>
                  dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: company })
                }
              >
                <MdOutlineFavorite />
              </div>
              <Link>{company}</Link>
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritesList;
