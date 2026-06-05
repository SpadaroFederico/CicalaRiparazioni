import { StrictMode } from 'react'
import Navbar from './components/Navbar' 
import Jumbotron from './components/Jumbotron'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Footer from './components/Footer'


export default function App(){
  return(
  <StrictMode>
    <Navbar/>
    <Jumbotron/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Footer/>
  </StrictMode>
  )
}