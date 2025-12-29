import React from 'react';

const Intro = () => {
    return (
        <>
         <section id="intro" class="s-intro">

                <div class="row s-intro__content width-sixteen-col">

                    <div class="column lg-12 s-intro__content-inner grid-block">
                        
                        <div class="s-intro__content-text">
                            <div class="s-intro__content-pretitle text-pretitle">Hello, Our Team</div>
                            <h1 class="s-intro__content-title">
                            I create marketing <br />
                            strategies for your <br />
                            business that get <br />
                            results.</h1>
                        </div>

                        <div class="s-intro__content-media"> 
                            <div class="s-intro__content-media-inner">                               
                                <img src="images/team.jpg" alt="" />
                                <div class="lines">                               
                                    <span></span>                                  
                                </div>
                            </div>
                        </div>                    

                        <div class="s-intro__scroll-down">
                            <a href="#about" class="smoothscroll">
                                <div class="scroll-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#97b34a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<polyline points="7 13 12 18 17 13"></polyline><line x1="12" y1="18" x2="12" y2="6"></line></svg>
                                </div>
                                <span>Scroll for more</span>
                            </a>
                        </div>
                        
                    </div>

                </div>

            </section>

        </>
    );
};

export default Intro;