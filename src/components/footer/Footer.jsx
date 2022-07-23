import React from 'react'
import './footer.css'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Bhavin</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/bhavin-patil-a4b856172/" target='_blank'><BsLinkedin/></a>
        <a href="https://www.instagram.com/thebhavin2831/" target='_blank'><BsInstagram/></a>
        <a href="https://www.twitter.com/bhavinpatil10/" target='_blank'><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bhavin Patil. All rights reserved.</small>
      </div>
    </footer>)
}
export default Footer