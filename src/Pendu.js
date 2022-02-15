import React from 'react';
import {Button} from 'react-bootstrap'
import tableau_mot from './tableau_mots';
var mot_random = tableau_mot[Math.floor(Math.random() * tableau_mot.length)]
var nbr_mot = tableau_mot.length
const Pendu = () => {
    function random(e){
        e.preventDefault()
        console.log(mot_random)
        return ( 
            <>
                <h1>MARCHETAMERE</h1>
                {mot_random}    
            </>         
        )  
    }
    
    return (
        <div>
            <Button variant="success" onClick={random}>Jouer</Button>{' '}
            <br/>
            <p>Le mot à trouver est  {mot_random}</p>
            <p>Il y a {nbr_mot} mots dans le tableau de mots</p>
            <br/>
        </div>
    )
    
};


export default Pendu;