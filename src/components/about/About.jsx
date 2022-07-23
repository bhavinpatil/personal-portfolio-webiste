import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="https://source.unsplash.com/1600x900/?programming,coding" alt="About Image" />
          </div>
        </div>
        <div className="about__content">
        <p>Self-Started and passionate 3rd year Computer Engineering student with experience 
            in programming outside the university courses and ability to learn other coding 
            languages as need. Objective to apply my academics knowledge and experience from 
            personal projects in solving real world problems.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About