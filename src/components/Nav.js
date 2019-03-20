import React, { Component } from 'react';
import cercle from '../img/cercle.png'

class Nav extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div>
                        <img src={cercle} alt='logo' />
                    </div>
                    <ul>
                        <li>Accueil</li>
                        <li>Equipe</li>
                        <li>Calendrier</li>
                        <li>Contact</li>
                    </ul>


                </nav>
            </header>
        );
    }
}

export default Nav;
