import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Container } from 'react-bootstrap';

// Components //
import Header from './Components/Header';
import Footer from './Components/Footer';

// Pages // 
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume'


function App() {
  return (
    <>
      <Router>
          <Header />
          <Switch>
            <Container>
                <Route exact path='/' name='Home' component={Home} />
                <Route path='/portfolio' name='Portfolio' component={Portfolio} />
                <Route path='/contact' name='Contact' component={Contact} />  
                <Route path='/resume' name='Resume' component={Resume} />  
              </Container>       
          </Switch>
          <Footer />
      </Router>
    </>
  );
};

export default App;
