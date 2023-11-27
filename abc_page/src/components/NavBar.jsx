import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const customer = localStorage.getItem('customer')
  const customerObj = JSON.parse(customer)
  const name = customerObj.first_name

  return (
    <nav className="bg-azp p-4 py-6 flex items-center justify-between border-2 border-azs text-azf w-screen">
      <div className="hidden md:flex items-center ml-16">
      <h1 className="text-azblack text-2xl font-init font-semibold ">
      abc Electronics
      </h1>
      </div>
      <div className="hidden md:flex space-x-4 w-1/2 justify-end">
      <Link to='/orders' className="text-white bg-azs py-2 px-4 font-init font-semibold rounded-lg" style={{ marginRight: '3.5rem' }}>
      {name}
     </Link>
      </div>
      <div className="md:hidden flex flex-col items-center border">
      <h1 className="text-white text-2xl font-init font-semibold">
      awc
      </h1>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden top-0 left-0 w-60 h-30 p-4 flex flex-col justify-center items-center bg-azf">
          <Link to='/orders' className="text-white bg-azs py-2 px-4 font-init font-semibold rounded-lg" style={{ marginRight: '3.5rem' }}>
          {name}
          </Link> 
        </div>
      )}
    </nav>
  );
};

export default NavBar;

