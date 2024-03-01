import { Link } from 'gatsby';
import React from 'react'
import Layout from '../Components/Layout/Layout';
import './404.css'
import { Helmet } from 'react-helmet';

const P404 = () => {
    return (
        <Layout footer={false}>
            <Helmet>
                <title> 😪 Page Introuvable</title>
            </Helmet>
            <div className="nfound">
                <div className="container-md">
                    <div className="nfound-row">
                        <div className='nfound-status pe-3'>404</div>
                        <div className="nfound-txt ps-3">
                            Page introuvable
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default P404;