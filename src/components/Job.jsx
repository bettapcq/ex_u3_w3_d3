import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdOutlineFavorite } from 'react-icons/md';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const Job = ({ data }) => {
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

  console.log(favoritesArray)

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <div type="button" className="me-2 text-info" onClick={() => changeIcon()}>
          {isFavorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
            <Link to={`/${data.company_name}`} className='m-2'>{data.company_name}</Link>
        </div>
      
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
