import React from 'react'
import Layout from './../../Components/Layout/Layout'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { useLocation } from '@reach/router'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import isEmail from 'validator/lib/isEmail'
import { useState } from 'react'
import { BreadCrumb } from '../../Components/Shared/BreadCrumb/BreadCrum'
import Banner from '../../Components/Shared/Banner/Banner'

const Contact = () => {
    const location = useLocation()
    //input field state


    const [objet,setObjet] = useState({
        name:'',
        mail:'',
        sujet:'',
        message:''
    })

    let [error,setError] = useState({
        name:'',
        mail:'',
        sujet:'',
        message:''
    })

    const NameVerify = (name) => {
        if(!name){
            setError(c => ({...c,name:'Veuillez entrer votre nom'}))
        } else{
            setError(c => ({...c,name:''}))
        }
    }

    const SujetVerify = (sujet) => {
        if(!sujet){
            setError(c => ({...c,sujet:"Veuillez choisir l'objet de votre message"}))
        } else{
            setError(c => ({...c,sujet:""}))
        }
    }

    const MessageVerify = (message) => {
        if(!message){
            setError(c => ({...c,message:"Veuillez choisir l'objet de votre message"}))
        } else{
            setError(c => ({...c,message:""}))
        }
    }

    const MailVerify = (mail) => {
        if(!mail){
            setError(c => ({...c,mail:'Veuillez entrer votre email'}))
        } else{
            if(!isEmail(mail)){
                setError(c => ({...c,mail:'Veuillez entrer un email valide'}))
            } else{
                setError(c => ({...c,mail:''}))
            }
        }
    }

    const change = (value) => {
        console.log('value',value)
    }

    const changeField = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const obj = {[name]:value};
        if(name === 'name'){
            NameVerify(value)
        }
        if(name === 'mail'){
            MailVerify(value)
        }
        if(name ==='sujet'){
            SujetVerify(value)
        }
        if(name === 'message'){
            MessageVerify(value)
        }
        console.log('error',error)
        setObjet(c => ({...c,...obj}))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        MessageVerify(objet.message)
        NameVerify(objet.name)
        MailVerify(objet.mail)
        SujetVerify(objet.sujet)
        console.log('error',error)
    }



    return (
        <Layout>
            <div className="contact-landry">
                <Banner title={'Contact'} className='banner-contact' />
                <section className='section-contact container-md'>
                    <div className="row justify-content-between">
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptate? Ducimus autem corporis iste qui possimus, consequatur eaque voluptatibus alias ipsum et nisi rerum unde perferendis, recusandae aut! Aspernatur, esse!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam deserunt maiores consequuntur veniam. Sed beatae in, a magni, corporis tenetur quibusdam soluta ratione commodi nihil alias aut saepe nobis sunt?
                            </p>
                        </div>

                        <div className="col-12 col-md-5 col-lg-6 pb-4 form-row order-1 order-md-0">
                            <h5>Mes informations de contact</h5>
                            <div className="info-contact">
                                <div>
                                    <div className="info">
                                        <div className="icn icn-map">
                                            <FontAwesomeIcon icon={faMapMarker} />
                                        </div>
                                        <div className="info-content">
                                            France , Paris
                                        </div>
                                    </div>

                                    <div className="info">
                                        <div className="icn icn-envelope">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div className="info-content">
                                            <a href="mailto:jojomodeste52@gmail.com">
                                                Jojomodeste52@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="info">
                                        <div className="icn icn-tel">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div className="info-content">
                                            +213 791107290
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 form-section order-md-1 order-0">
                            <h5>Formulaire de contact</h5>

                            <form className="contact-form" onSubmit={onSubmit}>
                                <div className="field mb-4 field-name">
                                    <input value={objet.name} onChange={changeField} name='name' type="texte" className={"form-control "+(error.name ? ' border border-danger ' : '')} id="nom" aria-describedby="Nom" placeholder='Nom' />
                                    {
                                        error.name && <small className='text-danger'>{error.name}</small>
                                    }
                                </div>

                                <div className="field mb-4 field-mail">
                                    <input value={objet.mail} onChange={changeField} name='mail' type="email" className={"form-control "+(error.mail ? ' border border-danger ' : '')} id="mail" aria-describedby="mail" placeholder='Email' />
                                    {
                                        error.mail && <small className='text-danger'>{error.mail}</small>
                                    }
                                </div>

                                <div className="field mb-4 field-object">
                                    <select value={objet.sujet} onChange={changeField} name='sujet' className={'form-select '+(error.sujet ? ' border border-danger ' : '')} placeholder='Sujet'>
                                        <option value="">Sujet</option>
                                        <option value="commande">Commander un service</option>
                                        <option value="hired">M'embaucher</option>
                                        <option value="team">Former une équipe sur un projet</option>
                                    </select>
                                    {
                                        error.sujet && <small className='text-danger'>{error.sujet}</small>
                                    }
                                </div>

                                <div className="field mb-4 field-message">
                                    <textarea value={objet.message} onChange={changeField} name='message' className={"form-control "+(error.message ? ' border border-danger ' : '')} id="message" rows="6" placeholder='Votre message'></textarea>
                                    {
                                        error.message && <small className='text-danger'>{error.message}</small>
                                    }
                                </div>

                                <button className="btn btn-btn mt-2 mb-5 px-4 py-2" type='submit' onClick={onSubmit}>Envoyer</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>

    )
}

export default Contact