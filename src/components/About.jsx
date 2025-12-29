import React from 'react';

const About = () => {
    return (
        <>
             <section id="about" className="s-about target-section">

                <div class="row s-about__content width-sixteen-col">
                    <div class="column grid-block grid-section-split">

                        <img src="images/geometric_shape.svg" alt="" class="s-about__content-imgbg" />

                        <div class="section-header grid-section-split__header">
                            <div class="text-pretitle">About</div>                           
                            <h2 class="text-display-title">
                            An inspiring headline about yourself.
                            </h2>                           
                        </div>

                        <div class="s-about__content-main grid-section-split__primary">
                            <p class="attention-getter">
                           We are a skilled web developer and designer. We design custom and responsive websites using HTML, CSS, Bootstrap, JavaScript and React. My goal is to create user-friendly interfaces that look and feel great on all devices—mobile, tab and desktop.
                            </p>

                            <p class="attention-getter">
                            Our main goal- we use modern web technology to create simple, beautiful and effective interface for users.
                            </p>
                        </div> 

                        <div class="s-about__content-btn grid-section-split__bottom">
                            <a href="#" class="btn btn--stroke u-fullwidth">More About Me</a>

                            <ul class="s-about__social social-list">
                                <li>
                                    <a href="#0">
                                      
                                        <span class="u-screen-reader-text">Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        
                                        <span class="u-screen-reader-text">Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                      
                                        <span class="u-screen-reader-text">Instagram</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                     
                                        <span class="u-screen-reader-text">Dribbble</span>
                                    </a>
                                </li>
                            </ul>
                        </div> 
                    
                    </div> 
                </div>
                
            </section>  
        </>
    );
};

export default About;