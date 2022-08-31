import { ReactElement, useState } from 'react'
import s from './jobs.module.css'
import TechInfo from "./TechInfo/techInfo"
import AllTechList from "./AllTechList/allTechList"
import chatIcon from "../../public/chat.svg"
import searchIcon from "../../public/search.svg"
import plusIcon from "../../public/plus.svg"

export default function Jobs(): ReactElement {

    const [user, setUser] = useState({
        fullName: '',
        login: '',
        password: '',
        type: '',
    })

    useState({
        fullname: user.fullName,
        login: user.login,
        password: user.password,
        type: user.type,
    })

    return (
        <div className={s.jobs} >

            <div className={s.header}>
                <div className={s.text}>
                    Admin Panel
                </div>
                <div className={s.search}>
                    <div className={s.inputWrapper}>
                        <input type="text" placeholder="Global search" />
                        <img src={searchIcon} alt="searchIcon" />
                    </div>
                    <hr />
                    <button className={s.circle}>
                        <img src={chatIcon} alt="chatIcon" />
                    </button>
                </div>
            </div>
            <p className={s.jobsText}>
                Jobs
            </p>
            <div className={s.usersPanel}>
                <div className={s.usersText}>
                    Users
                </div>

                <button className={s.newUserButton}>
                    NEW USER
                    <img src={plusIcon} alt="plusIcon" />
                </button>

            </div>
            <hr className={s.hrLine} />


            <div className={s.MainContent}>
                <AllTechList setUser={setUser} />
                <TechInfo user={user} />
            </div>
        </div>
    );
}
