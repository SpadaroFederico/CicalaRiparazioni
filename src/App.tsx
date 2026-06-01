import { StrictMode } from 'react'
import Navbar from './components/Navbar' 
import Jumbotron from './components/jumbotron'

export default function App(){
  return(
  <StrictMode>
    <Navbar/>
    <Jumbotron/>
  </StrictMode>
  )
}