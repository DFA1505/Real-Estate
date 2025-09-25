import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import Contacts from './components/Contacts'
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonial />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
