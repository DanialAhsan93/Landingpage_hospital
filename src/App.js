import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar';
import Header from './component/Header';
import Activity from './component/Activity';
import Book from './component/Book';
import Courses from './component/Courses';
import Hero from './component/Hero';
import Expert from './component/Expert';
import Team from './component/Team';
import Newsletter from './component/Newsletter';
import Footer from './component/Footer';
import Copyright from './component/Copyright';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Activity />
      <Book />
      <Courses />
      <Hero />
      <Expert />
      <Team />
      <Newsletter />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
