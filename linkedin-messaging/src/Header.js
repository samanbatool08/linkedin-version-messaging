import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption.js';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img 
                src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' 
                alt=''/>

                <div className='header__search'>
                    {/* SearchIcon from materialui */}
                    <SearchIcon />
                    <input placeholder='Search' type='text'/>
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar='https://avatars0.githubusercontent.com/u/56152644?s=460&u=15a0b16837aa00de7f062b08c9eb8ade70820006&v=4' title='me'/>
            </div>
        </div>
    )
}

export default Header;
