import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import CompanySearchResults from './components/CompanySearchResults';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import FavoritesList from './components/FavoritesList';
import MyNavBar from './components/MyNavBar';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyNavBar />
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
