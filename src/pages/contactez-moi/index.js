import React from 'react'
import Layout from './../../Components/Layout/Layout'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import isEmail from 'validator/lib/isEmail'
import { useState } from 'react'
import Banner from '../../Components/Shared/Banner/Banner'

const Contact = () => {

    //Contact message is it sent with success

    const [success, setSuccess] = useState(null)

    const [loading,setLoading] = useState(false)

    //input field state


    const [objet, setObjet] = useState({
        name: '',
        mail: '',
        sujet: '',
        message: ''
    })

    let [error, setError] = useState({
        name: '',
        mail: '',
        sujet: '',
        message: '',
        recpatcha:''
    })

    const NameVerify = (name, event) => {
        if (!name) {
            setError(c => ({ ...c, name: 'Veuillez entrer votre nom' }))
            if (event) {
                event.preventDefault()
            }
        } else {
            setError(c => ({ ...c, name: '' }))
        }
    }

    const SujetVerify = (sujet, event) => {
        if (!sujet) {
            setError(c => ({ ...c, sujet: "Veuillez choisir l'objet de votre message" }))
            if (event) {
                event.preventDefault()
            }
        } else {
            setError(c => ({ ...c, sujet: "" }))
        }
    }

    const MessageVerify = (message, event) => {
        if (!message) {
            setError(c => ({ ...c, message: "Veuillez choisir l'objet de votre message" }))
            if (event) {
                event.preventDefault()
            }
        } else {
            setError(c => ({ ...c, message: "" }))
        }
    }

    const MailVerify = (mail, event) => {
        if (!mail) {
            setError(c => ({ ...c, mail: 'Veuillez entrer votre email' }))
            if (event) {
                event.preventDefault()
            }
        } else {
            if (!isEmail(mail)) {
                setError(c => ({ ...c, mail: 'Veuillez entrer un email valide' }))
                if (event) {
                    event.preventDefault()
                }
            } else {
                setError(c => ({ ...c, mail: '' }))
            }
        }
    }

    const changeField = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const obj = { [name]: value };
        if (name === 'name') {
            NameVerify(value)
        }
        if (name === 'mail') {
            MailVerify(value)
        }
        if (name === 'sujet') {
            SujetVerify(value)
        }
        if (name === 'message') {
            MessageVerify(value)
        }
        console.log('error', error)
        setObjet(c => ({ ...c, ...obj }))
    }

    //Handle recpatcha

    const [number1, setNumber1] = useState(Math.round(Math.random() * 50))
    const [number2, setNumber2] = useState(Math.round(Math.random() * 50))

    //Réponse entré par l'utilisateur

    const [enteredNumber, setEnteredNumber] = useState(0)

    // état de l'erreur pour le recptacha




    //----

    //Change input number value

    const change = (e) => {
        setEnteredNumber(e.target.value)
    }


    let errorExist = false


    const onSubmit = (e) => {
        e.preventDefault();
        setSuccess(null)
        MessageVerify(objet.message, e)
        NameVerify(objet.name, e)
        MailVerify(objet.mail, e)
        SujetVerify(objet.sujet, e)


        for (const index in error) {
            if (error[index]) {
                errorExist = true
            }
        }

        if(parseInt(enteredNumber,10) !== number1 + number2){
            setError(c => ({...c,recpatcha:'Veuillez bien résoudre le recpatcha'}))
            return;
        } else{
            setError(c => ({...c,recpatcha:''}))
        }

        if (!errorExist) {

            setLoading(true)

            const formData = new FormData(document.forms['contact'])
            formData.delete('recpatcha')
            fetch('https://getform.io/f/8cd05551-add6-4a2f-91aa-e9104b11c629', {
                method: "POST",
                body: formData
            })
                .then(res => {
                    setLoading(false)
                    if (res.ok) {
                        res.text()
                            .then(data => {
                                console.log('data', data)
                                if (data) {
                                    setSuccess(true);
                                    setObjet({
                                        name: '',
                                        mail: '',
                                        sujet: '',
                                        message: ''
                                    })
                                    setNumber1(Math.round(Math.random() * 50))
                                    setNumber2(Math.round(Math.random() * 50))
                                    setEnteredNumber(0)
                                    window.scrollTo(0, 0)
                                }
                            })
                            .catch(error => {
                                throw new Error()
                            })
                    } else {
                        throw new Error()
                    }
                })
                .catch(error => {
                    setSuccess(false)
                    setLoading(false)
                    console.log('error', error)
                    setNumber1(Math.round(Math.random() * 50))
                    setNumber2(Math.round(Math.random() * 50))
                    setEnteredNumber(0)
                    window.scrollTo(0, 0)
                })
        }
    }



    return (
        <Layout>
            <div className="contact-landry">
                <Banner title={'Contact'} className='banner-contact' />
                <section className='section-contact container-md'>
                    <div className="row justify-content-between">
                        <div className="text">
                            <p>
                                Que vous soyez designer d'interface utilisateur ou développeur web souhaitant qu'on travaille ensemble sur un projet ou un particulier,
                                une structure, un startup interressé par les différentes services que je propose, entrez en contact avec moi à l'aide des informations ci-dessous.
                                Mon inbox est toujours ouvert et considérez-moi pour de futurs emplois et opportunités.
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
                                            Alger , Algérie
                                        </div>
                                    </div>

                                    <div className="info">
                                        <div className="icn icn-envelope">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div className="info-content">
                                            <a href="mailto:jojomodeste52@gmail.com">
                                                djedeminmodeste@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="info">
                                        <div className="icn icn-tel">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div className="info-content">
                                            +213 795487933
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 form-section order-md-1 order-0">
                            <h5>Formulaire de contact</h5>

                            {
                                success === true && <div className="alert alert-success mb-5">
                                    Votre message de contact est envoyé avec succès
                                </div>
                            }

                            {
                                success === false && <div className="alert alert-danger mb-5">
                                    Une erreure s'est produite, veuillez réessayer ultérieurement
                                </div>
                            }

                            <form className="contact-form" name='contact' id='contact' onSubmit={onSubmit} >
                                <div className="field mb-4 field-name">
                                    <input value={objet.name} onChange={changeField} name='name' type="texte" className={"form-control " + (error.name ? ' border border-danger ' : '')} id="nom" aria-describedby="Nom" placeholder='Nom' />
                                    {
                                        error.name && <small className='text-danger'>{error.name}</small>
                                    }
                                </div>

                                <div className="field mb-4 field-mail">
                                    <input value={objet.mail} onChange={changeField} name='mail' type="email" className={"form-control " + (error.mail ? ' border border-danger ' : '')} id="mail" aria-describedby="mail" placeholder='Email' />
                                    {
                                        error.mail && <small className='text-danger'>{error.mail}</small>
                                    }
                                </div>

                                <div className="field mb-4 field-object">
                                    <select value={objet.sujet} onChange={changeField} name='sujet' className={'form-select ' + (error.sujet ? ' border border-danger ' : '')} placeholder='Sujet'>
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
                                    <textarea value={objet.message} onChange={changeField} name='message' className={"form-control " + (error.message ? ' border border-danger ' : '')} id="message" rows="6" placeholder='Votre message'></textarea>
                                    {
                                        error.message && <small className='text-danger'>{error.message}</small>
                                    }
                                </div>

                                <div className="field mb-4 field-recaptcha">
                                    <div className="case">
                                        <span className="number">{number1}</span>
                                        <span className="add">+</span>
                                        <span className="number">{number2}</span>
                                        <span className="equal">=</span>
                                        <input type="number" name="recpatcha" id="recpatcha" value={enteredNumber} onChange={change} />
                                    </div>
                                    {
                                        error.recpatcha && <small className=" text-danger">{error.recpatcha}</small>
                                    }
                                </div>

                                <button disabled={loading} className="btn btn-btn mt-3 mb-5 px-5 py-3" type='submit' onClick={onSubmit}>
                                    {loading ? "Chargement ..." : "Envoyer" }
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>

    )
}

export default Contact