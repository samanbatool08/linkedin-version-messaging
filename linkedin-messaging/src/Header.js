import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <h1>this is the header</h1>

            <div classNmae='header__left'>
                <img src='' alt=''/>

                <div className='header__search'>
                    {/* SearchIcon from materialui */}
                    <SearchIcon />
                    <input type='text'/>
                </div>
            </div>

            <div className='header__right'>

            </div>
        </div>
    )
}

export default Header;
