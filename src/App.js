
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';

import About from './Components/AboutUs/About';
import Blog from './Components/Blog/Blog';
import Login from './Components/Firebase/Login/Login';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
 import NotFound from './Components/NotFound/NotFound'
import AuthProvider from './Components/Contexts/AuthProvider';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import Experts from './Components/Experts/Experts';
import Registration from './Components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route  path='/home'>
          <Home></Home>
        </Route>
        <Route  path='/Services'>
        <Services></Services>
        </Route>
        <Route  path='/Blog'>
          <Blog></Blog>
        </Route>
        <Route  path='/About'>
          <About></About>
        </Route>
        <Route  path='/login'>
          <Login></Login>
        </Route>
        <Route path='/expert'>
        <Experts></Experts>
        </Route>
        <PrivateRoute path='/booking/:serviceid'>
            <Booking></Booking>
        </PrivateRoute>
        <Route path='/registration'>
          <Registration></Registration>
        </Route>
        <Route  path='*'>
         <NotFound></NotFound>
        </Route>
        
      </Switch>
      
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
      
      
      
      
      
    </div>
  );
}

export default App;
