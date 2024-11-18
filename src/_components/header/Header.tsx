import style from './header.module.css'
import DateWidget from '../widgets/DateWIdget'
import React from 'react'
const Header : React.FC = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.header}>
        {/* <div>Currency</div> */}
        <img src="src/assets/logo.png" alt="" style={{height: 100}}/>
        <div>
          <DateWidget />
        </div>
      </div>
    </div>
  )
}

export default Header