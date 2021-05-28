import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from '../../images/image.png';


export const Header = () => {
       return ( <>
        <Navbar bg="light">
          <Navbar.Brand href="https://ca.lxrco.com/">
            <img
              src={Image}
              width="60"
              height="40"
              className="d-inline-block align-top"
              alt="LXRCo logo"
            />
          </Navbar.Brand>
        </Navbar>
      </>
       )
}