import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>

      <Navbar></Navbar>
      <div className=''>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
