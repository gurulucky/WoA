/* eslint-disable */
import React, { useState } from 'react';
import cartoon from '../images/Women of america-02.png'//Women of america-01
// import secondpimg from '../images/secondpimg.png'

function Container1() {
    // const [btntext, setBtntext] = useState('Show More');
    const [active, setActive] = useState(false);
    // const showLessOrMoreBtn = () => {
    //     if (active == true) {
    //         setActive(false);
    //         setBtntext('Show More');
    //     } else {
    //         setActive(true);
    //         setBtntext('Show less');
    //     }
    // }
    return <div className='container1 '>
        <div className='bs-con-flex'>
            <div className='bs-con-flex'>
                <div className="row bs-row-hgt">
                    <h1>ABOUT WOMEN OF AFRICA</h1>
                    <div className="col-md-8 about">

                        <p>
                            Women of Africa is an innovative project striving for gender equality and recognition of our mothers, daughters and sisters in Africa. We are here to bring a voice to these injustices, and create a safe space to celebrate women empowerment, healing and justice. Many women in Africa have stories to share, whether it be cultural, in the workforce, or at home. Through NFTs, our mission is to give a voice to women, and celebrate women of Africa.
                            <br /> <br />
                            NFTs have revolutionised the world as they offer limitless opportunities in the digital ecosystem. Unfortunately so far, NFTs have become a male-dominated subculture with little to no representation of women. A recent study reveals that male creators represent 77 percent of NFT art sales while only 5 percent are owned by women. The representation of African women is even scarcer.
                            <br /> <br />
                            Throughout African history, there have been countless amounts of injustices and crimes against women that have taken place with zero repercussions. The disadvantages of women due to culture were very prominent, and have now been carried into this day and age.
                            With South Africa now being the number one ‘Rape Capital of the World’ it is imperative that action must be taken. South Africa alone has 9,556 rapes reported every three months. This is yet to discuss the rest of Africa who experience a similar culture or the many more sexual harassment cases that go unreported. Every young woman in Africa has at least one experience to share.
                            Also, African women suffer from poverty caused by lack of education, poor health care system and inequality. The latest calculation has forecasted a raise from 249 million to 283 million in sub-Saharan Africa between 2021 and 2030, where the majority of the world’s underprivileged live.

                        </p>
                    </div>
                    <div className="col-md-4">
                        <img className='container1-image' src={cartoon} />
                        <table className='table-bordered'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Charity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Salt Proects  </td>
                                    <td> <a href="www.Saltprojects.orh.za"> www.Saltprojects.orh.za </a> </td>
                                </tr>
                                <tr>
                                    <td> Ihata Shelter for Women and Children </td>
                                    <td> <a href="https://ihatashelter.org.za"> https://ihatashelter.org.za </a> </td>
                                </tr>
                                <tr>
                                    <td> The Save Foundation </td>
                                    <td> <a href="https://savefoundation.org.za"> https://savefoundation.org.za </a> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

        <div className='second-c1-para-nd-img'>
            <div className='second-c1-para'>
                <br></br>
                <p>Besides that, there is a gender inequity in Africa. Although women are responsible for 60 % of work done globally they earn just 10 % income and 1 % of property. Until today, many African women neither have access to credits nor financial control to make spending decisions on health and education. 70 % of them are excluded financially, which is proven by the financing gap of US$42 billion between the different genders.</p>
                {/* <br /><br /> */}
                <p>The cultural nature of Africa is highly patriarchal, meaning young girls have learnt they must always respect men, particularly older men. This hinders the justice system dramatically, as it is taboo to talk about what goes on behind closed doors. Women are culturally trapped into thinking it is normal to keep quiet about the violations they have had to experience out of ‘respect’.</p>
                <p>Women of Africa’s main focus is to create equality and change this paradigm of power. With the launch of our NFTs, we will be donating 15% of the proceeds to our partner charities. Each of them plan to make a big difference for women in Africa.</p>
            </div>
        </div>
        <div className='second-c1-points'>
            <h3>Our key areas include:</h3>
            <p>1. Gender-based violence and discrimination awareness</p>
            <p>2. Shelter for abused women and their children</p>
            <p>3. Education</p>
            <p>4. Education</p>
        </div>
        <div className='second-c1-para-nd-img'>
            <div className='second-c1-para'>
                <br></br>
                <p>The NTF space has unlimited prospects that can revolutionise the global marketplace efficiency. It has the potential to grow into a medium to effectively manage and control sensitive data and records for organisations and individuals alike across the globe. NFTs at the present are a source of inspiration and have spurred interest on a global scale. They are the perfect medium for raising awareness in a modernised way.</p>
                {/* <br /><br /> */}
                <p>Women of Africa have created a way to prompt people to raise their voices and show support for women injustices in Africa. By spreading awareness we are able to implement accountability where there has not been, and make changes to create a safe environment for our mothers, daughters and sisters in Africa. Now is the time to make a difference.</p>
            </div>
        </div>
    </div>
}

export default Container1;
