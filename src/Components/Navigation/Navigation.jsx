import { useState, useRef } from 'react'
import navigation from './Navigation.module.css'
import { menuItems as items } from '../../Utilities/helpers'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const [display, setDisplay] = useState(false)

  const toggleMenu = () => {
    setDisplay(!display)
  }

  return (
    <div className={navigation.container}>
      <div className={navigation.interaction}>
        <span className={navigation.name}>Oscar O'Neill <span className={navigation['dev-title']}>| Front-End Engineer</span></span>
        <div onClick={toggleMenu} className={navigation.button}>Menu</div>
      </div>
      { display ? 
        <div className={navigation.menu}>
          {items.map((item, i) => {
            if (item.title === 'Resume') {
              return (
                <a key={i} className={navigation.list} onClick={toggleMenu} href={item.link} target='_blank'>{item.title}</a>
              )
            } else {
                return (
                  <Link key={i} className={navigation.list} onClick={toggleMenu} to={item.link}>{item.title}</Link>
                )
            }
          })}
        </div> : 
      ''
      }
    </div>
  )
}

export default Navigation