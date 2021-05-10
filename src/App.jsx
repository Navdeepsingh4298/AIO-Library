import React from 'react';

// Routing
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

//Global Styles
import "./global.styles.css";

//components
import Header from "./components/Layout/header/header.component"
import Footer from "./components/Layout/footer/footer.component"

//Pages
import NotFound from "./pages/notFound/not-found.page"
import HomePage from "./pages/homepage/homepage.mainpage"
import About from "./pages/about/about.page"
import Contact from "./pages/contact/contact.page"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import NewsPage from "./pages/news/news.page"
import CalculatorPage from "./pages/tools-pages/calculator.page"
import ConverterPage from "./pages/tools-pages/converter.page"
import SettingsPage from "./pages/settings-page/settings.page"
import DonatePage from "./pages/donate/donate.page"


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/tools/calculator" component={CalculatorPage} />
            <Route exact path="/tools/converter" component={ConverterPage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/news" component={NewsPage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/donate" component={DonatePage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
