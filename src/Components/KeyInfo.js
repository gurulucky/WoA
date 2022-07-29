import React from 'react';
import img from '../images/Women of america-26.png'
export default function SectionSeven() {
    return (
        <div className='containerkey'> 
      <div className="container ">
        {/* <center id="keyInfo"> */}
            <br/><br/>
            <h1 className="text-left d-flex keyinfo-heading justify-content-center text-white">KEY INFORMATION</h1>
            <div className='keyContainer row'>
                <div className='col-md-6 img-keyinfo d-flex align-items-center'>
                    <img src={img} className="w-100" alt="" srcset="" />
                </div>
                 <div className="col-md-6 container-keyinfo minus-margin-p">
                    <div className="table-parent mb-3"> 
                    {/* tab1 */}
                        <table className="text-white keyinfo-table table-keyInfo-border-none w-100">
                            <thead className='keyinfo-thead'>
                                <tr>
                                    <th>Release Date</th>
                                    <th>TBA</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>TBA</td>
                                    <td>Release Date</td>
                                </tr> */}
                                <tr>
                                    <td>Total number of NFTs</td>
                                    <td>10,000</td>
                                </tr>
                                <tr>
                                    <td>NFTs withheld for sale</td>
                                    <td>500 for giveaways, marketing and the team</td>
                                </tr>
                                <tr>
                                    <td>Price per NFT</td>
                                    <td>0.05 ETH</td>
                                </tr>
                                <tr>
                                    <td>NFT token type</td>
                                    <td>ERC-721</td>
                                </tr>
                                <tr>
                                    <td>Blockchain </td>
                                    <td>Ethereum</td>
                                </tr>
                                <tr>
                                    <td>Unlockable content</td>
                                    <td>Yes, high-resolution image</td>
                                </tr>
                                <tr>
                                    <td>File hosting </td>
                                    <td>IPFS</td>
                                </tr>
                                <tr>
                                    <td>Royalties</td>
                                    <td>10% to fund Rikishi Club ongoing and new projects</td>
                                </tr>
                                <tr>
                                    <td>Number of traits</td>
                                    <td>25</td>
                                </tr>
                                <tr>
                                    <td>Number of attributes</td>
                                    <td>223</td>
                                </tr>
                                <tr>
                                    <td>Minimum number of traits</td>
                                    <td>?</td>
                                </tr>
                                <tr>
                                    <td>Reveal type</td>
                                    <td>Instant</td>
                                </tr>
                                <tr>
                                    <td>Smart contract</td>
                                    <td>URL?</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        {/* </center> */}
    </div>
    </div>
    )
}
