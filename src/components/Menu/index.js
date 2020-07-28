import React from 'react';
import Logo from '../../assests/img/Logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Kinflix logo" />
            </a>

            <Button as="a" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;