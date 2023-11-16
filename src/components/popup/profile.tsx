import React, { useRef, useEffect } from 'react';
import { IoIosLogOut } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import './profile.scss';
import { useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/auth/authSlice';

interface PopupProps {
  closePopup: () => void;
}

const ProfilePopup: React.FC<PopupProps> = ({ closePopup }) => {
  const dispatch = useAppDispatch();
  const popupRef = useRef<HTMLDivElement>(null);

  const handleLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        closePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closePopup]);

  return (
    <div ref={popupRef} className="profile-popup">
      <ul>
        <li className="item">
          <CgProfile />
          <p>Profile</p>
        </li>
        <li className="item" onClick={handleLogOut}>
          <IoIosLogOut />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default ProfilePopup;
