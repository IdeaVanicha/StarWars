import React, { useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../styling/Character.css';
import StarWars from '../images/star_wars.png';


const Characters = (props) => {

    const getCharacter = async () => {

        let arr = [];

        for (let i = 0; i < characters.length; i++){

            const character = await fetch(characters[i])
            const r = await character.json();
            arr.push(r.name)
        }
        setNames(arr);
        setLoading(false);
    }

    const [names, setNames ] = useState([])
    const [loading, setLoading] = useState(true);
    const characters = props.location.state.characters;
    const filmTitle = props.location.pathname.split("/"); //Retrieving film title to display from url
    getCharacter(); //Fetch data for character specific to the episode requested

    //Fetch data Completed
    if (!loading){

        return (
            <div class="cPage">
                <div id="swTitleDiv">
                    <img id="swTitle" src={StarWars}></img>
                </div>
                    <div class="nameTitle">List of Characters of {filmTitle[filmTitle.length - 1]} </div>
                    <div class="nameDisplay">
                    {names.map((n) => (
                        <div> {n} </div>
                    ))}
                </div>

                <div id="backHome">
                    <Button component={Link} to={`/HomePage`} id="backBut">Back to Home</Button>
                </div>

            </div>
        )
    } else {
        // Display loading spinner while promise (data) is still in pending mode
        return (
            <div class="cPage" id="loading">
                <link rel="stylesheet" href="Character.css"/>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossorigin="anonymous"
                />
                <ReactBootStrap.Spinner animation="border"  color="white" id="spinner"/>

            </div>
        )
    }
}

export default Characters;