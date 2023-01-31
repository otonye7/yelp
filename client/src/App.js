import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetailsPage from './routes/RestaurantDetailsPage';
import { RestaurantContextProvider } from './context/RestaurantContext';

function App() {
  return (
    <RestaurantContextProvider>
    <div className='container'>
      <Routes>
        <Route path={'/'} exact={true} element={<Home />} />
        <Route path={'/restaurants/:id/update'} exact={true} element={<UpdatePage />} />
        <Route path={'/restaurants/:id'} exact={true} element={<RestaurantDetailsPage />} />
      </Routes>
    </div>
    </RestaurantContextProvider>
  );
}

export default App;
