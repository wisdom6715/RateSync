import style from './header.module.css'
import DateWidget from '../widgets/DateWIdget'
import React from 'react'
const Header : React.FC = () => {
  return (
    <div className={style.header}>
        <div>Currency</div>
        <div>
          <DateWidget />
        </div>
    </div>
  )
}

export default Header