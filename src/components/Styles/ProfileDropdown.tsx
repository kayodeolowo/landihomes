import React, { useState } from 'react';
import Link from 'next/link'
import { removeUser } from '@/redux/features/userSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    dispatch(removeUser());
    router.push('/')
  };


  return (
    <div className="relative">
      <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
        <div className="w-7 h-7 bg-blue-500 rounded-full"></div> {/* This is the avatar */}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded">
          <ul>
            <Link href='/favorites'>
            <li onClick={toggleDropdown} className="py-2 px-4 cursor-pointer hover:bg-gray-100">Favorites</li>
            </Link>
            
            <Link href='/bookings'>
            <li onClick={toggleDropdown} className="py-2 px-4 cursor-pointer hover:bg-gray-100">Bookings</li>
            </Link>

            
            <li onClick={handleLogout} className="py-2 px-4 cursor-pointer hover:bg-gray-100"> Sign Out</li>
            
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
