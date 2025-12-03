import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { GrFavorite } from 'react-icons/gr';
import FavoritesList from './components/FavoritesList';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Link to="/favorites" className="p-5 fs-1">
          <GrFavorite />
        </Link>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
