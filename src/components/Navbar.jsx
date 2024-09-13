import React, { useState, useEffect } from 'react';
import { NavbarMenu } from '../mockData/data';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart } from 'react-icons/fa';
import { CiDumbbell } from 'react-icons/ci';
import { MdMenu } from 'react-icons/md';
import ResposiveMenu from './ResposiveMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  // Change nav color when scrolling
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <div>
      <nav>
        <div
          className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 transition-colors duration-300 ${
            color ? 'bg-white' : 'bg-transparent'
          } z-50`}
        >
          {/* Wrapper to center content */}
          <div className='container mx-auto flex justify-between items-center'>
            {/* Logo section */}
            <div className='flex text-2xl items-center gap-2 font-bold uppercase'>
              <CiDumbbell />
              <p>Tshabi </p>
              <p className='text-secondary'>GYM</p>
            </div>

            {/* Menu section */}
            <div className='hidden md:block'>
              <ul className='flex items-center gap-6 text-gray-600'>
                {NavbarMenu.map((items) => (
                  <li key={items.id}>
                    <a
                      href={items.link}
                      className='inline-block py-1 px-3 hover:text-primary font-semibold'
                    >
                      {items.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Icons section */}
            <div className='flex items-center gap-4'>
              <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                <CiSearch />
              </button>
              <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                <FaShoppingCart />
              </button>
            </div>

            {/* Mobile hamburger menu */}
            <div className='md:hidden' onClick={() => setOpen(!open)}>
              <MdMenu className='text-4xl' />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile side section */}
      <ResposiveMenu open={open} />

      {/* Main content section */}
      <main className='pt-[100px]'>
        {/* Your page content goes here */}
      </main>
    </div>
  );
};

export default Navbar;
