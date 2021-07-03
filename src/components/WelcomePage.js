import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../styling/WelcomePage.css';
import StarWars from '../images/star_wars.png';


const WelcomePage = () => {

    return (
        <div class="WelcomeMsg">
            <div class="welMsg">
            <div id="swTitleDiv">
                <img id="swTitle" src={StarWars}></img>
            </div>
                <p id="welText">
                    An American epic space opera media franchise created by George Lucas. The film was first released 
                    in 1977 and quickly become a worldwide pop-culture phenomenon.
                </p>
                <Button component={Link} to={`/HomePage`} id="welButton">Films Directed By George Lucas</Button>
            </div>
        </div>
    )

}

export default WelcomePage;
