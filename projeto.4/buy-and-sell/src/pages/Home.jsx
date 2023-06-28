import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footter/footer'
import Main from '../components/mainHome/main'


const homePage = () => {
  return (
    <div>
    <Header
    title= "Seu negocio"
    content= "Nos o ajudamos em seu negocio online"
    text_btn= "COMEÇAR"
    />
    <Main />
    
    <Footer />
    </div>
  )
}

export default homePage;