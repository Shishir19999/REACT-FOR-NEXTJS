import React from 'react'
import {Link,NavLink} from 'react-router-dom'





function Header() {


    let menuItems=[
        {url:'Home',label:'Home'},
        {url:'anout',label:'About'},
        {url:'contact',label:'Contact'},
        {url:'users',label:'Users'},
    ]
  return (
    <div>
      <nav>
        <ul>{
            menuItems.map(item => {
                return(
                    <li key={item.url}>
                <NavLink to={item.url}>{item.label}</NavLink>
            </li>
                )
            })
        }
            </ul>
      </nav>
    </div>
  )
}

export default Header
