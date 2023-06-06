import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home'
import HouseCard from './pages/Logement'
import About from './pages/about'
import Error404 from './pages/404'

function App(){
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/logement/:id' element={<HouseCard />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App