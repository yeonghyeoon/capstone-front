import React from 'react'
import "../Navbar/Navbar.scss";
import { NavLink } from 'react-router-dom';
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

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Navbar--container'>
            <NavLink to='/'><img className='Navbar-logo' src={Logo} alt="elevate logo"/></NavLink>
            <div className='Navbar-links'>
                <NavLink to='/'><span>Home</span></NavLink>
                <NavLink to='/shop'><span>Shop</span></NavLink>
                <NavLink to='/about'><span>About</span></NavLink>
                <NavLink to='/contact'><span>Contact</span></NavLink>

            </div>
            <div className='Navbar-menu'>
                <img className="Navbar-menu--cartIcon" src={cartIcon} alt="cart-icon" />
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
                        <MenuItem command='⌘T'>
                        Home
                        </MenuItem>
                        <MenuItem command='⌘N'>
                        Shop
                        </MenuItem>
                        <MenuItem command='⌘⇧N'>
                        About
                        </MenuItem>
                        <MenuItem command='⌘O'>
                        Contact
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar