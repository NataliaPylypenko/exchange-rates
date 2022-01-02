import React from 'react';

import './App.scss';

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Rate from "../rate/Rate";
import Contacts from "../contacts/Contacts";
import Currency from "../currency/Currency";
import Error from "../error/Error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    let nav = this.props.nav;

    return (
        <Router>
          <div className="App">
            <Header nav={nav} />

            <main className="main-content">

                <Routes>
                  <Route exact path="/" element={<Rate />} />
                  <Route exact path="/currency" element={<Currency />} />
                  <Route exact path="/contacts" element={<Contacts />} />
                  <Route path="*" element={<Error />} />
                </Routes>

            </main>

            <Footer />

          </div>
        </Router>
    );
  }
}

export default App;
