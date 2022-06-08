import { faCss3, faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import Layout from "../../Components/Layout/Layout"
import ServiceCard from "../../Components/ServiceCard/ServiceCard"
import Banner from "../../Components/Shared/Banner/Banner"

const Services = () => {
    return (
        <Layout>
            <div className="landry-services">
                <Banner title={'Services'} className='banner-services' />
                <div className="container-md services">
                    <div className="row justify-content-center">
                        <ServiceCard icon={faHtml5} title={'Title1'} link='/' className={"card-web"}>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis provident dolorum vero autem reprehenderit nemo magnam. At esse ex voluptates expedita veritatis facere, repellat pariatur dolores laudantium, eos excepturi sint!
                            </p>
                        </ServiceCard>
                        <ServiceCard icon={faCss3} title={'Title1'} link='/' className={"card-web"}>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis provident dolorum vero autem reprehenderit nemo magnam. At esse ex voluptates expedita veritatis facere, repellat pariatur dolores laudantium, eos excepturi sint!
                            </p>
                        </ServiceCard>
                        <ServiceCard icon={faArrowUp} title={'Title1'} link='/' className={"card-web"}>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis provident dolorum vero autem reprehenderit nemo magnam. At esse ex voluptates expedita veritatis facere, repellat pariatur dolores laudantium, eos excepturi sint!
                            </p>
                        </ServiceCard>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Services