import React from 'react';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AirflowPage from "./pages/AirflowPage"
import TravelPage from "./pages/TravelPage"
import ContactPage from "./pages/ContactPage"
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Sai Panneerselvam",
      headerLinks: [
        { title: "Home", path: "/"},
        { title: "About", path: '/about'},
        { title: "Airflow", path: '/airflow'},
        { title: "Travel", path: '/travel'},
        { title: "Contact", path: '/contact'}
      ],
      home: {
        title: "Be Fearless.",
        subTitle: "Encourage. Empower. Endure.",
        text: "Data Engineer/Scientist. Solo Traveler. Dog Lover. Human Being. "
      },
      about: {
        title: "About Me",
      },
      airflow: {
        title: "Airflow"
      },
      travel: {
        title: "My Adventures"
      },

      contact: {
        title: "Let's Talk"
      }


    }
  }
  render() {
    return (

      <Router>
        <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" >
          <Navbar.Brand> Sai Panneerselvam</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/airflow">Airflow</Link>
              <Link className="nav-link" to="/travel">Travel</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
        <Route path="/about" render={() => <AboutPage title={this.state.home.title} />} />
        <Route path="/airflow" render={() => <AirflowPage title={this.state.home.title} />} />
        <Route path="/travel" render={() => <TravelPage title={this.state.home.title} />} />
        <Route path="/contact" render={() => <ContactPage title={this.state.home.title} subTitle={this.state.home.subTitle}/>} />

        <Footer/>
        </Container>
      </Router>
        );
  }

}

export default App;
