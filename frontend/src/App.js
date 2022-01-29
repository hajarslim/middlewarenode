import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Switch, Route, Router } from 'react-router-dom';
import AddCourse from './components/pages/AddCourse';
import PackageInfo from './components/pages/PackageInfo';
import AdminLogin from './components/pages/AdminLogin';
import UserSignUp from './components/pages/userSignUp'
import UserLogin from './components/pages/UserLogin'
import UserInfo from './components/pages/UserInfo';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import courses from './components/pages/courses';
import MessagesInfo from './components/pages/messagesInfo';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {


    };

  }
  
  
  render() {

    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/userInfo" component={UserInfo} />
          <Route path="/userLogin" component={UserLogin} />
          <Route path="/userSignup" component={UserSignUp} />
          <Route path="/addCourse" component={AddCourse} />
          <Route path="/PackageInfo" component={PackageInfo} />
          <Route path="/adminLogin" component={AdminLogin} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} /> 
          <Route path="/courses" component={courses} />
          <Route path="/messages" component={MessagesInfo} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer /> 
      </div>
    )
  }


}

export default App;