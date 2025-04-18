import React from 'react'
import about from './About.module.css'
import { icons } from '../../Utilities/images'
import { skills, contacts } from '../../Utilities/helpers'

const About = () => {
  return (
    <div className={about.container}>
      <h2>Bio</h2>
      <div className={about.description}>
        <img className={about.oscar} src={icons.oscar} alt='oscar'/>
        <p className={about.text}>
          I'm a self-taught frontend engineer, passionate about designing beautiful and responsive interfaces, and have experience working with a range of technologies to bring my ideas to life.
        </p>
      </div>

      <h2>Education</h2>
      <div className={about.education}>
        <div className={about.school}>
          <img className={about.icon} src={icons.asu} alt='Arizona State University'/>
          <span>Arizona State University</span>
        </div>

        <span className={about.study}>Interdisciplinary Studies '24</span>
      </div>

      <h2>Skills</h2>
      <ul className={about.skills}>
        { skills.map((skill, i) => {
          return (
            <li key={i} className={about['skill-container']}><img className={about.icon} src={skill.icon} alt={`${skill.skill} logo`}/>{skill.skill}</li>
          )
        }) }
      </ul>

      <h2>Connect With Me</h2>
      <ul className={about.connect}>
        { contacts.map((contact, i) => {
          return (
            <li key={i}><a className={about.links} href={contact.url} target="_blank" rel="noreferrer noopener"><img className={about.icon} src={contact.icon} alt={`${contact.service} logo`}/>&nbsp;{contact.service}</a></li>
          )
        }) }
      </ul> 
    </div>
  )
}

export default About