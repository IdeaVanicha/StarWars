import React, { useState } from 'react';
import StarWars from '../images/star_wars.png';
import Episodes  from './Episodes';
import * as ReactBootStrap from 'react-bootstrap';

const Main = (props) => {

    const getData = async () => {
      const response = await fetch("https://swapi.dev/api/films/") //Fetching fillm data from api
      const r = await response.json();
      setEpisodes(r.results);
    }

    function filterFilms() {

        let filteredEpisode = new Array();

        for (const [film, value] of Object.entries(episodes)){

            // Filter films: Keep only those directed by George Lucas
            if (value.director.toLowerCase() == "george lucas"){
                filteredEpisode.push(value)
            }
        }
        // Sort by episode_id
        filteredEpisode = filteredEpisode.sort(function(a, b){
            return a.episode_id - b.episode_id;
        })
        return filteredEpisode;
    } 

    const [episodes, setEpisodes] = useState([]);
    getData();
    let targetEpisodes = filterFilms();


    if (episodes.length != 0){
        return (
            <div class="main" style={{height:"fit-content"}}>
                <link rel="stylesheet" href="Main.css"/>
                <div class="mainContainer">
                <div id="swTitleDiv">
                    <img id="swTitle" src={StarWars}></img>
                </div>
                    <div class="epContainer">
                        {targetEpisodes.map( (movies) => (
                            <Episodes ep={movies}></Episodes>
                        ))}
                    </div>
                </div>
            </div>
        )
    } 
    else {
        return (
            <div class="main">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossorigin="anonymous"
                />
                <ReactBootStrap.Spinner animation="border"  color="white" id="spinner"/>

            </div>
        )
    }


    
}


export default Main;
