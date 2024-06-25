import '../style/Share/MenuItem.scss'
import React from 'react'

export default ({
  icon, title, action, isActive = null,
}) => (
  <button
    className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
    onClick={action}
    title={title}
  >
    Jokopie
  </button>
)