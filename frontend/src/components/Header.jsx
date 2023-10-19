import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import CloseIcon from '@mui/icons-material/CloseIcon';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Button, Input } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Modal from 'react-responsive-modal'
import "react-responsive-modal/styles.css"
import "./css/Header.css"
import PeopleAlt from '@mui/icons-material/PeopleAlt';
function Header() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputUrl, setInputUrl] = useState("");
    // const close = ()=>{
    //     set
    // }

    const Close = <CloseIcon />;

    const modalToggleOpen = () => {
        setIsModalOpen(true);
    }
    const modalToggleClose = () => {
        setIsModalOpen(false);
    }
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
                <Button onClick={modalToggleOpen}>Add Question</Button>
                <Modal open={isModalOpen} closeIcon={Close} onClose={modalToggleClose} closeOnEsc center closeOnOverlayClick={false} styles={{ overlay: { height: 'auto', } }}>
                    <div className="modal__title">
                        <h5>Add Questions</h5>
                        <h5>Share Link</h5>
                    </div>
                    <div className="modal__info">
                        <Avatar className="avatar" />
                        <div className="modal__scope">
                            <PeopleAlt />
                            <p>Public</p>
                            <ExpandMoreIcon />
                        </div>
                    </div>
                    <div className="modal__Field">
                        <Input type='text' placeholder='Enter your question' />
                        <div style={{ display: 'flex', flexDirection: 'column' }} >
                            {/* <Input  /> */}
                            <input value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} style={{ margin: "10px 0px", border: "1px solid lightgray", padding: "10px", outline: "1px solid black" }} type="text" placeholder="Optional: Add link that provide context" />
                            {inputUrl !== "" ? <img src={inputUrl} alt="Error" style={{ height: "40vh", objectFit: "contain" }} /> : null}
                        </div>
                    </div>
                    <div className="modal__buttons">
                        <button className='cancel' onClick={() => setIsModalOpen(false)}>Cancel</button>
                        <button className='add' type='submit'>Add Question</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Header