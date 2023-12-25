import { useState } from 'react';
// import { BsBell } from 'react-icons/bs';
import './index.scss';
import Popup from '../popup';
import ProfilePopup from '../popup/profile';

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

  /*  const handleButtonClick = () => {
    setIsPopupOpen(true);
  }; */
  const handleProfileClick = () => {
    setIsProfile(!isProfile);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <header className="header">
      <div className=" header-main">
        {/* <div
          id="notification"
          className="notification"
          onClick={handleButtonClick}
        >
          <BsBell className="notification-icon" />
          <div className="items">1</div>
        </div> */}
        {isPopupOpen && <Popup closePopup={handleClosePopup} />}
        <img
          onClick={handleProfileClick}
          className="avatar"
          src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1631023655pexels-moose-photos-1036627.jpg"
          alt="avatar"
        />
        {isProfile && <ProfilePopup closePopup={() => setIsProfile(false)} />}
      </div>
    </header>
  );
}

export default Header;
