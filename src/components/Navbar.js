import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.png';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <Nav className='navbar navbar-expand-sm bg-dark navbar-dark px-sm-5'>
        <Link to='/'>
          <img src={logo} alt='xmchx-phone' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              @MyShop
            </Link>
          </li>
        </ul>
        <Link to='/history' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-cart-plus ' />
            </span>
            Purchase History
          </ButtonContainer>
        </Link>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-cart-plus ' />
            </span>
            Shopping Cart
          </ButtonContainer>
        </Link>
        <Link to='/login' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-cart-plus ' />
            </span>
            Login
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;
