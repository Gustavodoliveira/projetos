import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footter/footer'
import "./home.css"
//import service1 from "../../assets/service-1.jpg"
//import service2 from "../../assets/service-2.png"
//import service3 from "../../assets/service-3.jpg"


const homePage = () => {
  return (
    <>
    <Header
    title= "Seu negocio"
    content= "Nos o ajudamos em seu negocio online"
    text_btn= "COMEÇAR"
    />
    <main>
      <section className="section-apresentation">
             <h2>Crie seu negocio</h2>
          <div className="section__container">
                <div className="section__block-text">
                    <div className="section__block-text-1">
                        <h3>Te auxiliamos em seu negocio</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro magni quaerat fugit eaque doloribus facere corrupti cum tenetu</p>
                    </div>
                    <div className="section__block-text-1">
                        <h3>Venda seu produto</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro magni quaerat fugit eaque doloribus facere corrupti cum tenetu mkdxbsvsoxio sxixnihbds knxsbx</p>
                    </div>
                 </div>
                 <div className='section__photo'>
                       <img className="section__photo-1" src="" alt="service-1" />
                       <img className="section__photo-2" src="" alt="service-4" />
                       <img className="section__photo-3" src="" alt="service-3" />
                </div>
            
          </div>
      </section>
    </main>
    
    <Footer />
    </>
  )
}

export default homePage;