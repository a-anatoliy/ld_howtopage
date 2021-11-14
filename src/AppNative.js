import React from 'react';
import { Container, Row, Col, Nav } from 'bootstrap-4-react';

const sitename = 'Lucky DRESS EU';
const socials = [
    {name: 'Web Page', class: 'fa fa-globe', href: 'https://www.lucky-dress.eu/'},
    {name: 'on Etsy', class: 'fa fa-etsy pl-2', href: 'https://www.etsy.com/shop/AtelierLuckyDress'},
    {name: 'on Facebook', class: 'fa fa-facebook pl-2', href: 'https://www.facebook.com/luckydresskrakow/'},
    {name: 'on Instagram', class: 'fa fa-instagram pl-2', href: 'https://www.instagram.com/lucky_dress_atelier'},
    {name: 'on Pinterest', class: 'fa fa-pinterest-p pl-2', href: 'https://www.pinterest.com/ldressatelier/'}
];

function FillSocials(props) {
    const items = []
    for (const [item,value] of socials.entries()) {
        items.push(
            <a title={GetTitle(value.name)} target="_blank" rel="noopener noreferrer" href={value.href} alt={item}>
                <i className={value.class} aria-hidden="true"/>
            </a>
        )
    }

    return (
        <div className="col-md-2 d-none d-lg-block align-middle text-center text-sm-center align-self-center">
            {items}
        </div>
    )
}

function GetTitle(postfix) { return sitename + ' '+ postfix }

function App() {
    return (
        <div className="row menu-border myhdr">
            <div className="col-7 text-left">
                <nav className="navbar navbar-expand-lg navbar-light font-weight-bold navbar-expand-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <img src="/i/goldLeftLogo.png" className="pr-5" />&nbsp;
                            <div className="navbar-nav">
                                <a className="nav-item nav-link main-nav ml-2 mr-2 page-scroll" href="#sketch">Sketch</a>
                                <a className="nav-item nav-link main-nav page-scroll" href="#customOrder">Custom Order</a>
                                <a className="nav-item nav-link main-nav page-scroll" href="#Measurements">Measurements</a>
                                <a className="nav-item nav-link main-nav page-scroll" href="#Payments">Payments</a>
                                <a className="nav-item nav-link main-nav page-scroll" href="#Contact">Contact</a>
                            </div>
                    </div>
                </nav>
            </div>
            <FillSocials socials={socials} />
            <div className="col-md-3 col-5 align-middle text-center align-self-center"><div className="main-logo fancy">LUCKY DRESS</div></div>
        </div>
    );
}

export default App;



