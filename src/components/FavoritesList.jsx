import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdOutlineFavorite } from 'react-icons/md';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

const FavoritesList = ({ data }) => {
  const favoritesArray = useSelector((currentState) => {
    return currentState.favorites.content;
  });
  const dispatch = useDispatch();

  const isFavorite = favoritesArray.includes(data.company_name);

  const changeIcon = () => {
    isFavorite
      ? dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: data.company_name })
      : dispatch({ type: 'ADD_TO_FAVORITES', payload: data.company_name });
  };

  console.log(favoritesArray);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Your favorites companies: </h1>
          {favoritesArray.map((company) => (
            <>
              <div type="button" className="me-2" onClick={() => changeIcon()}>
                {isFavorite ? (
                  <MdOutlineFavorite />
                ) : (
                  <MdOutlineFavoriteBorder />
                )}
              </div>
              <Link>{company.company_name}</Link>
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritesList;
