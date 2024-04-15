import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { api_key } from './utils/api';
import './App.css'
import { useDispatch} from 'react-redux';
import { getApiConfiguretion } from './store/homeSlicer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from "./pages/home/Home"
import Details from "./pages/details/Details"
import Explore from "./pages/explore/Explore"
import PageNotFound from "./pages/404/PageNotFound"
import SearchResult from "./pages/searchResults/SearchResult"
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { getGenres } from './store/homeSlicer';

function App() {


  // ============================================== 1
  
  const dispatch=useDispatch()
  
  useEffect(() => {
    fetchApiConfig();
    genresCall()
  }, []);


// ============================================== 2
const fetchApiConfig = () => {
  fetchDataFromApi(`/configuration?${api_key}`).then((res) => {  
    const url = {
      backdrop: res.images.secure_base_url + "original",
      poster: res.images.secure_base_url + "original",
      profile: res.images.secure_base_url + "original",
    };
    
    dispatch(getApiConfiguretion(url));
  });
};

// ============================================== 3


const genresCall = async () => {
  let promises = [];
  let endPoints = ["tv", "movie"];
  let allGenres = {};

  endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list?${api_key}`));
  });

  const data = await Promise.all(promises);
  data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
  });


  dispatch(getGenres(allGenres));
};



return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:mediaType/:id' element={<Details/>}/>
      <Route path='/search/:query' element={<SearchResult/>}/>
      <Route path='/explore/:mediaType' element={<Explore/>}/>
      <Route path='*' element={<PageNotFound/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
