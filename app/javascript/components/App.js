import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentShow from './pages/ApartmentShow'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Header from './components/Header'

class App extends React.Component {
  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
  } = this.props
  console.log("logged_in:", logged_in)
  console.log("current_user:", current_user)
  console.log("new_user_route:", new_user_route)
  console.log("sign_in_route:", sign_in_route)
  console.log("sign_out_route:", sign_out_route)
    return (
        <>
          <Header />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/apartmentshow" component={ApartmentShow} />
              <Route path="/apartmentindex" component={ApartmentIndex} />
              <Route path="/apartmentnew" component={ApartmentNew} />
              <Route component={NotFound} />
            </Switch>
          </Router>
          <Footer />
        </>
    );
  }
}
export default App
