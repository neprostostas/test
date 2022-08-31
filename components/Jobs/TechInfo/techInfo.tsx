import { ReactElement } from 'react';
import s from './techInfo.module.css';

import trashIcon from "../../../public/trash.svg"
import filterIcon from "../../../public/filter.svg"

export default function TechInfo({ user }: any): ReactElement {

  const userType = [
    'Dispatcher',
    'Main Tech',
    'Master Tech',
    'Admin'
  ]

  const drawUserType = userType.map((type, index) => {
    if (type == user.type) {
      return (
        <div key={index} style={{ background: '#355094', color: '#FFFFFF' }} >{type}</div>
      )
    } else {
      return (
        <div key={index} >{type}</div>
      )
    }

  })


  return (
    <div className={s.techInfo}>

      <div className={s.topPanel}>
        <div className={s.userName}>{user.fullName}</div>
        <button className={s.trashButton}>
          <img src={trashIcon} alt="trashIcon" />
        </button>
      </div>

      <hr className={s.hrLine} />


      <div className={s.typeText}>Choose type</div>

      <div className={s.type}>
        {drawUserType}
      </div>

      <div className={s.inputWrapper}>
        <label htmlFor="Full Name">
          <p>Full Name</p>
          <input type="text"
            readOnly value={user.fullName}
          />
        </label>
        <label htmlFor="Login">
          <p>Login</p>
          <input type="text"
            readOnly value={user.login}
          />
        </label>
        <label htmlFor="Password">
          <p>Password</p>
          <input type="text"
            readOnly value={user.password}
          />
        </label>
      </div>

      <div className={s.bottomSection}>
        <button className={s.filterButton}>
          <img src={filterIcon} alt="filterIcon" />
        </button>
        <hr className={s.hrLineV} />
        <div className={s.saveButton}>
          SAVE
        </div>
      </div>

    </div>
  );
}
