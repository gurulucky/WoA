/* eslint-disable */
import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
// import Item from "./item";
// import cloud3 from './images/cloud3.png';
import imgForSlider from '../images/WOA-PICS-07.jpg'
import imgForSlider1 from '../images/WOA-PICS-03.jpg'
import imgForSlider2 from '../images/WOA-PICS-05.jpg'
import imgForSlider3 from '../images/WOA-PICS-04.jpg'
import imgForSlider4 from '../images/WOA-PICS-06.jpg'
import imgForSlider5 from '../images/WOA-PICS-02.jpg'

const breakPoints = [

    { width: 1, itemsToShow: 1 },
    { width: 700, itemsToShow: 1 },
    { width: 850, itemsToShow: 1 },
    { width: 1150, itemsToShow: 1 }

]

function AmbassadorSlider() {

    return (
        <>
            <div>
                <Carousel breakPoints={breakPoints} className="slider">
                    <div className="row main-sec-slider-test-main">
                        <div className="row main-sec-slider-test">
                            <img className="col-md-4 sec-slider-img" src={imgForSlider4} alt="" />
                            <div className="col-md-8 sec-slider-text">
                                <div className="sec-slider-headings">
                                    <h2>Lala Tuku </h2>
                                    <p>- Lala Tuku (née Monamodi) is a South African actress, television presenter, director, producer, vocal coach and events entrepreneur best known for her role as socialite swinger Paris Zondi in the e.tv soapie Scandal!.</p>
                                </div>
                                <div className="sec-slider-para">
                                    She also had a role in the SABC1 soapie Generations, hosted the SABC2 magazine programme Life 24/7 and starred in the SABC1 mini-series Dream World, an adaptation of Shakespeare’s A Midsummer Night’s Dream, set in a contemporary South African setting.
                                    <br />

                                </div>
                            </div>
                        </div>
                        <div className="sec-slider-extra-para">
                            Lala attended the AFDA School of Film and Live Performance and in 2006 established the corporate entertainment consulting company Corporate Icons, that conceptualises and produces large scale events.
                            <br />
                            She was also a producer on the SABC1 celebrity gossip show The Real Goboza (2009) and the religious programme Top Gospel, in 2010. In addition, she was an assistant director on the youth soapie Backstage.
                            <br />
                            Lala is Head of New Business Development and Communications Director at Clive Morris Productions.
                        </div>
                    </div>
                    <div className="row main-sec-slider-test-main">
                        <div className="row main-sec-slider-test">
                            <img className="col-md-4 sec-slider-img" src={imgForSlider} alt="" />
                            <div className="col-md-8 sec-slider-text">
                                <div className="sec-slider-headings">
                                    <h2>Amanda Du Pont</h2>
                                    <p>– actress & founder of Lelive skin care</p>
                                </div>
                                <div className="sec-slider-para">
                                Is Swazi-born South African actress, model and television host. Du-Pont is known for her portrayal of Senna in the CW drama series Life is Wild and Sharon in the SABC 3 comedy-drama Taryn & Sharon. Currently, she stars as Ashley in the Netflix[3] thriller series Shadow. She is known for acting on the SABC 1 soap opera Skeem Saam as Nompumelelo 'Lelo' Mthiyane.
                                    <br />

                                </div>
                            </div>
                        </div>
                        <div className="sec-slider-extra-para">
                        
                        </div>
                    </div>
                    <div className="row main-sec-slider-test-main">
                        <div className="row main-sec-slider-test">
                            <img className="col-md-4 sec-slider-img" src={imgForSlider1} alt="" />
                            <div className="col-md-8 sec-slider-text">
                                <div className="sec-slider-headings">
                                    <h2>Asanda Sizane</h2>
                                    <p>– award-winning editor , creative director and producer</p>
                                </div>
                                <div className="sec-slider-para">
                                Is know as the woman who has  an impressive CV. Starting out as the youngest fashion editor of Drum, she went on to become the first black fashion editor at Elle, and in that time has won awards, judged awards and made a name for herself as one of the most important voices in South African fashion.
                                </div>
                            </div>
                        </div>
                        <div className="sec-slider-extra-para">
                        </div>
                    </div>
                    <div className="row main-sec-slider-test-main">
                        <div className="row main-sec-slider-test">
                            <img className="col-md-4 sec-slider-img" src={imgForSlider2} alt="" />
                            <div className="col-md-8 sec-slider-text">
                                <div className="sec-slider-headings">
                                    <h2>Bilala Mabuza</h2>
                                    <p>– managing director @ career firm, owner of Cocoon Lifestyle Interiors</p>
                                </div>
                                <div className="sec-slider-para">
                                “Living beautifully is an art”. 
                                    <br />
                                    Bilala is professionally a talent management coach and a career consultant as well as the owner of Cocoon Lifestyle Interiors based in Krammerville Sandton Johannesburg. She believes in empowering and supporting young designers to work on dream projects and build their careers and design practices.
                                </div>
                            </div>
                        </div>
                        <div className="sec-slider-extra-para">
                            
                        </div>
                    </div>
                    <div className="row main-sec-slider-test-main">
                        <div className="row main-sec-slider-test">
                            <img className="col-md-4 sec-slider-img" src={imgForSlider3} alt="" />
                            <div className="col-md-8 sec-slider-text">
                                <div className="sec-slider-headings">
                                    <h2>Sonia Mbele</h2>
                                    <p>- CEO of Sonia Productions, Director of Real Housewives of South Africa & Alkamax Supercharged Water</p>
                                </div>
                                <div className="sec-slider-para">
                                Is a South African actress best known for her starring role as Ntombi Khumalo on SABC1 soap Generations, from 2003-2011. She was born in Natalspruit and was formally introduced to acting when she joined a high school theatre group. A qualified PRO, Sonia was casted in a Beacon commercial, and was also a lead in the SABC 2 drama Phamokate.
                                </div>
                            </div>
                        </div>
                        <div className="sec-slider-extra-para">
                        She’s featured in Soul City, Muvhango and films such as Mr Bones and God is African. She’s also appeared in television commercials for Vodacom, Sunsilk and Shield. In 1998/1999 Sonia won the FNB Vita Award for most Promising New Actress.
                        </div>
                    </div>
                    <div className="row main-sec-slider-test-main">
                        <div className="row main-sec-slider-test">
                            <img className="col-md-4 sec-slider-img" src={imgForSlider5} alt="" />
                            <div className="col-md-8 sec-slider-text">
                                <div className="sec-slider-headings">
                                    <h2>HRH Princess Sihle Mdhluli</h2>
                                    <p>– Royal Mawewe Kraal</p>
                                </div>
                                <div className="sec-slider-para">
                                Princess Sihle Mdhluli alongside the Queen of Mawewe Royal Kraal are heavily involved in giving back to the community, promoting arts and culture as well as promoting African culture throughout South Africa and ESwatini.
                                    <br />
                                    Sihle is a young energetic representative of the Mawewe Royal Kraal which has appointed her into philanthropy work through out
                                </div>
                            </div>
                        </div>
                        <div className="sec-slider-extra-para">
                        eSwatini and South Africa. She has been promoting African culture, specifically, the long lost eSwatini culture throughout the peripheries of Mpumalanga.
                            <br />
                            Her involvement in giving back to community has opened doors to her having a seat at the Samtas Awards 2021, and as being a representative for Swati Royals outside the border.
                        </div>
                    </div>

                </Carousel>
            </div>
        </>
    );
}

export default AmbassadorSlider