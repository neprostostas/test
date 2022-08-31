import { ReactElement, useState } from 'react';
import s from './allTechList.module.css';
import allUsersIcon from "../../../public/allUsers.svg"
import searchIcon from "../../../public/search.svg"

import jobDispatcherIcon from "../../../public/job/jobDispatcher.svg"
// import jobTechIcon from "../../../public/job/jobTech.svg"

import infoJson from "../../../info.json";

export default function AllTechList({ setUser }: any): ReactElement {

  const allTechList = infoJson.map((users) => {
    return (
      <div onClick={() => {
        setUser(users)
      }}
        key={users.id} className={s.userRow}>
        <div className={s.userIcon}>
          <img src={jobDispatcherIcon} alt="chatIcon" />
        </div>
        <div className={s.userText}>
          <div className={s.userName}>
            {users.fullName}
          </div>
          <div className={s.userJob}>
            {users.job}
          </div>
        </div>
      </div>
    )
  })

  return (

    <div className={s.allTechList}>

      <div className={s.allUserPanel}>
        <img src={allUsersIcon} alt="allUsersIcon" />
        All users
      </div>

      <div className={s.search}>
        <div className={s.inputWrapper}>
          <input type="text" placeholder="Search" />
          <img src={searchIcon} alt="searchIcon" />
        </div>
      </div>

      {allTechList}

    </div>
  );
}