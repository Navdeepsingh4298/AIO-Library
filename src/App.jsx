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
import ToolsPage from "./pages/tools-page/tools.page"
import SettingsPage from "./pages/settings-page/settings.page"


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
            <Route exact path="/tools" component={ToolsPage} />
            <Route exact path="/settings" component={SettingsPage} />
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
