import React from 'react';
import { BrowserRouter as Router, Route,Navigate, Routes} from 'react-router-dom';

import Movies from './movies/pages/Movies';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/User';
import UserMovies from './movies/pages/UserMovies';
import UpdateMovies from './movies/pages/UpdateMovies';
import Auth from './user/pages/Auth';
const App = () => {
  return (
    <Router>
    <MainNavigation/>
      <main>
      <Routes>
        <Route path= "/" element = {<Users/>}/>
        <Route path = "/:userId/movies" element = {<UserMovies/>}/>
        <Route path = "/movies/new" element = {<Movies/>}/>    
        <Route path = "movies/:movieId" element = {<UpdateMovies/>} />
        <Route path = "/auth" element = {<Auth/>} />
        <Route
            path="*"
            element={<Navigate to="/" replace />}
        />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
