/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Container, Card, Button, Row, Col, Spinner } from 'react-bootstrap'
import {
    Link
} from "react-router-dom";
import { BsFillLockFill } from 'react-icons/bs'
import '../App.css';
import Navbar from './PrivacyNavbar';
import { getNFTsWithHighResImage } from '../actions/manager';
import { getTokenIdsOf } from '../lib/mint'

const NFT_ADDRESS = process.env.REACT_APP_NFT_ADDRESS

const NftItem = ({ nft }) => {
    return (
        <Card >
            {/* <a href={nft.metadataUri} target='_blank'> */}
            <Card.Img variant="top" src={nft.image} />
            {/* </a> */}
            <Card.Body>
                <Card.Title style={{ display: 'flex', color: 'black', justifyContent: 'space-between', alignItems: 'center', fontSize: '16px' }}>
                    <div>
                        <span style={{ fontSize: '12px', color: 'black' }}>Token Name: </span> {nft.name}
                    </div>
                    <a href={nft.metadataUri} target='_blank' style={{ textDecoration: 'none', fontSize: '12px' }}>
                        Metadata
                    </a>
                </Card.Title>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '12px', color: 'black' }}>{`Rarity Score:${nft.rarityScore}`}</span>
                    <span style={{ fontSize: '12px', color: 'black' }}>{`Token ID:${nft.tokenId}`}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a href={nft.highUri} download target='_blank' style={{ textDecoration: 'none', width: '70%' }}>
                        <Button variant="primary" className='buy_btn'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <BsFillLockFill />Unlockable content

                            </div>
                        </Button>
                    </a>
                    <a href={`https://opensea.io/assets/${NFT_ADDRESS}/${nft.tokenId}`} target='_blank'>
                        <img src='/opensea.png' width='30px' height='30px' />
                    </a>

                </div>
            </Card.Body>
        </Card>
    )
}

export default function Collection() {
    const wallet = useSelector(state => state.manager.wallet)
    const [nfts, setNfts] = useState([])
    const [loadingAssets, setLoadingAssets] = useState(false)

    const getNftsOf = async (wallet) => {
        setLoadingAssets(true)
        console.log(wallet)
        let nftIds = await getTokenIdsOf(wallet)
        console.log('nftIds', nftIds)
        setNfts(await getNFTsWithHighResImage(nftIds))
        setLoadingAssets(false)
    }

    useEffect(() => {
        if (wallet) {
            getNftsOf(wallet)
        } else if (window.localStorage.getItem('wallet')) {
            getNftsOf(window.localStorage.getItem('wallet'))
        }
    }, [])

    return (
        <>
            <div className="privacy">
                <div className="header4">
                    <Navbar />
                    <div id="privacy" className="container col-xxl-10 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-lg-12">
                                <center><h1 className="bs-text-size fw-bold lh-1 mb-3 text-white"> <i>My Collections</i></h1></center>
                                <Container style={{minHeight: window.innerHeight + 'px'}}>
                                    {
                                        loadingAssets ?
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Spinner animation="border" role="status" style={{color:'white'}}>
                                                </Spinner>
                                                <h4 className="text-white">Loading collections</h4>
                                            </div>
                                            : nfts?.length === 0 &&
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <h4 className="text-white">There is no collection.</h4>
                                            </div>
                                    }
                                    <Row className='g-4 mx-auto'>
                                        {
                                            nfts?.map((nft, index) =>
                                                <Col key={index} sm={6} md={4}>
                                                    <NftItem nft={nft} />
                                                </Col>
                                            )
                                        }
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}