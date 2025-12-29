import React from 'react';

const Header = () => {
    return (
        <>
            <header class="s-header">

                <div class="row s-header__inner width-sixteen-col">

                    <div class="s-header__block">
                        <div class="s-header__logo">
                            <a className="navbar-brand" href="#">Shahida&Monira</a>
                        </div>

                        <a class="s-header__menu-toggle" href="#0"><span>Menu</span></a>
                    </div>

                    <nav class="s-header__nav">

                        <ul class="s-header__menu-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>

                        <div class="s-header__contact">
                            <a href="contact.html" class="btn btn--primary s-header__contact-btn">Let's Work Together</a>
                        </div>

                    </nav>

                </div>

            </header> 
        </>
    );
};

export default Header;