import react from 'react'
import {BrowserRouter,  Route} from 'react-router-dom'
import './App.css';
import Assignment from './components/Assignment';
import Course from './components/Course';
import CourseApi from './components/CourseApi';
import Home from './components/Home'
import Login from './components/Login';
import ShirtSub from './components/ShirtSub';
import Signup from './components/Signup';
import Header from './components/Header';
import Footer from './components/Footer';

function Routing() {
  return (
            <BrowserRouter>
                <Header />
                
                <Route exact path='/' component={CourseApi}/>
                <Route path='/product/:id' component={ShirtSub}/>
                <Footer />
            </BrowserRouter>
  );
}

export default Routing;
