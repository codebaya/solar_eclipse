import { useWeb3Modal } from '@web3modal/wagmi/react'
import React, { useState, useEffect, useRef } from "react";
import {
  useDisconnect,
  useAccount,
  usePrepareContractWrite,
  usePrepareContractRead,
  useContractRead,
  useContractWrite,
} from "wagmi";

import NFT_ABI from "../abi/NFT_ABI.json";
import Token_ABI from "../abi/Token_ABI.json";

import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


export default function HomePage() {
  const { address } = useAccount();
  const { isConnected } = useAccount();
  const { open, close } = useWeb3Modal()
  

  // Contracts
  const [ContractNFT, setContractNFT] = useState({ address: '0x26A6779EA88D9e9D68CB3AB191a7dBBfeA59C226', abi: NFT_ABI });
  const [USDTTokenAddress, setUSDTTokenAddress] = useState({ address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', abi: Token_ABI });


 

  

  // Select NFT
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (imageNumber) => {
    setSelectedImage(imageNumber);
  };

  

  // Mint NFT  
  const { data, write } = useContractWrite({
    ...ContractNFT,
    functionName: "mintMember",
    args: [selectedImage],
  });

  // Read supplys
  const [currentEarthSupply, setCurrentEarthSupply] = React.useState(0n);

  const { data: dataEarthSupply } = useContractRead({
    ...ContractNFT,
    functionName: 'currentEarthSupply',
    watch: true,
  });

  React.useEffect(() => {
    if (dataEarthSupply) {
      setCurrentEarthSupply(dataEarthSupply);
    }
  }, [dataEarthSupply]);

  const cEarthSupply = currentEarthSupply.toString();


  const [currentMarsSupply, setCurrentMarsSupply] = React.useState(0n);

  const { data: dataMarsSupply } = useContractRead({
    ...ContractNFT,
    functionName: 'currentMarsSupply',
    watch: true,
  });

  React.useEffect(() => {
    if (dataMarsSupply) {
      setCurrentMarsSupply(dataMarsSupply);
    }
  }, [dataMarsSupply]);

  const cMarsSupply = currentMarsSupply.toString();


  const [currentJupiterSupply, setCurrentJupiterSupply] = React.useState(0n);

  const { data: dataJupiterSupply } = useContractRead({
    ...ContractNFT,
    functionName: 'currentJupiterSupply',
    watch: true,
  });

  React.useEffect(() => {
    if (dataJupiterSupply) {
      setCurrentJupiterSupply(dataJupiterSupply);
    }
  }, [dataJupiterSupply]);

  const cJupiterSupply = currentJupiterSupply.toString();

  const [currentSaturnSupply, setCurrentSaturnSupply] = React.useState(0n);

  const { data: dataSaturnSupply } = useContractRead({
    ...ContractNFT,
    functionName: 'currentSaturnSupply',
    watch: true,
  });

  React.useEffect(() => {
    if (dataSaturnSupply) {
      setCurrentSaturnSupply(dataSaturnSupply);
    }
  }, [dataSaturnSupply]);

  const cSaturnSupply = currentSaturnSupply.toString();

  const [currentUranusSupply, setCurrentUranusSupply] = React.useState(0n);

  const { data: dataUranusSupply } = useContractRead({
    ...ContractNFT,
    functionName: 'currentUranusSupply',
    watch: true,
  });

  React.useEffect(() => {
    if (dataUranusSupply) {
      setCurrentUranusSupply(dataUranusSupply);
    }
  }, [dataUranusSupply]);

  const cUranusSupply = currentUranusSupply.toString();

  // NFTs Info

  const imageIcons = {
    0: 'Earth.mp4',
    1: 'Mars.mp4',
    2: 'Jupiter.mp4',
    3: 'saturn.mp4',
    4: 'Uranus.mp4',
  };

  const NFT_Description = {
    0: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dictum ipsum, at suscipit libero. Suspendisse quis magna posuere, pulvinar sem in, commodo massa. Nulla consectetur aliquam suscipit. Praesent lectus quam.',
    1: 'Praesent lectus quam, luctus eu scelerisque id, ullamcorper non mi. Nunc sapien lacus, placerat ac neque ac, convallis dignissim tellus. Aenean quis sodales erat. Aenean quis sodales erat. Aenean quis sodales erat.',
    2: 'Duis interdum maximus vehicula. Nunc vehicula elementum magna, eu feugiat tellus convallis id. Donec sed vulputate lectus. Maecenas venenatis interdum orci non pellentesque. Aenean quis sodales erat.',
    3: 'Donec at nunc vel justo rhoncus rhoncus. Integer non felis nec nibh dictum iaculis non non massa. Aliquam iaculis massa et lectus tristique varius. Aenean quis sodales erat. Aenean quis sodales erat.',
    4: 'Quisque auctor ligula hendrerit pellentesque auctor. Aenean sagittis massa enim, at rhoncus quam lacinia vel. Donec porta interdum fermentum. Mauris convallis finibus iaculis. Aenean quis sodales erat.',
  };

  const NFT_Name = {
    0: 'Earth',
    1: 'Mars',
    2: 'Jupiter',
    3: 'Saturn',
    4: 'Uranus',
  };

  const NFT_Price = {
    0: '10000 $USDT',
    1: '50000 $USDT',
    2: '100000 $USDT',
    3: '500000 $USDT',
    4: '1000000 $USDT',
  };

  const Approve_Price = {
    0: '10000000000',
    1: '50000000000',
    2: '100000000000',
    3: '500000000000',
    4: '1000000000000',
  };

  const NFT_Supply = {
    0: cEarthSupply + '/3600',
    1: cMarsSupply + '/640',
    2: cJupiterSupply + '/180',
    3: cSaturnSupply + '/24',
    4: cUranusSupply + '/5',
  };

   // NFT Aprove USDT
   const { config: ApproveUSDT } = usePrepareContractWrite({
    ...USDTTokenAddress,
    functionName: "approve",
    args: ["0x26A6779EA88D9e9D68CB3AB191a7dBBfeA59C226", Approve_Price[selectedImage]],
  });

  const { write: Approve, isLoading, isSuccess } = useContractWrite(ApproveUSDT);

  return (
    <>

      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>

      <div className='Background'>
        <img className='Bg1' src="Ellipse1.png" alt="" />
        <img className='Bg2' src="Ellipse2.png" alt="" />
      </div>

      <Navbar className='Navbar' expand="lg" bg="transparent" variant="dark">
        <Container>
          <Navbar.Brand className='Brand' href="#home">
            <img src="Logo.png" alt="" />
            <h2>SENS</h2>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#Mint">Mint</Nav.Link>
              <Nav.Link href="#Team">Team</Nav.Link>
              <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
              <Nav.Link href="#FAQ">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <div >
              {!isConnected ? (<>
                <button className='WalletConnect' onClick={() => open()}>Connect Wallet</button>
              </>) : (
                <>
                  <button className='WalletConnect' onClick={() => open()}> {address.slice(0, 5)}...{address.slice(-5)}</button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className='HomeSection'>
        <h1> <span className='RainbowColor'>Solar Eclispe</span> NASA </h1>
        <p>This exclusive membership NFT transforms you into a pioneer of our community. With special events and exclusive access, you become a key member of a network playing a vital role in shaping the upcoming future.</p>

        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img src="EARTH.png" alt="" />
            </div>
            <div class="slide">
              <img src="MARS.png" alt="" />
            </div>
            <div class="slide">
              <img src="JUPITER.png" alt="" />
            </div>
            <div class="slide">
              <img src="SATURN.png" alt="" />
            </div>
            <div class="slide">
              <img src="URANUS.png" alt="" />
            </div>

            <div class="slide">
              <img src="EARTH.png" alt="" />
            </div>
            <div class="slide">
              <img src="MARS.png" alt="" />
            </div>
            <div class="slide">
              <img src="JUPITER.png" alt="" />
            </div>
            <div class="slide">
              <img src="SATURN.png" alt="" />
            </div>
            <div class="slide">
              <img src="URANUS.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='MintSection' id='Mint'>
        <div className='MintSection-Container'>
          <div className='Col-1'>
            <h3>Mint your NFTs</h3>
            <p className='Description'>{NFT_Description[selectedImage]}</p>
            <hr className='Separator' />
            <div className='InfoNFT'>
              <p>Selected NFT: <span className='BoldText' >{NFT_Name[selectedImage]}</span> </p>
              <p>Price: <span className='BoldText' >{NFT_Price[selectedImage]}</span></p>
              <p>Minted: <span className='BoldText' >{NFT_Supply[selectedImage]}</span></p>
            </div>

            {isSuccess ? (
              <>
                <button disabled={!isConnected} onClick={() => write()} className="MintButton">Confirm Mint</button>
              </>
            ) : (
              <>
                <button onClick={() => Approve?.()} className="MintButton"> Mint Now </button>
              </>
            )}
          </div>
          <div className='Col-2'>

            <div className="SelectedVideo">
              <video
                src={imageIcons[selectedImage]}
                className="Selected-Video"
                autoPlay
                muted
                loop
              />
            </div>

            <div className="NFTs">
              <div>
                <video
                  src="Earth.mp4"
                  alt=""
                  onClick={() => handleImageClick(0)}
                  className={selectedImage === 0 ? 'selected' : ''}

                />
              </div>
              <div>
                <video
                  src="Mars.mp4"
                  alt=""
                  onClick={() => handleImageClick(1)}
                  className={selectedImage === 1 ? 'selected' : ''}

                />
              </div>
              <div>
                <video
                  src="Jupiter.mp4"
                  alt=""
                  onClick={() => handleImageClick(2)}
                  className={selectedImage === 2 ? 'selected' : ''}

                />
              </div>
              <div>
                <video
                  src="saturn.mp4"
                  alt=""
                  onClick={() => handleImageClick(3)}
                  className={selectedImage === 3 ? 'selected' : ''}

                />
              </div>
              <div>
                <video
                  src="Uranus.mp4"
                  alt=""
                  onClick={() => handleImageClick(4)}
                  className={selectedImage === 4 ? 'selected' : ''}

                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='TeamSection' id='Team'>
        <h3>Team</h3>
        <div className='TeamImages-Container'>
          <img src="Member1.png" alt="" />
          <img src="Member2.png" alt="" />
          <img src="Member3.png" alt="" />
          <img src="Member4.png" alt="" />
        </div>
      </section>

      <section className="roadmap" id='Roadmap'>
        <h3 className='roadmapTitle'>Roadmap</h3>
        <div className="section-timeline-4">
          <div className="containercool-2">
            <div className="timeline_wrappercool-2">
              <div className="timeline_progresscool">
                <div className="timeline_progress-barcool"></div>
              </div>
              <div data-w-id="046baf0c-9b4c-ea28-05a2-50fd0f70aa61" className="timeline_item-2">
                <div id="w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa62-718776cd" className="timeline_left" >
                  <div className="timeline_date-text">Q4 2023</div>
                </div>
                <div id="w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa65-718776cd" className="timeline_centre">
                  <div className="timeline_circle"></div>
                </div>
                <div id="w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa67-718776cd" className="timeline_right" >
                  <div className="margin-bottom-xlarge">
                    <div className="timeline_text-2">
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dictum ipsum, at suscipit libero.
                      Suspendisse quis magna posuere, pulvinar sem in, commodo massa. Nulla consectetur aliquam suscipi
                    </div>
                  </div>
                </div>
              </div>
              <div data-w-id="046baf0c-9b4c-ea28-05a2-50fd0f70aa61" className="timeline_item-2">
                <div id="w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa62-718776cd" className="timeline_left" >
                  <div className="timeline_date-text">Q1 2024</div>
                </div>
                <div id="w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa65-718776cd" className="timeline_centre">
                  <div className="timeline_circle"></div>
                </div>
                <div id="w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa67-718776cd" className="timeline_right" >
                  <div className="margin-bottom-xlarge">
                    <div className="timeline_text-2">
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dictum ipsum, at suscipit libero.
                      Suspendisse quis magna posuere, pulvinar sem in, commodo massa. Nulla consectetur aliquam suscipi
                    </div>
                  </div>
                </div>
              </div>
              <div data-w-id="046baf0c-9b4c-ea28-05a2-50fd0f70aa61" className="timeline_item-2">
                <div id="w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa62-718776cd" className="timeline_left" >
                  <div className="timeline_date-text">Q2 2024</div>
                </div>
                <div id="w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa65-718776cd" className="timeline_centre">
                  <div className="timeline_circle"></div>
                </div>
                <div id="w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa67-718776cd" className="timeline_right" >
                  <div className="margin-bottom-xlarge">
                    <div className="timeline_text-2">
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dictum ipsum, at suscipit libero.
                      Suspendisse quis magna posuere, pulvinar sem in, commodo massa. Nulla consectetur aliquam suscipit.
                    </div>
                  </div>
                </div>
              </div>
              <div data-w-id="046baf0c-9b4c-ea28-05a2-50fd0f70aa61" className="timeline_item-2">
                <div id="w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa62-718776cd" className="timeline_left" >
                  <div className="timeline_date-text">Q3 2024</div>
                </div>
                <div id="w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa65-718776cd" className="timeline_centre">
                  <div className="timeline_circle"></div>
                </div>
                <div id="w-node-_046baf0c-9b4c-ea28-05a2-50fd0f70aa67-718776cd" className="timeline_right" >
                  <div className="margin-bottom-xlarge">
                    <div className="timeline_text-2">
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dictum ipsum, at suscipit libero.
                      Suspendisse quis magna posuere, pulvinar sem in, commodo massa. Nulla consectetur aliquam suscipi
                    </div>
                  </div>
                </div>
              </div>

              <div className="overlay-fade-bottom-2"></div>
              <div className="overlay-fade-top-2"></div>
            </div>
          </div>
        </div>
      </section>


      <section className='FAQSection' id='FAQ'>
        <h3>Frequently Answer Questions</h3>
        <div className='FAQ-Container'>
          <div className='FAQ-Col-1'>
            <Accordion >
              <Accordion.Item className='FAQ-Item' eventKey="0">
                <Accordion.Header className='FAQ-Item-Header'>FAQ Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion   >
              <Accordion.Item className='FAQ-Item' eventKey="0">
                <Accordion.Header className='FAQ-Item-Header'>FAQ Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion  >
              <Accordion.Item className='FAQ-Item' eventKey="0">
                <Accordion.Header className='FAQ-Item-Header'>FAQ Item #3</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className='FAQ-Col-1 FAQ-Col-2'>
            <Accordion >
              <Accordion.Item className='FAQ-Item' eventKey="0">
                <Accordion.Header className='FAQ-Item-Header'>FAQ Item #4</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion  >
              <Accordion.Item className='FAQ-Item' eventKey="0">
                <Accordion.Header className='FAQ-Item-Header'>FAQ Item #5</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion   >
              <Accordion.Item className='FAQ-Item' eventKey="0">
                <Accordion.Header className='FAQ-Item-Header'>FAQ Item #6</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

      </section>

      <section className='FooterSection'>
        <div className='Footer-Container'>
          <div>
            <a href="">Twitter</a>
            <a href="">Discord</a>
            <a href="">Telegram</a>
            <a href="">Medium</a>
          </div>
          <div>
            <span>Solar Eclipse Nasa © 2023 All Rights Reserved</span>
          </div>
        </div>

      </section>
















    </>
  );

}
