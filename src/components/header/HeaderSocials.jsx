import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bhavin-patil-a4b856172/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/bhavinpatil" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/bhavinpatil10" target="_blank"><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials