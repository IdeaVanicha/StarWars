import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Main.css';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/6.jpg';

const Episodes = (props) => {

    let imgMap = {
        "1": one,
        "2": two,
        "3": three,
        "4": four,
        "5": five,
        "6": six
    }   
    
    return (
        <div class="epBox">
            <div id="epHead">
                <p id="epTitle">{props.ep.title} ({props.ep.episode_id})</p>
            </div>

            <div id="epSummary">
                <div id="poster-img"><img id="moviePoster" src={imgMap[props.ep.episode_id]} ></img></div>
                <div id="synopsis">{props.ep.opening_crawl}</div>
            </div>
            <div id="bottom-button">
            <Link to={ { 
                pathname: `/Characters/${props.ep.title}`, 
                state: props.ep
                }} id="view" >View Characters</Link>
            </div>
        </div>
    )
}

export default Episodes;