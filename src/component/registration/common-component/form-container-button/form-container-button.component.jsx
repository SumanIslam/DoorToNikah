import React from 'react'
import { Link } from 'react-router-dom';
// styles
import './form-container-button.style.scss'

const FormContainerButton = ({ title, url, current }) => {
  return (
    <>
    <li className={`list-item ${current && 'current'}`}>
      <Link to={url}>{title}</Link>
    </li>
    </>
  )
}

export default FormContainerButton;