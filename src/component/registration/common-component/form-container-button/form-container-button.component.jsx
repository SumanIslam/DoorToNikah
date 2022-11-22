import React from 'react'

// styles
import './form-container-button.style.scss'

const FormContainerButton = ({ title, url, current }) => {
  return (
    <>
    <li className={`list-item ${current && 'current'}`}>
      <a href={url}>{title}</a>
    </li>
    </>
  )
}

export default FormContainerButton;