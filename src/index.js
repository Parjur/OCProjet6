import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import HouseCard from './pages/Logement';
import About from './pages/about';
import Error404 from './pages/404';
import Header from './components/header';
import Footer from './components/footer';
import GlobalStyle from './styles/GlobalStyle';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/logement/:id' element={<HouseCard />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
      <Footer />
      
    </Router>
  </React.StrictMode>
);


