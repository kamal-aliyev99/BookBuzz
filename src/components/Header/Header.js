"use client"

import Link from 'next/link';
import Input from '../Input/Input';
import './Header.scss';
import {
    FaUser
} from 'react-icons/fa';
import dynamic from 'next/dynamic';

const Profile = dynamic(() => import('../Profile/Profile'), { ssr: false });
const Search = dynamic(() => import('../Search/Search'), { ssr: false });

const Header = () => {

  return (
    <header className='header container'>
      <Search/>
      <div className='header__control'>
        <nav className='nav'>
            <Link href="/products">
                Products
            </Link>
            <Link href="/cart">
                Cart
            </Link>
        </nav>
        <Profile/>
      </div>
    </header>
  );
};

export default Header;