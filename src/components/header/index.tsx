import { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import './index.scss';
import Popup from '../popup';

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <header className="header">
      <div className=" header-main">
        <div
          id="notification"
          className="notification"
          onClick={handleButtonClick}
        >
          <BsBell className="notification-icon" />
          <div className="items">1</div>
        </div>
        {isPopupOpen && <Popup closePopup={handleClosePopup} />}
        <img
          className="avatar"
          src="https://geniusdevs.com/codecanyon/omnimart40/assets/images/1631023655pexels-moose-photos-1036627.jpg"
          alt="avatar"
        />
      </div>
    </header>
  );
}

export default Header;
