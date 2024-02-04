import React, { useState, useEffect } from 'react'
import "../Navbar/Navbar.scss";
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo for capstone.jpg'
import cartIcon from '../../assets/Icons/shopping-cart.png'
import { IconButton,} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const cartProducts = useSelector(state=>state.cart.products)    
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash) {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.log("Target not found")
                }
            }
        };
        window.addEventListener('hashchange', handleHashChange);
        return () => {
          window.removeEventListener('hashchange', handleHashChange);
        };
      }, []);
    const scrollToAbout = () => {
        window.location.hash = '#about';  // Update the URL with the hash
    };
    const scrollToContact = (sectionId) => {
        window.location.hash = `#${sectionId}`;
    }
    
  return (
    <div className='Navbar'>
        <div className='Navbar--container'>
            <NavLink to='/' onClick={() => window.scrollTo(0,0)}><img className='Navbar-logo' src={Logo} alt="elevate logo"/></NavLink>
            <div className='Navbar-links'>
                <NavLink to='/'><span>Home</span></NavLink>
                <NavLink to='/products'><span>Shop</span></NavLink>
                <span onClick={scrollToAbout}>About</span>
                <NavLink to='/contact' onClick={() => scrollToContact('contact')}><span>Contact</span></NavLink>
                <div className='Navbar-menu--cartIcon-wrapper' onClick={() => setOpen(!open)}>
                    <img className="Navbar-menu--cartIcon-largeScreen" src={cartIcon} alt="cart-icon" /> 
                    <span>{cartProducts.length}</span>   
                </div>
               
            </div>

            <div className='Navbar-menu'>
                <div className='Navbar-menu--cartIcon-wrapper' onClick={() => setOpen(!open)}>
                    <img className="Navbar-menu--cartIcon-smallScreen" src={cartIcon} alt="cart-icon" />    
                    <span>{cartProducts.length}</span>
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
        {open && <Cart open={open} onClose={() => setOpen(false)}/>}
    </div>
  )
}

export default Navbar