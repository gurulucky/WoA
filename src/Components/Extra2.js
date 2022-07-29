/* eslint-disable */
import React, { useEffect, useState } from 'react';
import cartoon from '../images/uti.png'
import secondpimg from '../images/secondpimg.png'

function Utility() {
    const [btntext, setBtntext] = useState('Show More');
    const [active, setActive] = useState(false);
    const showLessOrMoreBtn = () => {
        if (active == true) {
            setActive(false);
            setBtntext('Show More');
        } else {
            setActive(true);
            setBtntext('Show less');
        }
    }
    return <div className='container-uti'>
        <br/><br/>
        <h1 className='uti-head'> UtiLity </h1>
        <div className='row uti-first-sec'>
            <div className='col-md-12'>
                <div className='row uti-flex'>
                    <div className='col-md-6 uti-para'>
                        <div>A one-of-a-kind NFT Women of Africa artwork that you can use for personal use as you wish is just the beginning.  </div>
                        <br />
                        <div>The Women of Africa NFT also serves as a membership token to the Women of Africa community, which offers the following benefits of ownership:</div>
                    </div>
                    <img className='col-md-4 uti-img' src={cartoon} alt="" />
                </div>
            </div>
            <div className='row uti-points-first'>
                <div className='col-md-12 uti-para-flex'>
                    <p className='col'>1. Being part of a like-minded VIP community, the Women of Africa community</p>
                    <p className='col'>2. Exclusive access to your high-resolution 4000 x 4000 pixel file</p>
                </div>
                <div className='col-md-12 uti-para-flex'>
                    <p className='col'>3. Regular, virtual meet-ups of diverse Women of Africa, offering opportunities for new friendships, networking, and community contribution to future WoA pursuits</p>
                    <p className='col'>4. VIP invitations to special events (IRL and virtual) including casual and formal gala events where you can mingle with successful Women of Africa including the WoA ambassadors </p>
                </div>
                <div className='col-md-12 uti-para-flex'>
                    <p>5. Opportunity to make suggestions for types of functions and the women that you would like to meet</p>
                    <p>6. Priority access to further NFT drops along with making suggestions and providing ideas for new Women of Africa focused NFT drops and other projects</p>
                </div>
                <div className='col-md-12 uti-para-flex'>
                    <p>7. Participate in the Women of Africa community selection of winners whose works will be made into NFT drops that will be sponsored by us </p>
                    <p>8. Exclisive access to WoA merchandise and an opportunity to request personalization of certain WoA merchandise</p>
                </div>
            </div>
        </div>
        <div className='uti-second-sec'>
            <div className='uti-second-sec-head'>
                <h1>Half Yearly Women of Africa Development Program</h1>
            </div>
            <div className='uti-points-second'>
                <p>1. NFT holders (or women encouraged by WoA NFT holders) will be eligible to post a 30 second (approximate) WoA skit on Tik-Tok or Discord. WoA community will vote on selecting a winner whose skit will be turned into an NFT and then sold.  The creator will receive a percentage of the net revenue.</p>

                <p>2. NFT holders (or women encouraged by WoA NFT holders) will be eligible to post a photo portraying a Woman of Africa on Instagram or Discord.  The community will vote on selecting a winner whose photo will be turned into either a single NFT or NFT collection (based on the potential of content).  The creator will receive a percentage of the net revenue.</p>

                <p>3. NFT holders (or women encouraged by WoA NFT holders) will be eligible to post their original artwork (digital and/or physical) depicting Women of Africa on Instagram or Discord.  The community will vote on selecting a winner whose artwork will be turned into either a single NFT or NFT collection (based on the potential of content).  The creator will receive a percentage of the net revenue.</p>

                {/* <p>4. VIP invitations to special events (IRL and virtual) including casual and formal gala events where you can mingle with successful Women of Africa including the WoA ambassadors </p>
                <p>5. Opportunity to make suggestions for types of functions and the women that you would like to meet</p>
                <p>6. Priority access to further NFT drops along with making suggestions and providing ideas for new Women of Africa focused NFT drops and other projects</p>
                <p>7. Participate in the Women of Africa community selection of winners whose works will be made into NFT drops that will be sponsored by us </p>
                <p>8. Exclisive access to WoA merchandise and an opportunity to request personalization of certain WoA merchandise</p>
                <p>9. Being a proud contributor to the support of the Women of Africa</p> */}
            </div>
            <div className='uti-last-two-para container'>
                <p>The competitions referred to above will run each 6 months for a 5-year period, or based on demand / interest.
                </p>
                <p> Winners will be selected by the WoA community (WoA NFT holders) based on content posted in the most recent 6-month period.</p>
            </div>
        </div>

    </div>
}

export default Utility;
