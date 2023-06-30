import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footter/footer'
import "./home.css"
import "../../assets/css/utils.css"
import service2 from "../../assets/service-2.png"
import service3 from "../../assets/service-3.png"
import {BiWorld} from "react-icons/bi"





const homePage = () => {
  return (
    <>
    <Header
    title= "Seu negocio"
    content= "Nos o ajudamos em seu negocio online"
    text_btn= "COMEÇAR"
    />
    <main>
      <section className="section__main">
             <h2 className='u-center_text'>Crie seu negocio</h2>
                <div class="section__Content">
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
                   <div className="composition__container">
                     <div className="composition">
                           <img className="composition__photo compositon__photo--1" width="100%"src={service3} alt="service-4" />
                           <img className="composition__photo compositon__photo--2" src={service2} alt="service-3" />
                     </div>
                   </div>
                </div>
      </section>
 
      <section className="section__feature">
        <h2 className='u-center_text'>Crie seu negocio</h2>
            <div className="section__features-block">
              <div className="card">
                  <div className="card__icon">
                    <p><BiWorld /></p>
                  </div>
                  <div className="card__heading">
                      <h4>Venda seu produto</h4>
                  </div>
                  <div className="card__details">
                      <ul>
                        <li> Venda seu produto para o mundo todo</li>
                        <li>Sem taxa</li>
                      </ul>
                  </div>
              </div>
              <div className="card">
                  <div className="card__icon">
                    <p><BiWorld /></p>
                  </div>
                  <div className="card__heading">
                      <h4>Venda seu produto</h4>
                  </div>
                  <div className="card__details">
                      <ul>
                        <li> Venda seu produto para o mundo todo</li>
                        <li>Sem taxa</li>
                      </ul>
                  </div>

              </div>
        </div>
      </section>

    </main>
    
    <Footer />
    </>
  )
}

export default homePage;