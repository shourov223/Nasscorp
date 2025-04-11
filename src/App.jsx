import './App.css'
import Navbar from './Navbar/navbar'
import Banner from './banner/banner'
import Card from './Card/card'
import Service from './service/service'
import Services from './providing_service/services'
import Client from './client/Client'
import OurTeam from './Our Team/OurTeam'
import Footer from './footer/footer'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Card/>
      <Service/>
      <Services/>
      <Client/>
      <OurTeam/>
      <Footer/>
    </>
  )
}

export default App
