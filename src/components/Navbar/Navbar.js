import React, { useState } from 'react'
import "../Navbar/Navbar.scss";
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo for capstone.jpg'
import cartIcon from '../../assets/Icons/shopping-cart.png'
import { IconButton,} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import Cart from '../Cart/Cart';

const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const clickAboutHandler = () => {
        navigate('/about')
    }
  return (
    <div className='Navbar'>
        <div className='Navbar--container'>
            <NavLink to='/'><img className='Navbar-logo' src={Logo} alt="elevate logo"/></NavLink>
            <div className='Navbar-links'>
                <NavLink to='/'><span>Home</span></NavLink>
                <NavLink to='/products'><span>Shop</span></NavLink>
                <span onClick={clickAboutHandler}>About</span>
                <NavLink to='/contact'><span>Contact</span></NavLink>
                <div className='Navbar-menu--cartIcon-wrapper' onClick={() => setOpen(!open)}>
                    <img className="Navbar-menu--cartIcon-largeScreen" src={cartIcon} alt="cart-icon" /> 
                    <span>0</span>   
                </div>
               
            </div>

            <div className='Navbar-menu'>
                <div className='Navbar-menu--cartIcon-wrapper' onClick={() => setOpen(!open)}>
                    <img className="Navbar-menu--cartIcon-smallScreen" src={cartIcon} alt="cart-icon" />    
                    <span>0</span>
                </div>
                
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        width="25px"
                        height="auto"
                    />
                    <MenuList>
                    <NavLink to='/'><MenuItem command='⌘T'>
                        Home
                        </MenuItem></NavLink>
                    <NavLink to='/products'><MenuItem command='⌘N'>
                        Shop
                        </MenuItem></NavLink>
                    <NavLink to='/about'><MenuItem command='⌘⇧N'>
                        About
                        </MenuItem></NavLink>
                    <NavLink to='/contact'><MenuItem command='⌘O'>
                        Contact
                        </MenuItem></NavLink>
                    </MenuList>
                </Menu>
            </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar