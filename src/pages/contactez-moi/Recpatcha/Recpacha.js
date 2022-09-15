import React from 'react'
import { useState } from 'react'

const Recpacha = () => {

    const [number1, setNumber1] = useState(Math.round(Math.random() * 50))
    const [number2, setNumber2] = useState(Math.round(Math.random() * 50))

    const [enteredNumber, setEnteredNumber] = useState(0)

    //Change input number value

    const change = (e) => {
        setEnteredNumber(e.target.value)
    }

    console.log(number1, number2, parseInt(enteredNumber, 10))



    return (
        <div className="field mb-4 field-recaptcha">
            <div className="case">
                <span className="number">{number1}</span>
                <span className="add">+</span>
                <span className="number">{number2}</span>
                <span className="equal">=</span>
                <input type="number" name="recpatcha" id="recpatcha" value={enteredNumber} onChange={change} />
            </div>
            {
                number1 + number2 !== parseInt(enteredNumber, 10) && <div className="mt-4 alert alert-danger">Erreur</div>
            }
        </div>
    )
}

export default Recpacha