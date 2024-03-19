
import './App.css'
import About from './Components/About'
import Blog from './Components/Blog'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import NewsLetter from './Components/NewsLetter'
import Products from './Components/Products'
import Services from './Components/Services'
import MyFooter from './Components/MyFooter'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Products/>
    <Blog/>
    <NewsLetter/>
    <MyFooter/>
    </>
   
  )
}

export default App
