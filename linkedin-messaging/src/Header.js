import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption.js';
import SearchIcon from '@material-ui/icons/Search';

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
                    <input type='text'/>
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption />
            </div>
        </div>
    )
}

export default Header;
