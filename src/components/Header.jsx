import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import "./css/Header.css"
function Header() {
    return (
        <div className="qHeader">
            <div className="qHeader-content">
                <div className="qHeader__logo">
                    <img src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif" alt="Logo.png" />
                </div>
                <div className="qHeader__icons">
                    <div className="qHeader__icon"><HomeIcon /></div>
                    <div className="qHeader__icon"><FeaturedPlayListIcon /> </div>
                    <div className="qHeader__icon"><AssignmentIcon /></div>
                    <div className="qHeader__icon"><PeopleAltIcon /></div>
                    <div className="qHeader__icon"><NotificationsIcon /></div>
                </div>
                <div className="qHeader__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="qHeader__Rem">
                    <AccountCircleIcon />
                </div>
                <Button>Add Question</Button>
            </div>
        </div>
    )
}

export default Header