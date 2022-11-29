import React from 'react'
import { Link } from 'react-router-dom';
// styles
import './nav-button.style.scss'

const NavButton = ({ title, url, current }) => {
  return (
    <>
    <li className={`list-item ${current && 'current'}`}>
      <Link to={url}>{title}</Link>
    </li>
    </>
  )
}

export default NavButton;