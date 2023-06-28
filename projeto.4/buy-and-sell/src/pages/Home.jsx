import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footter/footer'


const homePage = () => {
  return (
    <div>
    <Header
    title= "Seu negocio"
    content= "Nos o ajudamos em seu negocio online"
    text_btn= "COMEÇAR"
    />
    
    <Footer />
    </div>
  )
}

export default homePage;