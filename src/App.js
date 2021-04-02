import React from 'react';

// Routing
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

//Global Styles
import "./global.styles.css";

//components
import Header from "./components/header/header.component"
import Footer from "./components/footer/footer.component"

//Pages
import NotFound from "./pages/notFound/not-found.page"
import HomePage from "./pages/homepage/homepage.mainpage"
import About from "./pages/about/about.page"
import Contact from "./pages/contact/contact.page"


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
