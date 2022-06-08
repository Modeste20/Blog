import { Link } from "gatsby"
import * as React from "react"
import Layout from "../Components/Layout/Layout"
import Testimonials from "../Components/Testimonials/Testimonials"
import Profil from './../images/Landry-avatar.png'
import './home.css'

// markup
const IndexPage = ( ) => {

  return (
    <Layout>
      <div className="landry-portfolio-home">
        <div className="home-banner">
          <div className="banner-home">
            <div className="container-md">
              <div className="row">
                <div className="col-12 col-sm-9 col-md-4 col-lg-6 mb-5 text-center">
                  <img src={Profil} alt='Image de Landry Modeste' height={300} />
                </div>
                <div className="col-12 col-sm-9 col-md-8 col-lg-6 description">
                  <div className="sub-title">
                    <h5>Plop ! Moi c'est </h5>
                  </div>
                  <div className="title">
                    <h1>
                      Landry Modeste
                    </h1>
                  </div>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima inventore facilis laborum qui corrupti veniam eos numquam porro eligendi. Natus nihil unde eum est repellat! Dolores cum a autem!
                    </p>
                    <Link to="/articles" className="btn btn-secondary mt-4 px-4 link-about-modeste">En savoir plus</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <section className='temoignages' id='temoignages'>
          <div className="container-md">
            <div className="section-title">
              <h3 className="pb-5">Les témoignages</h3>
            </div>
            <Testimonials />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
